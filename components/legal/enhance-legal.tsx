"use client"

import { useEffect, useMemo, useState } from "react"
import { BackgroundSlideshow } from "@/components/background-slideshow"

export default function EnhanceLegal({
  title,
  description,
  images,
  intervalMs = 6000,
  overlayOpacity = 0.72,
  showToc = false,
  showBackground = false, // Add prop to control background display
}: {
  title?: string
  description?: string
  images?: string[]
  intervalMs?: number
  overlayOpacity?: number // 0..1
  showToc?: boolean
  showBackground?: boolean // Add this prop
}) {
  const [headings, setHeadings] = useState<{ id: string; text: string }[]>([])

  useEffect(() => {
    // Hide any "Last updated" bits
    const candidates = Array.from(document.querySelectorAll("p, small, span, time, em, strong"))
    candidates.forEach((el) => {
      if (el.textContent && /last\s*updated/i.test(el.textContent)) {
        el.classList.add("hidden")
      }
    })

    // Collect h2/h3 headings for TOC
    const hs = Array.from(document.querySelectorAll("main h2, article h2, main h3, article h3"))
    const mapped = hs
      .map((h) => {
        if (!h.id) {
          // slugify
          const slug =
            h.textContent
              ?.toLowerCase()
              .replace(/[^a-z0-9]+/g, "-")
              ?.replace(/(^-|-$)/g, "") || ""
          h.id = slug
        }
        ;(h as HTMLElement).style.scrollMarginTop = "96px"
        return { id: h.id, text: h.textContent || "" }
      })
      .filter((x) => x.id)
    setHeadings(mapped)
  }, [])

  const hasToc = useMemo(() => showToc && headings.length > 2, [showToc, headings])

  // Default slides fall back to hero set if none provided
  const slides =
    images && images.length
      ? images
      : ["/images/1.jpg", "/images/2.jpg", "/images/3.jpg", "/images/4.jpg", "/images/5.jpg"]

  return (
    <>
      {/* Only show background if explicitly requested - legal layout already provides it */}
      {showBackground && (
        <BackgroundSlideshow images={slides} intervalMs={intervalMs} overlayOpacity={overlayOpacity} />
      )}

      <div className="mx-auto w-full max-w-5xl px-4">
        {title ? (
          <header className="border-b pb-6 pt-10 sm:pt-14">
            <h1 className="font-serif text-3xl font-semibold tracking-tight text-pretty sm:text-4xl">{title}</h1>
            {description ? <p className="mt-2 max-w-3xl text-sm text-muted-foreground">{description}</p> : null}
          </header>
        ) : null}

        {hasToc && (
          <nav
            aria-label="On this page"
            className="sticky top-20 z-10 -mx-4 mb-6 border-b bg-background/80 px-4 py-2 backdrop-blur"
          >
            <ul className="flex flex-wrap items-center gap-3 text-sm">
              {headings.map((h) => (
                <li key={h.id}>
                  <a
                    href={`#${h.id}`}
                    onClick={(e) => {
                      e.preventDefault()
                      const el = document.getElementById(h.id)
                      if (el) {
                        const top = el.getBoundingClientRect().top + window.scrollY - 96
                        window.history.replaceState(null, "", `#${h.id}`)
                        window.scrollTo({ top, behavior: "smooth" })
                      }
                    }}
                    className="text-muted-foreground hover:text-foreground"
                  >
                    {h.text}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </>
  )
}
