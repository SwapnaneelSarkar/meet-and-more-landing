import { ArrowRight } from "lucide-react"

const steps = [
  {
    title: "Create Your Profile",
    desc: "Set up your dining preferences, dietary restrictions, and availability to help us find the perfect matches for you.",
  },
  {
    title: "Discover Matches",
    desc: "Browse curated dining groups and individuals who share your interests and schedule. Our AI ensures meaningful connections.",
  },
  {
    title: "Join or Host Tables",
    desc: "Choose to join existing dining groups or create your own. Set the time, restaurant, and group size that works for you.",
  },
  {
    title: "Enjoy Meaningful Connections",
    desc: "Meet new people over delicious food, share stories, and build lasting friendships through authentic dining experiences.",
  },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-14 border-t border-border/60">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="font-display text-pretty text-3xl font-bold tracking-tight md:text-4xl">How It Works</h2>
          <p className="mt-3 text-balance text-base leading-6 text-muted-foreground">
            Getting started with Meet & More is simple. Follow these four easy steps to begin your journey 
            of meaningful dining connections.
          </p>
        </div>

        {/* Flowchart Layout */}
        <div className="relative">
          {/* Connecting Lines */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-[#F55636]/20 via-[#F55636]/40 to-[#F55636]/20 transform -translate-y-1/2 z-0" />
          
          {/* Steps Grid */}
          <div className="grid gap-8 md:grid-cols-4 relative z-10">
            {steps.map((step, index) => (
              <div key={step.title} className="relative">
                {/* Step Number Circle */}
                <div className="flex justify-center mb-6">
                  <div className="w-12 h-12 rounded-full bg-[#F55636] text-white flex items-center justify-center font-bold text-lg shadow-lg">
                    {index + 1}
                  </div>
                </div>
                
                {/* Arrow between steps */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-6 -right-4 z-20">
                    <ArrowRight className="w-6 h-6 text-[#F55636]" />
                  </div>
                )}
                
                {/* Step Card */}
                <div className="group rounded-xl border border-border/60 bg-card/90 p-5 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:border-[#F55636]/30">
                  <div className="text-center">
                    <h3 className="font-display text-lg font-semibold mb-3">{step.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
