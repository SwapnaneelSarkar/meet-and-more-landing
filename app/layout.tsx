import type React from "react"
import type { Metadata } from "next"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Poppins } from "next/font/google"
import localFont from "next/font/local"
import { Suspense } from "react"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-poppins",
})

const chromate = localFont({
  src: "./fonts/Chromate-Regular.ttf",
  weight: "400",
  display: "swap",
  variable: "--font-display",
})

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
  title: {
    default: "Meet & More",
    template: "%s | Meet & More",
  },
  description:
    "Meet & More is a social dining app that matches you with compatible people for curated restaurant experiences.",
  keywords: [
    "social dining",
    "meet new people",
    "group dinners",
    "restaurant booking",
    "friendship app",
    "Meet and More",
  ],
  openGraph: {
    type: "website",
    url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
    title: "Meet & More — Social Dining App",
    description:
      "Build real connections over great food. Curated restaurants, personality matching, and verified community.",
    images: ["/images/new.png"],
    siteName: "Meet & More",
  },
  twitter: {
    card: "summary_large_image",
    title: "Meet & More — Social Dining App",
    description: "Curated group dinners with compatible people. Safe, welcoming, and unforgettable.",
    images: ["/images/new.png"],
  },
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/images/logo.png",
    shortcut: "/images/logo.png",
    apple: "/images/logo.png",
  },
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${poppins.variable} ${chromate.variable} antialiased`}>
      <body className={`font-sans ${poppins.variable} ${chromate.variable} ${GeistMono.variable}`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
