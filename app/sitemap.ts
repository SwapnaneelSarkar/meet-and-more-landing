import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const base = (process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000").replace(/\/$/, "")
  const now = new Date()
  return [
    { url: `${base}/`, lastModified: now, changeFrequency: "daily", priority: 1 },
    { url: `${base}/legal/privacy`, lastModified: now, changeFrequency: "monthly", priority: 0.5 },
    { url: `${base}/legal/terms`, lastModified: now, changeFrequency: "monthly", priority: 0.5 },
    { url: `${base}/legal/cookies`, lastModified: now, changeFrequency: "monthly", priority: 0.5 },
    { url: `${base}/legal/community-guidelines`, lastModified: now, changeFrequency: "monthly", priority: 0.5 },
  ]
}
