import { Shield, Eye, Flag, BadgeCheck, Lock, Users, Star } from "lucide-react"

const features = [
  {
    Icon: BadgeCheck,
    title: "Verified identity system",
    desc: "Multi-layer verification including phone, email, and social media checks. Real people, real connections.",
  },
  {
    Icon: Shield,
    title: "Advanced safety controls",
    desc: "Instant reporting, blocking, and emergency contacts. Hosts can set guest limits and table rules.",
  },
  {
    Icon: Eye,
    title: "Transparent community",
    desc: "Clear ratings, reviews, and host history. See who you're dining with before you commit.",
  },
  {
    Icon: Lock,
    title: "Privacy by design",
    desc: "Control what others see about you. Hide personal details while maintaining authenticity.",
  },
  {
    Icon: Users,
    title: "Community guidelines",
    desc: "Enforced standards that promote respect, inclusion, and genuine connections.",
  },
  {
    Icon: Star,
    title: "Trust scoring",
    desc: "AI-powered trust algorithm that learns from every interaction and helps match compatible diners.",
  },
]

export function TrustFeatures() {
  return (
    <section id="features" className="py-14">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mx-auto mb-8 max-w-2xl text-center">
          <h2 className="font-display text-pretty text-3xl font-bold tracking-tight md:text-4xl">Features that build trust</h2>
          <p className="mt-3 text-balance text-base leading-6 text-muted-foreground">
            Every feature is designed with your security in mind. We believe great dining experiences start with trust.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ Icon, title, desc }) => (
            <div 
              key={title} 
              className="group rounded-xl border border-border/60 bg-card p-5 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:border-[#F55636]/30"
            >
              <div className="mb-3 inline-flex items-center gap-2 text-foreground/70">
                <Icon className="size-5" />
                <span className="text-xs font-medium">DETAIL</span>
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
