"use client"

import { useEffect, useRef } from "react"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"

type Story = {
  name: string
  role: string
  city: string
  quote: string
}

const stories: Story[] = [
  {
    name: "Aarav Gupta",
    role: "Tech Entrepreneur",
    city: "Bengaluru",
    quote: "Found a table near Indiranagar—ended up meeting two startup founders and a chef. We're now planning a food tech venture together!",
  },
  {
    name: "Priya Kapoor",
    role: "UX Designer",
    city: "Mumbai",
    quote: "Hosted a brunch for four foodies—loved the respectful vibe and how everyone shared their favorite local spots. Great networking!",
  },
  {
    name: "Dmitri Ivanov",
    role: "Data Scientist",
    city: "Moscow",
    quote: "Felt instantly welcome. Great mix of people and a relaxed atmosphere.",
  },
  {
    name: "Rahul Mehta",
    role: "Consultant",
    city: "Delhi",
    quote: "Booked last-minute and still had an amazing dinner with three professionals. We're now regular dining buddies every weekend.",
  },

  {
    name: "Oliver Smith",
    role: "Teacher",
    city: "London",
    quote: "A lovely way to meet folks you wouldn't normally cross paths with.",
  },
  {
    name: "Charlotte Brown",
    role: "Nurse",
    city: "Manchester",
    quote: "Warm, respectful and fun. Left with new friends and restaurant tips.",
  },
  {
    name: "Ananya Reddy",
    role: "Marketing Manager",
    city: "Hyderabad",
    quote: "As a first-time host, the platform made everything so easy and safe. Ended up hosting a monthly food club!",
  },
  {
    name: "Vikram Singh",
    role: "Software Engineer",
    city: "Pune",
    quote: "Met my co-founder over a casual lunch. The app's matching algorithm is spot-on for finding like-minded people.",
  },
    {
    name: "Camila Rodríguez",
    role: "Marketing Specialist",
    city: "Buenos Aires",
    quote: "Una experiencia auténtica: buena comida y conversaciones que valen la pena.",
  },  {
    name: "Camila Rodríguez",
    role: "Marketing Specialist",
    city: "Buenos Aires",
    quote: "Una experiencia auténtica: buena comida y conversaciones que valen la pena.",
  },
  {
    name: "Zara Khan",
    role: "Fashion Designer",
    city: "Chennai",
    quote: "Love exploring new restaurants with food enthusiasts. Made five new friends who share my passion for authentic local cuisine.",
  },
  {
    name: "Natalia Sokolova",
    role: "Product Manager",
    city: "Saint Petersburg",
    quote: "Уютные встречи и интересные разговоры — обязательно приду снова!",
  },
  {
    name: "Aditya Patel",
    role: "Investment Banker",
    city: "Ahmedabad",
    quote: "Perfect for networking while enjoying great food. The safety features give me confidence to meet new people.",
  },
  {
    name: "Meera Iyer",
    role: "Content Creator",
    city: "Kolkata",
    quote: "Hosted a food photography meetup. Everyone was so creative and passionate about documenting culinary experiences.",
  },
  // International additions

  {
    name: "Mateo Álvarez",
    role: "Student",
    city: "Ciudad de México",
    quote: "Conocí gente increíble y descubrí lugares nuevos. Súper recomendado.",
  },
  {
    name: "Valentina Silva",
    role: "Architect",
    city: "São Paulo",
    quote: "Gente amable, ambiente seguro y un plan perfecto para el sábado.",
  },
]

export function RealStories() {
  const trackRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const track = trackRef.current
    if (!track) return

    let raf = 0
    let x = 0
    const speed = 0.4 // px per frame (~24px/s at 60fps)
    const loop = () => {
      x -= speed
      const { width } = track.getBoundingClientRect()
      if (x <= -width / 2) {
        x = 0
      }
      track.style.transform = `translateX(${x}px)`
      raf = requestAnimationFrame(loop)
    }
    loop()

    return () => {
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <section id="stories" className="relative border-y border-border/60 py-14 overflow-hidden">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mx-auto mb-8 max-w-2xl text-center">
          <h2 className="font-display text-pretty text-3xl font-bold tracking-tight md:text-4xl">Real stories from real diners</h2>
          <p className="mt-3 text-balance text-base leading-6 text-muted-foreground">
            Discover how Meet & More is transforming dining experiences and creating meaningful connections across India.
          </p>
        </div>

        <div className="relative overflow-hidden">
          <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent z-10"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent z-10"></div>

          <div className="overflow-hidden">
            <div ref={trackRef} className="flex gap-6 will-change-transform">
              {stories.map((story, idx) => (
                <div
                  key={idx + story.name}
                  className="group min-w-[280px] max-w-xs shrink-0 rounded-xl border border-border/60 bg-card/90 p-5 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:border-[#F55636]/30"
                >
                  <div className="flex items-center gap-3">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src={`/images/${(idx % 2) + 9}.jpg`} alt={`${story.name} headshot`} />
                      <AvatarFallback>{story.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-sm font-medium">{story.name}</p>
                      <p className="text-xs text-muted-foreground">{story.role} · {story.city}</p>
                    </div>
                  </div>
                  <p className="mt-3 text-sm text-pretty">"{story.quote}"</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="mt-6 rounded-xl border border-border/60 bg-card p-6 text-center">
          <p className="text-lg font-semibold">96% of diners report meaningful connections</p>
        </div>
      </div>
    </section>
  )
}
