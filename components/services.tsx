import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function Services() {
  return (
    <section className="bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title">OUR SERVICES</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="group hover:-translate-y-2 transition-transform duration-300 overflow-hidden">
            <div className="relative h-48 w-full">
              <Image
                src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=2080&auto=format&fit=crop"
                alt="Discover"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <CardContent className="p-6 text-center">
              <h3 className="text-xl font-bold mb-4">DISCOVER</h3>
              <p className="text-slate-600">DISCOVER THE UNDISCOVERED WITH OUR FELLOW TRAVELLERS</p>
              <Link
                href="/services/workation-stays"
                className="text-primary font-medium inline-block mt-4 hover:underline"
              >
                Learn more
              </Link>
            </CardContent>
          </Card>

          <Card className="group hover:-translate-y-2 transition-transform duration-300 overflow-hidden">
            <div className="relative h-48 w-full">
              <Image
                src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=2021&auto=format&fit=crop"
                alt="Get Inspired"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <CardContent className="p-6 text-center">
              <h3 className="text-xl font-bold mb-4">GET INSPIRED</h3>
              <p className="text-slate-600">Inspiration for your next getaway</p>
              <Link
                href="/services/community-hosting"
                className="text-primary font-medium inline-block mt-4 hover:underline"
              >
                Learn more
              </Link>
            </CardContent>
          </Card>

          <Card className="group hover:-translate-y-2 transition-transform duration-300 overflow-hidden">
            <div className="relative h-48 w-full">
              <Image
                src="https://images.unsplash.com/photo-1503220317375-aaad61436b1b?q=80&w=2070&auto=format&fit=crop"
                alt="Itinerary Advisor"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <CardContent className="p-6 text-center">
              <h3 className="text-xl font-bold mb-4">ITINERARY ADVISOR</h3>
              <p className="text-slate-600">
                USE OUR AI-BASED TRIP ADVISOR/ITINERARY WAVE PERSONALISED SPECIALTY FOR YOU
              </p>
              <Link href="/itinerary-advisor" className="text-primary font-medium inline-block mt-4 hover:underline">
                Learn more
              </Link>
            </CardContent>
          </Card>
        </div>
        <div className="text-center mt-10">
          <Button asChild>
            <Link href="/services">View all</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
