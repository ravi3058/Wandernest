import { Quote } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

export default function Testimonials() {
  const testimonials = [
    {
      quote:
        "A truly wonderful experience. Brilliant for anyone looking to get away from the hustle and bustle of city life or detox from their tech for a few days. I could have stayed another week! They really have thought about everything here down to the finest details.",
      author: "Sarah J.",
      location: "London, UK",
      date: "01 Jan 2023",
    },
    {
      quote:
        "The community aspect of Wandernest is what sets it apart. I traveled solo but never felt alone. Made friends from around the world that I still keep in touch with. The accommodations were beautiful and the itinerary suggestions were spot on!",
      author: "Michael T.",
      location: "Toronto, Canada",
      date: "15 Mar 2023",
    },
    {
      quote:
        "As a digital nomad, finding good workspaces while traveling is crucial. Wandernest's workation stays had everything I needed - fast internet, comfortable workspace, and a community of like-minded professionals. Highly recommend!",
      author: "Priya M.",
      location: "Bangalore, India",
      date: "22 Apr 2023",
    },
  ]

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="section-title">What Our Travelers Say</h2>

        <Carousel className="max-w-4xl mx-auto">
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index}>
                <Card className="border-none shadow-none">
                  <CardContent className="p-6 text-center">
                    <div className="flex justify-center mb-6">
                      <Quote className="h-12 w-12 text-primary/30" />
                    </div>
                    <p className="text-lg md:text-xl italic text-slate-700 mb-6">{testimonial.quote}</p>
                    <div className="font-medium">{testimonial.author}</div>
                    <div className="text-slate-500">{testimonial.location}</div>
                    <div className="text-slate-500 mt-1">{testimonial.date}</div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center mt-4 gap-2">
            <CarouselPrevious className="relative static" />
            <CarouselNext className="relative static" />
          </div>
        </Carousel>
      </div>
    </section>
  )
}
