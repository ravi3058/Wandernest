import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Briefcase, Home, Users, Calendar, Leaf, Award, Wifi, Sparkles, Globe } from "lucide-react"

export default function ServicesPage() {
  const services = [
    {
      id: "workation-stays",
      title: "Workation Stays",
      description:
        "Curated accommodations in serene, nature-filled locations equipped with high-speed internet & work-friendly setups.",
      icon: Briefcase,
      image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=2071&auto=format&fit=crop",
      badges: ["Remote Work", "Nature", "High-Speed Internet"],
      popular: true,
    },
    {
      id: "personalized-getaways",
      title: "Personalized Getaways",
      description:
        "Stays tailored to your vibe: mountains, beaches, forests, or rural escapes. Custom packages for solo travelers, couples, digital nomads, and creators.",
      icon: Home,
      image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=2080&auto=format&fit=crop",
      badges: ["Customized", "Solo-Friendly", "Couples"],
    },
    {
      id: "local-experiences",
      title: "Local Experiences",
      description:
        "Cultural immersion through guided local tours, treks, workshops, and food experiences. Collaborations with local artisans and hosts.",
      icon: Globe,
      image: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?q=80&w=2086&auto=format&fit=crop",
      badges: ["Cultural", "Food", "Workshops"],
    },
    {
      id: "community-hosting",
      title: "Community Hosting",
      description:
        "Community-driven homes designed for networking, bonding, and collaboration. Shared spaces, events, and creative sessions.",
      icon: Users,
      image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=2070&auto=format&fit=crop",
      badges: ["Networking", "Collaboration", "Events"],
      popular: true,
    },
    {
      id: "flexible-booking",
      title: "Flexible Booking",
      description:
        "Daily, weekly, or monthly rentals with flexible cancellation options. Easy check-in and digital access.",
      icon: Calendar,
      image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=2047&auto=format&fit=crop",
      badges: ["Flexible", "Easy Check-in", "Digital Access"],
    },
    {
      id: "host-onboarding",
      title: "Host Onboarding & Support",
      description:
        "Seamless registration for property owners to list their space. Support with onboarding, photography, pricing, and guest management.",
      icon: Award,
      image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=2074&auto=format&fit=crop",
      badges: ["Property Owners", "Support", "Management"],
    },
    {
      id: "remote-work-spaces",
      title: "Remote Work Ready Spaces",
      description:
        "Ergonomic furniture, power backup, dedicated work zones. Quiet zones and collaborative spaces for remote teams or solo workers.",
      icon: Wifi,
      image: "https://images.unsplash.com/photo-1600494603989-9650cf6ddd3d?q=80&w=2070&auto=format&fit=crop",
      badges: ["Ergonomic", "Quiet Zones", "Collaborative"],
      popular: true,
    },
    {
      id: "community-events",
      title: "Community Events & Retreats",
      description:
        "Curated events like wellness retreats, creator bootcamps, startup hackathons, etc. Hosted at Wandernest properties periodically.",
      icon: Sparkles,
      image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=2012&auto=format&fit=crop",
      badges: ["Wellness", "Creators", "Startups"],
    },
    {
      id: "sustainability",
      title: "Sustainability Integration",
      description:
        "Eco-conscious stays with sustainable practices. Local sourcing, zero-waste goals, and carbon offset programs.",
      icon: Leaf,
      image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=2070&auto=format&fit=crop",
      badges: ["Eco-Friendly", "Zero-Waste", "Carbon Offset"],
    },
  ]

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">Our Services</h1>
        <p className="text-xl text-slate-600 max-w-3xl mx-auto">
          Discover the perfect blend of work, travel, and community with our curated services designed for modern
          explorers.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service) => (
          <Card key={service.id} className="overflow-hidden hover:shadow-lg transition-all">
            <div className="relative h-48">
              <Image src={service.image || "/placeholder.svg"} alt={service.title} fill className="object-cover" />
              {service.popular && (
                <div className="absolute top-2 right-2">
                  <Badge className="bg-primary">Popular</Badge>
                </div>
              )}
            </div>
            <CardHeader>
              <div className="flex items-center gap-2">
                <service.icon className="h-5 w-5 text-primary" />
                <CardTitle>{service.title}</CardTitle>
              </div>
              <CardDescription>{service.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {service.badges.map((badge) => (
                  <Badge key={badge} variant="secondary">
                    {badge}
                  </Badge>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full">
                <Link href={`/services/${service.id}`}>Learn More</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      <div className="mt-16 text-center">
        <h2 className="text-2xl font-bold mb-4">Coming Soon: Membership Perks</h2>
        <p className="text-slate-600 max-w-2xl mx-auto mb-8">
          Join our upcoming loyalty program for frequent travelers. Enjoy exclusive discounts, early-bird retreat
          invites, and community badges.
        </p>
        <Button variant="outline" size="lg">
          Join the Waitlist
        </Button>
      </div>
    </div>
  )
}
