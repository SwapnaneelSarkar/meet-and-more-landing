"use client"

import type React from "react"

import Link from "next/link"
import { useEffect } from "react"

export default function LegalLayout({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  useEffect(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash)
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }, [])
  return (
    <div className="mx-auto max-w-4xl px-4 py-16">
      <header className="mb-8">
        <h1 className="heading-display text-3xl md:text-4xl text-white">{title}</h1>
        <p className="text-white/80 mt-2">Last updated: {new Date().toLocaleDateString()}</p>
      </header>
      <div className="grid gap-8 md:grid-cols-[220px_1fr]">
        <nav className="md:sticky md:top-24 h-max">
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="#introduction" className="text-white/80 hover:text-white">
                Introduction
              </Link>
            </li>
            <li>
              <Link href="#rights" className="text-white/80 hover:text-white">
                Your Rights
              </Link>
            </li>
            <li>
              <Link href="#contact" className="text-white/80 hover:text-white">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
        <article className="prose prose-invert max-w-none">{children}</article>
      </div>
    </div>
  )
}
