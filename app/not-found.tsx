import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Not Found",
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    }
  }
}

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
      <h2 className="text-4xl font-bold font-playfair text-[var(--color-primary-600)] mb-4">
        404 - Page Not Found
      </h2>
      <p className="text-[var(--color-neutral-600)] mb-8">
        We couldn't find the page you were looking for.
      </p>
      <Link 
        href="/"
        className="px-6 py-3 bg-[var(--color-primary-600)] text-white font-medium rounded hover:bg-[var(--color-primary-700)] transition-colors"
      >
        Return Home
      </Link>
    </div>
  )
}
