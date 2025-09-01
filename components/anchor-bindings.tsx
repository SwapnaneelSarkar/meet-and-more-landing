"use client"

import { useEffect } from "react"

export function AnchorBindings() {
  useEffect(() => {
    const bind = (re: RegExp, target: string) => {
      const els = Array.from(document.querySelectorAll("a, button"))
      els.forEach((el) => {
        const txt = (el.textContent || "").toLowerCase().replace(/\s+/g, " ").trim()
        if (re.test(txt)) {
          if (el.tagName.toLowerCase() === "a") {
            ;(el as HTMLAnchorElement).href = `#${target}`
          } else {
            el.addEventListener("click", () => {
              document.getElementById(target)?.scrollIntoView({ behavior: "smooth", block: "start" })
            })
          }
        }
      })
    }
    bind(/book\s*your\s*seat/i, "download")
    bind(/contact/i, "contact")
  }, [])
  return null
}

export default AnchorBindings
