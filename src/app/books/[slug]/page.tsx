import { Suspense } from "react"
import { books } from "@/data/books"
import { BookDetail } from "@/components/books/BookDetail"
import { notFound } from "next/navigation"

export function generateStaticParams() {
  return books.map((book) => ({ slug: book.slug }))
}

async function BookContent({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const book = books.find((b) => b.slug === slug)

  if (!book) notFound()

  return <BookDetail book={book} />
}

export default function BookDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  return (
    <Suspense>
      <BookContent params={params} />
    </Suspense>
  )
}
