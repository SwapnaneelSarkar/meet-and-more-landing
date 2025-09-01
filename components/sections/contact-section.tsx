"use client"

import Image from "next/image"
import Link from "next/link"

export function ContactSection() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="relative mx-auto w-full max-w-5xl px-4 py-12 sm:py-16 md:py-20"
    >
      <header className="mb-6 text-center md:text-left">
        <h2
          id="contact-title"
          className="font-serif text-pretty text-2xl font-semibold tracking-tight text-foreground sm:text-3xl md:text-4xl"
        >
          Contact Meet & More
        </h2>
        <p className="mt-2 max-w-2xl text-balance text-sm text-muted-foreground sm:text-base mx-auto md:mx-0">
          We're here to help with bookings, feedback, and partnerships.
        </p>
      </header>

      <div className="grid grid-cols-1 gap-6 rounded-xl border bg-background/85 p-4 sm:p-6 backdrop-blur sm:grid-cols-5">
        <div className="sm:col-span-3">
          <dl className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <dt className="text-xs font-medium uppercase tracking-wide text-muted-foreground">Email</dt>
              <dd className="mt-1">
                <Link
                  href="mailto:meetandmoredev@gmail.com"
                  className="text-sm sm:text-base font-medium text-foreground underline decoration-orange-500/60 underline-offset-4 hover:text-orange-600 hover:decoration-orange-600"
                >
                  meetandmoredev@gmail.com
                </Link>
              </dd>
            </div>
            <div>
              <dt className="text-xs font-medium uppercase tracking-wide text-muted-foreground">Response time</dt>
              <dd className="mt-1 text-sm sm:text-base font-medium text-foreground">1–2 business days</dd>
            </div>
          </dl>
          <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center md:justify-start">
            <Link
              href="mailto:meetandmoredev@gmail.com"
              className="inline-flex items-center gap-2 rounded-lg bg-orange-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-orange-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-600 w-full sm:w-auto justify-center"
            >
              Email us
            </Link>
            <a
              href="#download"
              className="inline-flex items-center gap-2 rounded-lg border px-4 py-2 text-sm font-medium text-foreground transition hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-600 w-full sm:w-auto justify-center"
            >
              Get the app
            </a>
          </div>
        </div>
        <div className="relative aspect-[4/3] overflow-hidden rounded-lg sm:col-span-2">
          <Image
            src="/images/homeAnimation.png"
            alt="Friends enjoying desserts together"
            fill
            className="object-cover"
            sizes="(min-width: 640px) 40vw, 100vw"
          />
        </div>
      </div>
    </section>
  )
}

export default ContactSection
