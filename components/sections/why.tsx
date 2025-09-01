import { Users, MapPin, ShieldCheck, Utensils, Heart, Clock, Star, Globe } from "lucide-react"

const items = [
  {
    title: "Dine with purpose, not just eat",
    Icon: Heart,
    desc: "Every meal becomes a meaningful connection. Share authentic conversations over delicious food instead of endless scrolling.",
  },
  {
    title: "Curated tables that actually match",
    Icon: Users,
    desc: "AI-powered matching ensures you're seated with people who share your interests, values, and dining preferences.",
  },
  {
    title: "Local gems, perfect timing",
    Icon: MapPin,
    desc: "Discover hidden restaurants in your neighborhood and join tables that fit your schedule—no more last-minute cancellations.",
  },
  {
    title: "Safety built into every interaction",
    Icon: ShieldCheck,
    desc: "Verified profiles, real-time reporting, and community guidelines create a respectful environment for genuine connections.",
  },
  {
    title: "Flexible dining experiences",
    Icon: Clock,
    desc: "From quick coffee meetups to elaborate dinner parties, choose the experience that fits your mood and time.",
  },
  {
    title: "Global community, local connections",
    Icon: Globe,
    desc: "Connect with people from diverse backgrounds while exploring the rich culinary culture of your own city.",
  },
]

export function WhySection() {
  return (
    <section id="why" className="py-14 border-t border-border/60">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mx-auto mb-8 max-w-2xl text-center">
          <h2 className="font-display text-pretty text-3xl font-bold tracking-tight md:text-4xl">Why Meet & More?</h2>
          <p className="mt-3 text-balance text-base leading-6 text-muted-foreground">
            Transform every meal into an opportunity for meaningful connections. We're redefining social dining by making it effortless to meet new people through thoughtfully curated culinary experiences.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {items.map(({ title, Icon, desc }) => (
            <div
              key={title}
              className="group rounded-xl border border-border/60 bg-card/90 p-5 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:border-[#F55636]/30"
            >
              <div className="mb-3 inline-flex items-center gap-2 text-foreground/60">
                <Icon className="size-5 text-[#F55636]" />
                <span className="text-xs font-medium">FEATURE</span>
              </div>
              <h3 className="font-display text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
