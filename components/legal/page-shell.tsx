"use client"

import type React from "react"
import Link from "next/link"
import { ChevronRight, BookOpen, Shield, Users, Cookie, FileText } from "lucide-react"

function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")
}

// Icon mapping for different legal pages
const getPageIcon = (title: string) => {
  const lowerTitle = title.toLowerCase()
  if (lowerTitle.includes("community") || lowerTitle.includes("guidelines")) return Users
  if (lowerTitle.includes("cookies")) return Cookie
  if (lowerTitle.includes("privacy")) return Shield
  if (lowerTitle.includes("terms")) return FileText
  return BookOpen
}

export default function PageShell({
  title,
  items,
  children,
  description,
}: {
  title: string
  description?: string
  items: { id: string; label: string }[]
  children: React.ReactNode
}) {
  const onNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string, label?: string) => {
    e.preventDefault()
    let el = document.getElementById(id)

    // Fallback: try slug of label, or match heading text if id not found
    if (!el && label) {
      const altId = slugify(label)
      el =
        document.getElementById(altId) ||
        (Array.from(document.querySelectorAll("h2, h3")).find((h) => {
          const t = (h.textContent || "").trim().toLowerCase()
          return t === label.toLowerCase() || t.includes(label.toLowerCase())
        }) as HTMLElement | null)
    }

    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 96 // sticky header offset
      window.history.replaceState(null, "", `#${el.id}`)
      window.scrollTo({ top, behavior: "smooth" })
    }
  }

  // eslint-disable-next-line react-hooks/rules-of-hooks
  if (typeof window !== "undefined") {
    const hash = window.location.hash?.replace("#", "")
    if (hash) {
      const target = document.getElementById(hash)
      if (target) {
        const top = target.getBoundingClientRect().top + window.scrollY - 96
        window.scrollTo({ top, behavior: "smooth" })
      }
    }
  }

  const PageIcon = getPageIcon(title)

  return (
    <main className="mx-auto max-w-7xl px-4 py-20">
      {/* Subtle and professional header */}
      <header className="mb-20 text-center">
        <div className="mx-auto max-w-4xl">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#F55636] mb-8 border border-[#F55636]/20 shadow-lg">
            <PageIcon className="w-8 h-8 text-white" />
          </div>
          <h1 className="font-display text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-[#F55636] to-[#F55636]/80 bg-clip-text text-transparent mb-6">
            {title}
          </h1>
          {description && (
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              {description}
            </p>
          )}
        </div>
      </header>

      <div className="grid gap-16 lg:grid-cols-[280px_1fr]">
        {/* Subtle sidebar navigation */}
        <aside className="h-max lg:sticky lg:top-24">
          <div className="rounded-xl border border-border/60 bg-card/90 p-6 backdrop-blur-sm shadow-sm">
            <h2 className="font-semibold text-lg mb-6 text-foreground flex items-center gap-3">
              <BookOpen className="w-5 h-5 text-[#F55636]" />
              On This Page
            </h2>
            <nav aria-label="On this page">
              <ul className="space-y-2">
                {items.map((it, index) => (
                  <li key={it.id}>
                    <Link
                      href={`#${it.id}`}
                      onClick={(e) => onNavClick(e, it.id, it.label)}
                      className="group flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-all duration-200 p-2 rounded-lg hover:bg-[#F55636]/10"
                    >
                      <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[#F55636]/20 text-[#F55636] text-xs font-medium group-hover:bg-[#F55636]/30 transition-colors duration-200">
                        {index + 1}
                      </span>
                      <span className="flex-1">{it.label}</span>
                      <ChevronRight className="w-3 h-3 text-[#F55636] opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </aside>

        {/* Main content with better section differentiation */}
        <article className="space-y-20">
          {children}
        </article>
      </div>
    </main>
  )
}
