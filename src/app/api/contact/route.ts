import { NextRequest, NextResponse } from "next/server"
import nodemailer from "nodemailer"

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;")
}

export async function POST(req: NextRequest) {
  try {
    const { name, email, category, message } = await req.json()

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Name, email, and message are required." }, { status: 400 })
    }

    const safeName = escapeHtml(String(name).slice(0, 200))
    const safeEmail = escapeHtml(String(email).slice(0, 200))
    const safeCategory = escapeHtml(String(category || "General Inquiries").slice(0, 100))
    const safeMessage = escapeHtml(String(message).slice(0, 5000))

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })

    const timestamp = new Date().toLocaleString("en-US", { dateStyle: "long", timeStyle: "short" })

    await transporter.sendMail({
      from: `"House of Orisha" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_TO,
      replyTo: email,
      subject: `[House of Orisha] ${safeCategory} — ${safeName}`,
      html: `
<!DOCTYPE html>
<html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width"></head>
<body style="margin:0;padding:0;background:#111111;font-family:Georgia,'Times New Roman',serif;">
<table width="100%" cellpadding="0" cellspacing="0" style="background:#111111;padding:40px 20px;">
<tr><td align="center">
<table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;">

  <!-- Header -->
  <tr><td style="background:linear-gradient(135deg,#0A0A0A 0%,#141414 100%);border:1px solid #C9A84C30;border-bottom:none;padding:36px 40px 28px;text-align:center;">
    <p style="margin:0 0 8px;font-size:9px;letter-spacing:6px;text-transform:uppercase;color:#C9A84C80;">House of Orisha</p>
    <h1 style="margin:0;font-size:26px;font-weight:400;color:#C9A84C;letter-spacing:2px;">New Contact Message</h1>
    <table cellpadding="0" cellspacing="0" style="margin:16px auto 0;"><tr>
      <td style="width:30px;height:1px;background:linear-gradient(to right,transparent,#C9A84C60);"></td>
      <td style="width:8px;"></td>
      <td style="width:6px;height:6px;border:1px solid #C9A84C50;transform:rotate(45deg);"></td>
      <td style="width:8px;"></td>
      <td style="width:30px;height:1px;background:linear-gradient(to left,transparent,#C9A84C60);"></td>
    </tr></table>
  </td></tr>

  <!-- Body -->
  <tr><td style="background:#0A0A0A;border:1px solid #C9A84C20;border-top:none;border-bottom:none;padding:32px 40px;">

    <!-- From -->
    <table cellpadding="0" cellspacing="0" width="100%" style="margin-bottom:24px;">
      <tr><td style="padding:16px 20px;background:#14120E;border-left:3px solid #C9A84C;">
        <p style="margin:0 0 4px;font-size:9px;letter-spacing:3px;text-transform:uppercase;color:#C9A84C;font-weight:700;">Sender</p>
        <p style="margin:0;font-size:16px;color:#F5F0E8;font-weight:700;">${safeName}</p>
        <p style="margin:4px 0 0;font-size:13px;color:#C9A84C90;">${safeEmail}</p>
      </td></tr>
    </table>

    <!-- Category & Time -->
    <table cellpadding="0" cellspacing="0" width="100%" style="margin-bottom:24px;">
      <tr>
        <td width="50%" style="padding:14px 16px;background:#14120E;border:1px solid #C9A84C10;">
          <p style="margin:0 0 4px;font-size:9px;letter-spacing:3px;text-transform:uppercase;color:#C9A84C80;">Category</p>
          <p style="margin:0;font-size:14px;color:#F5F0E8;">${safeCategory}</p>
        </td>
        <td width="8"></td>
        <td width="50%" style="padding:14px 16px;background:#14120E;border:1px solid #C9A84C10;">
          <p style="margin:0 0 4px;font-size:9px;letter-spacing:3px;text-transform:uppercase;color:#C9A84C80;">Received</p>
          <p style="margin:0;font-size:14px;color:#F5F0E8;">${timestamp}</p>
        </td>
      </tr>
    </table>

    <!-- Message -->
    <p style="margin:0 0 10px;font-size:9px;letter-spacing:3px;text-transform:uppercase;color:#C9A84C;font-weight:700;">Message</p>
    <div style="padding:20px;background:#14120E;border:1px solid #C9A84C10;border-radius:2px;">
      <p style="margin:0;font-size:15px;line-height:1.8;color:#F5F0E8CC;white-space:pre-wrap;">${safeMessage}</p>
    </div>

    <!-- Reply button -->
    <table cellpadding="0" cellspacing="0" width="100%" style="margin-top:28px;">
      <tr><td align="center">
        <a href="mailto:${safeEmail}?subject=Re: Your inquiry — House of Orisha" style="display:inline-block;padding:12px 36px;background:#C9A84C;color:#0A0A0A;font-size:11px;font-weight:700;letter-spacing:3px;text-transform:uppercase;text-decoration:none;font-family:Georgia,serif;">Reply to ${safeName}</a>
      </td></tr>
    </table>

  </td></tr>

  <!-- Footer -->
  <tr><td style="background:#0A0A0A;border:1px solid #C9A84C15;border-top:1px solid #C9A84C20;padding:20px 40px;text-align:center;">
    <p style="margin:0 0 4px;font-size:9px;letter-spacing:4px;text-transform:uppercase;color:#C9A84C40;">House of Orisha</p>
    <p style="margin:0;font-size:11px;color:#F5F0E830;">houseoforisha.com &nbsp;&middot;&nbsp; Contact Form Submission</p>
  </td></tr>

</table>
</td></tr>
</table>
</body></html>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    const errMsg = error instanceof Error ? error.message : "Unknown error"
    console.error("Contact form error:", errMsg)
    return NextResponse.json({ error: "Failed to send message. Please try again.", debug: errMsg }, { status: 500 })
  }
}
