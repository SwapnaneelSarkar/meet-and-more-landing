import type { Metadata } from "next"
import type { ReactNode } from "react"
import { BackgroundSlideshow } from "@/components/background-slideshow"
import EnhanceLegal from "@/components/legal/enhance-legal"

export const metadata: Metadata = {
  title: { default: "Legal — Meet & More", template: "%s — Meet & More" },
  description: "Terms, Privacy, Cookies, and Community Guidelines for the Meet & More app.",
}

export default function LegalLayout({ children }: { children: ReactNode }) {
  const slides = ["/images/1.jpg", "/images/2.jpg", "/images/3.jpg", "/images/4.jpg", "/images/5.jpg"]
  return (
    <div className="relative min-h-screen">
      {/* Background behind everything */}
      <BackgroundSlideshow images={slides} intervalMs={6000} overlayOpacity={0.65} fixed className="z-[-1]" />

      {/* Page container */}
      <EnhanceLegal />
      <main className="mx-auto w-full max-w-4xl px-4 py-16 sm:py-20">
        <header className="mb-8">
          {/* Consumers (each page) keep their own h1; this container ensures consistent spacing */}
        </header>
        <div className="rounded-xl border bg-background/85 p-6 shadow-sm backdrop-blur">{children}</div>
      </main>
    </div>
  )
}
