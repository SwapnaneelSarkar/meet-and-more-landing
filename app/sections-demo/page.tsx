import { BackgroundSlideshow } from "@/components/background-slideshow"
import { WhySection } from "@/components/sections/why"
import { HowItWorks } from "@/components/sections/how-it-works"
import { RealStories } from "@/components/sections/real-stories"
import { TrustFeatures } from "@/components/sections/trust-features"
import { GetTheApp } from "@/components/sections/get-the-app"
import { FAQ } from "@/components/faq"
import Link from "next/link"

export default function SectionsDemoPage() {
  return (
    <main className="relative">
      <BackgroundSlideshow
        images={[
          "/images/1.jpg",
          "/images/2.jpg",
          "/images/3.jpg",
          "/images/4.jpg",
          "/images/5.jpg",
        ]}
        intervalMs={4500}
        overlayOpacity={0.72}
      />

      {/* Hero */}
      <section className="relative mx-auto max-w-6xl px-4 pt-24 md:pt-28">
        <div className="rounded-xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm md:p-12">
          <h1 className="font-serif text-balance text-4xl font-semibold tracking-tight text-white md:text-5xl">
            Meet new people over great food—right in your city
          </h1>
          <p className="mt-3 max-w-2xl text-sm text-zinc-200 md:text-base">
            Join curated tables nearby, host your own, and turn “nice to meet you” into new friendships.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <Link
              href="#book"
              className="rounded-lg bg-orange-600 px-5 py-3 text-sm font-medium text-white shadow-lg shadow-orange-600/20 ring-2 ring-orange-500 transition hover:bg-orange-500 focus:outline-none focus-visible:ring-4"
            >
              Join the table
            </Link>
            <Link
              href="#download"
              className="rounded-lg border border-white/15 bg-white/5 px-4 py-3 text-sm text-white hover:bg-white/10"
            >
              Get the app
            </Link>
          </div>
        </div>
      </section>

      <WhySection />
      <HowItWorks />
      <RealStories />
      <TrustFeatures />
      <GetTheApp />
      <FAQ />
    </main>
  )
}
