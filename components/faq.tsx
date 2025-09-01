"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQ() {
  return (
    <section id="faq" aria-labelledby="faq-heading" className="mx-auto max-w-3xl px-4 py-16 sm:py-20">
      <h2
        id="faq-heading"
        className="font-serif text-3xl font-semibold tracking-tight text-foreground text-pretty sm:text-4xl"
      >
        Frequently Asked Questions
      </h2>
      <p className="mt-2 text-sm text-muted-foreground">
        Everything you need to know about Meet &amp; More’s social dining experience.
      </p>

      <Accordion type="single" collapsible className="mt-8 divide-y rounded-md border bg-background">
        <AccordionItem value="q1">
          <AccordionTrigger className="text-left">What is “Meet and More”?</AccordionTrigger>
          <AccordionContent>
            “Meet and More” is a social dining app that lets you connect with strangers over dinner. Whether you’re
            looking for good conversation, new friends, or a unique evening, the app makes it easy to meet people
            nearby.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="q2">
          <AccordionTrigger className="text-left">How does it work?</AccordionTrigger>
          <AccordionContent>
            Create a profile, set your preferences (time, cuisine, location), get matched based on availability and
            interests, then confirm your dinner plan and meet at the selected spot.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="q3">
          <AccordionTrigger className="text-left">Is it safe?</AccordionTrigger>
          <AccordionContent>
            Yes. We use basic user verification, allow reporting/blocking at any time, and encourage meetups in public
            restaurants or cafes.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="q4">
          <AccordionTrigger className="text-left">Can I use this app for dating?</AccordionTrigger>
          <AccordionContent>
            While it’s not specifically a dating app, authentic interactions are encouraged. If romance sparks—great!
            The core idea is to meet interesting people over dinner.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="q5">
          <AccordionTrigger className="text-left">Do I need to be in a specific location?</AccordionTrigger>
          <AccordionContent>
            The app currently works in selected cities. Enter your location to see if we’re active in your
            area—expansion is ongoing.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  )
}

export default FAQ
