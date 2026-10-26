"use client"

import { ReactNode } from "react"

export function SmoothScroll({ children }: { children: ReactNode }) {
  return <div className="relative">{children}</div>
}
