"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ArrowRight, Menu, Bot, UtensilsCrossed, CreditCard, Bell, Leaf, ShieldCheck } from "lucide-react"
import Link from "next/link"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { JsonLd } from "@/components/seo/json-ld"
import { BackgroundSlideshow } from "@/components/background-slideshow"
import { useState } from "react"
import { WhySection } from "@/components/sections/why"
import { HowItWorks as HowItWorksSection } from "@/components/sections/how-it-works"
import { RealStories } from "@/components/sections/real-stories"
import { TrustFeatures } from "@/components/sections/trust-features"
import { GetTheApp } from "@/components/sections/get-the-app"
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from "@/components/ui/sheet"
import { useIsMobile } from "@/hooks/use-mobile"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

function SectionHeader({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="mx-auto mb-8 max-w-2xl text-center">
      <h2 className="font-display text-pretty text-3xl font-bold tracking-tight md:text-4xl">{title}</h2>
      {subtitle ? <p className="mt-3 text-balance text-base leading-6 text-muted-foreground">{subtitle}</p> : null}
    </div>
  )
}

function SiteBackground() {
  return (
    <div aria-hidden className="fixed inset-0 -z-50">
      <BackgroundSlideshow
        images={["/images/1.jpg", "/images/2.jpg", "/images/3.jpg", "/images/4.jpg", "/images/5.jpg"]}
        intervalMs={6000}
        overlayOpacity={0.72}
      />
    </div>
  )
}

