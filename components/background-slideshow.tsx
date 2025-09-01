"use client"

import { useEffect, useMemo, useState } from "react"

type Props = {
  images: string[]
  intervalMs?: number
  overlayOpacity?: number // 0..1
}

/**
 * Fixed, non-scrolling background slideshow that crossfades between images.
 * Places a dark overlay above images for legibility. Decorative only.
 */
export function BackgroundSlideshow({ images, intervalMs = 5000, overlayOpacity = 0.6 }: Props) {
  const [index, setIndex] = useState(0)

  // Preload images once
  const preloaded = useMemo(() => {
    if (typeof window !== 'undefined') {
      images.forEach((src) => {
        const img = new Image()
        img.crossOrigin = "anonymous"
        img.src = src
      })
    }
    return true
  }, [images])

  useEffect(() => {
    if (!images.length) return
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % images.length)
    }, intervalMs)
    return () => clearInterval(id)
  }, [images, intervalMs])

  if (!images.length || !preloaded) return null

  return (
    <div aria-hidden className="fixed inset-0 -z-10">
      {/* Images */}
      {images.map((src, i) => (
        <img
          key={src}
          src={src || "/placeholder.svg"}
          alt=""
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ease-in-out ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      {/* Overlay to boost contrast */}
      <div className="absolute inset-0 bg-black" style={{ opacity: overlayOpacity }} />
    </div>
  )
}

export default BackgroundSlideshow
