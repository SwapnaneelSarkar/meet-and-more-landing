export function GetTheApp() {
  return (
    <section id="download" className="relative border-t border-border/60 py-14 overflow-hidden">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mx-auto mb-8 max-w-2xl text-center">
          <h2 className="font-display text-pretty text-3xl font-bold tracking-tight md:text-4xl">Get the app</h2>
          <p className="mt-3 text-balance text-base leading-6 text-muted-foreground">
            Whether you're new to the city or simply new to dining alone - discover how strangers become friends, one meal at a time. Join our community of adventurers, food enthusiasts, and connection seekers.
          </p>
        </div>
        
        <div className="grid items-center gap-8 md:grid-cols-2">
          <div className="flex flex-col gap-8 items-center md:items-start">
            <a href="#" aria-label="Download on the App Store">
              <img
                src="/images/badges/appstore.jpeg"
                alt="Download on the App Store"
                className="h-16 w-auto rounded-md"
              />
            </a>
            <a href="#" aria-label="Get it on Google Play">
              <img
                src="/images/badges/playstore.jpeg"
                alt="Get it on Google Play"
                className="h-16 w-auto rounded-md"
              />
            </a>
          </div>
          <div className="group rounded-xl border border-border/60 bg-card p-6 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:border-[#F55636]/30">
            <h3 className="font-display text-xl font-semibold">Book from the web</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Prefer desktop? Start the booking flow online and continue on mobile.
            </p>
            <div className="mt-4 space-y-2">
              <span className="text-sm font-medium text-primary/80">Be the 5th stranger</span>
              <a href="https://app.meetandmore.com" className="block">
                <button className="w-full bg-primary text-primary-foreground ring-2 ring-primary/60 shadow-lg hover:brightness-110 px-4 py-2 rounded-md">
                  Join the table
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