function Navbar() {
  const isMobile = useIsMobile()

  const navigationItems = [
    { href: "#how", label: "How it works" },
    { href: "#features", label: "Features" },
    { href: "#stories", label: "Stories" },
    { href: "#download", label: "Download" },
    { href: "#faq", label: "FAQ" },
  ]

  return (
    <header className="sticky top-0 z-40 border-b border-border/50 bg-background/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/images/logo.png" alt="Meet & More logo" width={32} height={32} />
          <span className="font-display text-lg font-semibold">Meet & More</span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-4 md:flex">
          {navigationItems.map((item) => (
            <a key={item.href} href={item.href} className="text-sm text-foreground/80 hover:text-foreground">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          {/* Desktop CTA Buttons */}
          <a href="#download" className="hidden md:block">
            <Button variant="secondary" className="bg-secondary text-secondary-foreground hover:bg-secondary/80">
              Download App
            </Button>
          </a>
          <a href="#download" className="hidden md:block">
            <Button className="bg-primary text-primary-foreground ring-2 ring-primary/60 shadow-lg hover:brightness-110">
              Join the table <ArrowRight className="ml-2 size-4" />
            </Button>
          </a>

          {/* Mobile Hamburger Menu */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden hover:bg-accent/50">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[320px] sm:w-[400px] p-0">
              <div className="flex flex-col h-full">
                {/* Header with Logo and Branding */}
                <div className="px-6 py-6 border-b border-border/50 bg-gradient-to-r from-primary/5 to-secondary/5">
                  <div className="flex items-center gap-3 mb-2">
                    <Image src="/images/logo.png" alt="Meet & More logo" width={32} height={32} />
                    <span className="font-display text-xl font-semibold">Meet & More</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Your gateway to new adventures through food
                  </p>
                </div>

                {/* Navigation Items */}
                <nav className="flex-1 px-6 py-6">
                  <div className="space-y-2">
                    {navigationItems.map((item, index) => (
                      <a
                        key={item.href}
                        href={item.href}
                        className="group flex items-center gap-3 px-4 py-3 rounded-lg text-base font-medium text-foreground/80 hover:text-foreground hover:bg-accent/50 transition-all duration-200"
                      >
                        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary text-sm font-semibold group-hover:bg-primary/20 transition-colors">
                          {index + 1}
                        </div>
                        <span>{item.label}</span>
                      </a>
                    ))}
                  </div>
                </nav>

                {/* CTA Buttons */}
                <div className="px-6 py-6 border-t border-border/50 bg-muted/30">
                  <div className="space-y-3">
                    <a href="#download" className="block">
                      <Button variant="secondary" className="w-full h-12 bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-all duration-200 font-medium">
                        Download App
                      </Button>
                    </a>
                    <div className="space-y-2">
                      <span className="text-sm font-medium text-primary/80 text-center block">Be the 5th stranger</span>
                      <a href="#download" className="block">
                        <Button className="w-full h-12 bg-primary text-primary-foreground ring-2 ring-primary/60 shadow-lg hover:brightness-110 transition-all duration-200 font-medium">
                          Join the table <ArrowRight className="ml-2 size-4" />
                        </Button>
                      </a>
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground text-center mt-4">
                    Where strangers become friends, one meal at a time
                  </p>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}

function Hero() {
  const headingText = "Connect over dinner, create lasting friendships."
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.03,
        delayChildren: 0.2,
      },
    },
  }

  const characterVariants = {
    hidden: { 
      opacity: 0, 
      y: 20,
      filter: "blur(10px)"
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.6,
        ease: "easeOut" as const,
      },
    },
  }

  return (
    <section className="relative overflow-hidden">
      <div className="relative z-10 mx-auto max-w-6xl px-4 py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="grid items-stretch gap-10 md:grid-cols-2"
        >
          <div className="self-center text-center md:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-4 inline-flex items-center gap-2 rounded-full border border-border/60 px-3 py-1 text-xs text-foreground/70"
            >
              <Image src="/images/logo.png" alt="Meet & More icon" width={18} height={18} />
              Social Dining, Reimagined
            </motion.div>
            <motion.h1
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="font-display text-pretty text-4xl font-bold leading-tight md:text-5xl text-center md:text-left"
            >
              {headingText.split(' ').map((word, wordIndex) => (
                <motion.span
                  key={wordIndex}
                  variants={characterVariants}
                  className="inline-block mr-2"
                  style={{ 
                    transformOrigin: 'center bottom',
                    lineHeight: '1.2',
                    display: 'inline-block',
                    verticalAlign: 'baseline'
                  }}
                >
                  {word}
                </motion.span>
              ))}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mt-4 text-balance text-base leading-6 text-muted-foreground text-center md:text-left"
            >
              Whether you're an expat or tourist in a new city or someone looking to make new friends over culinary experiences - Meet & More is your gateway to new adventures.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-end"
            >
              <div className="flex flex-col items-center sm:items-start gap-2">
                <span className="text-sm font-medium text-primary/80">Be the 5th stranger</span>
                <a href="#download" className="w-full sm:w-auto">
                  <Button
                    size="lg"
                    className="w-full sm:w-auto bg-primary text-primary-foreground ring-2 ring-primary/70 shadow-lg hover:brightness-110"
                  >
                    Join the table
                  </Button>
                </a>
              </div>
              <a href="#download" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  variant="secondary"
                  className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/80 sm:w-auto"
                >
                  Download App
                </Button>
              </a>
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="mt-3 text-xs text-muted-foreground"
            >
              Available on iOS and Android
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mx-auto w-full max-w-md"
          >
            <div className="relative h-56 overflow-hidden rounded-xl border border-border/60 md:h-full">
              <Image
                src="/images/1.jpg"
                alt="Guests sharing a meal together"
                fill
                sizes="(min-width: 768px) 40vw, 100vw"
                className="object-cover"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}





function SocialProof() {
  const testimonials = [
    { name: "Maya", quote: "I met two close friends at my first dinner. The vibe was safe and welcoming." },
    { name: "Ethan", quote: "96% true: I genuinely made meaningful connections. Highly recommend." },
    { name: "Sara", quote: "The restaurant picks are spot on. Amazing food and better company." },
  ]
  const avatars = ["/images/6.jpg", "/images/7.jpg", "/images/8.jpg"]

  return (
    <section id="stories" className="relative border-y border-border/60 py-14 overflow-hidden">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeader title="Real stories from real diners" subtitle="Trusted by a growing community worldwide." />
        <div className="grid gap-4 md:grid-cols-3">
          {testimonials.map((t, idx) => (
            <div key={t.name} className="rounded-xl border border-border/60 bg-card p-5">
              <div className="flex items-center gap-3">
                <Avatar className="h-12 w-12">
                  <AvatarImage src={avatars[idx % avatars.length] || "/placeholder.svg"} alt={`${t.name} headshot`} />
                  <AvatarFallback>{t.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-medium">{t.name}</p>
                  <p className="text-xs text-muted-foreground">Meet & More diner</p>
                </div>
              </div>
              <p className="mt-3 text-sm text-pretty">“{t.quote}”</p>
            </div>
          ))}
        </div>
        <div className="mt-6 rounded-xl border border-border/60 bg-card p-6 text-center">
          <p className="text-lg font-semibold">96% of diners report meaningful connections</p>
        </div>
      </div>
    </section>
  )
}

function Features() {
  const items = [
    {
      icon: <Bot className="size-5" />,
      title: "Personality matching",
      text: "Multi‑signal algorithm for compatibility.",
    },
    {
      icon: <UtensilsCrossed className="size-5" />,
      title: "Curated restaurants",
      text: "Editorial selection and rotating menus.",
    },
    { icon: <CreditCard className="size-5" />, title: "Secure payments", text: "Protected checkout and refunds." },
    {
      icon: <Bell className="size-5" />,
      title: "Real‑time chat & notifications",
      text: "Coordinate easily before you dine.",
    },
    {
      icon: <Leaf className="size-5" />,
      title: "Dietary preferences",
      text: "Filters for vegan, halal, gluten‑free, and more.",
    },
    {
      icon: <ShieldCheck className="size-5" />,
      title: "Verification",
      text: "Safety and community guidelines enforced.",
    },
  ]
  return (
    <section id="features" className="py-14">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeader title="Features that build trust" />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((f) => (
            <div key={f.title} className="rounded-xl border border-border/60 bg-card p-5">
              <div className="mb-3 inline-flex items-center gap-2 text-foreground/70">
                {f.icon}
                <span className="text-xs font-medium">DETAIL</span>
              </div>
              <h3 className="font-display text-lg font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{f.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Download() {
  return (
    <section id="download" className="relative border-t border-border/60 py-14 overflow-hidden">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeader title="Get the app" subtitle="Use the official store links to download." />
        <div className="grid items-center gap-8 md:grid-cols-2">
          <div className="space-y-4 flex flex-col items-center md:items-start">
            <a href="#" aria-label="Download on the App Store">
              <Image
                src="/images/badges/appstore.jpeg"
                alt="Download on the App Store"
                width={320}
                height={96}
                className="h-14 w-auto rounded-md"
              />
            </a>
            <a href="#" aria-label="Get it on Google Play">
              <Image
                src="/images/badges/playstore.jpeg"
                alt="Get it on Google Play"
                width={320}
                height={96}
                className="h-14 w-auto rounded-md"
              />
            </a>
          </div>
          <div className="rounded-xl border border-border/60 bg-card p-6">
            <h3 className="font-display text-xl font-semibold">Book from the web</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Prefer desktop? Start the booking flow online and continue on mobile.
            </p>
            <div className="mt-4">
              <a href="#download">
                <Button className="bg-primary text-primary-foreground ring-2 ring-primary/60 shadow-lg hover:brightness-110">
                  Join the table
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function FAQ() {
  const faqs = [
    {
      q: 'What is "Meet and More"?',
      a: (
        <>
          "Meet and More" is a social dining app that lets you connect with strangers over dinner. Whether you&apos;re
          looking for good conversation, new friends, or just a unique evening, this app makes it easy to meet people
          nearby.
        </>
      ),
    },
    {
      q: "How does it work?",
      a: (
        <div className="space-y-2">
          <ol className="list-decimal pl-5 text-sm text-muted-foreground">
            <li>Create a profile</li>
            <li>Set your preferences (time, cuisine, location)</li>
            <li>Get matched with other users based on mutual availability and interests</li>
            <li>Confirm your dinner plan and meet at the selected spot!</li>
          </ol>
        </div>
      ),
    },
    {
      q: "Is it safe?",
      a: (
        <ul className="list-disc pl-5 text-sm text-muted-foreground">
          <li>Users go through basic verification</li>
          <li>You can report/block users at any time</li>
          <li>All meetups happen in public restaurants or cafes</li>
        </ul>
      ),
    },
    {
      q: "Can I use this app for dating?",
      a: (
        <>
          While "Meet and More" is not specifically a dating app, we encourage authentic interactions. If something
          romantic sparks—great! But the main idea is to meet interesting people over dinner.
        </>
      ),
    },
    {
      q: "Do I need to be at a certain location?",
      a: (
        <>
          The app currently works in selected cities. You can enter your location to see if we&apos;re active in your
          area. Expansion is ongoing!
        </>
      ),
    },
  ]
  return (
    <section id="faq" className="py-14 border-t border-border/60">
      <div className="mx-auto max-w-3xl px-4">
        <SectionHeader title="Frequently asked questions" />
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((f, i) => (
            <AccordionItem value={`item-${i}`} key={f.q} className="border-border/60">
              <AccordionTrigger className="text-left">{f.q}</AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}

function SiteFooter() {
  return (
    <footer className="border-t border-border/60">
      <div className="relative">
        <Image src="/images/subscriptionBg.jpeg" alt="" fill className="object-cover opacity-10" aria-hidden="true" />
        <div className="relative mx-auto grid max-w-6xl gap-6 px-4 py-10 md:grid-cols-4">
          <div className="col-span-2">
            <div className="flex items-center gap-2">
              <Image src="/images/logo.png" alt="Meet & More logo" width={28} height={28} />
              <span className="font-display text-base font-semibold">Meet & More</span>
            </div>
            <p className="mt-3 text-sm text-muted-foreground max-w-sm">
              Connect over dinner and create friendships that last.
            </p>
            <p id="contact" className="mt-3 text-sm">
              Contact:{" "}
              <a
                href="mailto:meetandmoredev@gmail.com"
                className="underline decoration-orange-500/60 underline-offset-4 hover:text-orange-600 hover:decoration-orange-600"
              >
                meetandmoredev@gmail.com
              </a>
            </p>
          </div>
          <nav className="text-sm">
            <p className="mb-2 font-medium">Company</p>
            <ul className="space-y-1">
              <li>
                <a href="#" className="text-foreground/80 hover:text-foreground">
                  About
                </a>
              </li>
              <li>
                <Link href="/legal/community-guidelines" className="text-foreground/80 hover:text-foreground">
                  Community Guidelines
                </Link>
              </li>
            </ul>
          </nav>
          <nav className="text-sm">
            <p className="mb-2 font-medium">Legal</p>
            <ul className="space-y-1">
              <li>
                <Link href="/legal/privacy" className="text-foreground/80 hover:text-foreground">
                  Privacy
                </Link>
              </li>
              <li>
                <Link href="/legal/terms" className="text-foreground/80 hover:text-foreground">
                  Terms
                </Link>
              </li>
              <li>
                <Link href="/legal/cookies" className="text-foreground/80 hover:text-foreground">
                  Cookies
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div className="border-t border-border/60">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-5 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Meet & More</p>
        </div>
      </div>
    </footer>
  )
}

export default function Page() {
  const base = (
    process.env.NEXT_PUBLIC_SITE_URL ||
    (typeof window !== "undefined" ? window.location.origin : "http://localhost:3000")
  ).replace(/\/$/, "")

  const faqEntities = [
    {
      "@type": "Question",
      name: 'What is "Meet and More"?',
      acceptedAnswer: {
        "@type": "Answer",
        text: '"Meet and More" is a social dining app that lets you connect with strangers over dinner. Whether you’re looking for good conversation, new friends, or a unique evening, it makes it easy to meet people nearby.',
      },
    },
    {
      "@type": "Question",
      name: "How does it work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Create a profile. Set your preferences (time, cuisine, location). Get matched with other users based on mutual availability and interests. Confirm your dinner plan and meet at the selected spot!",
      },
    },
    {
      "@type": "Question",
      name: "Is it safe?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Users go through basic verification, you can report or block at any time, and all meetups happen in public restaurants or cafes.",
      },
    },
    {
      "@type": "Question",
      name: "Can I use this app for dating?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "While it isn’t specifically a dating app, authentic interactions are encouraged. If something romantic sparks, great—but the focus is meeting interesting people over dinner.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need to be at a certain location?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The app currently works in selected cities. Enter your location to see if we’re active in your area. Expansion is ongoing.",
      },
    },
  ]

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "Meet & More",
      url: base,
      logo: `${base}/images/logo.png`,
      sameAs: [],
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      url: base,
      name: "Meet & More",
      potentialAction: {
        "@type": "SearchAction",
        target: `${base}/search?q={search_term_string}`,
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "MobileApplication",
      name: "Meet & More",
      operatingSystem: "iOS, Android",
      applicationCategory: "SocialNetworkingApplication",
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqEntities,
    },
  ]

  return (
    <>
      <JsonLd data={jsonLd} />
      <SiteBackground />
      <Navbar />
              <main>
          <Hero />
          <WhySection />
          <HowItWorksSection />
          <RealStories />
          <TrustFeatures />
          <GetTheApp />
          <FAQ />
        </main>
      <SiteFooter />
    </>
  )
}
