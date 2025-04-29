"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useParams, useRouter } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "@/hooks/use-toast"
import { Briefcase, Users, Wifi, Check, Star, MapPin, ArrowRight, Loader2 } from "lucide-react"

// Service data (in a real app, this would come from a database)
const servicesData = {
  "workation-stays": {
    title: "Workation Stays",
    description:
      "Curated accommodations in serene, nature-filled locations equipped with high-speed internet & work-friendly setups.",
    icon: Briefcase,
    fullDescription:
      "Experience the perfect blend of work and vacation with our carefully selected workation stays. Each location offers a peaceful environment to boost your productivity while enjoying the beauty of nature. Our properties feature reliable high-speed internet, ergonomic workspaces, and all the amenities you need to work efficiently while feeling like you're on vacation.",
    features: [
      "High-speed fiber internet with backup options",
      "Ergonomic workstations with adjustable desks and chairs",
      "Dedicated quiet zones for focused work",
      "Meeting rooms and collaborative spaces",
      "24/7 technical support",
      "Fully equipped kitchens and coffee stations",
      "Relaxation areas for breaks",
      "Outdoor spaces to recharge",
    ],
    locations: [
      {
        name: "Mountain Retreat Workspace",
        location: "Himachal Pradesh, India",
        price: "₹4,500/night",
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1571983823232-07c35b70baae?q=80&w=2070&auto=format&fit=crop",
      },
      {
        name: "Beachside Digital Nomad Haven",
        location: "Goa, India",
        price: "₹5,200/night",
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1540202404-a2f29016b523?q=80&w=2033&auto=format&fit=crop",
      },
      {
        name: "Forest Connectivity Cabin",
        location: "Uttarakhand, India",
        price: "₹3,800/night",
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?q=80&w=2070&auto=format&fit=crop",
      },
    ],
    testimonials: [
      {
        name: "Priya S.",
        role: "Software Developer",
        comment:
          "The workation stay was exactly what I needed. I was able to meet all my deadlines while enjoying the mountains. The internet was faster than at my office!",
        rating: 5,
      },
      {
        name: "Rahul M.",
        role: "Digital Marketing Consultant",
        comment:
          "I extended my stay from 1 week to 3 weeks because the setup was so perfect. Great workspace, beautiful surroundings, and met some amazing people.",
        rating: 5,
      },
    ],
    faqs: [
      {
        question: "How reliable is the internet connection?",
        answer:
          "All our workation properties feature fiber internet connections with minimum 100 Mbps speeds. We also provide backup connections and power solutions to ensure you stay connected.",
      },
      {
        question: "Can I host meetings or calls?",
        answer:
          "Our properties have dedicated quiet spaces for calls and virtual meetings. Some locations also offer meeting rooms that can be reserved for team sessions.",
      },
      {
        question: "What's the minimum stay duration?",
        answer:
          "Our workation stays can be booked for a minimum of 3 nights, but we offer significant discounts for weekly and monthly bookings.",
      },
    ],
  },
  "community-hosting": {
    title: "Community Hosting",
    description:
      "Community-driven homes designed for networking, bonding, and collaboration. Shared spaces, events, and creative sessions.",
    icon: Users,
    fullDescription:
      "Our community hosting spaces are designed for travelers who want to connect with like-minded individuals. These properties feature thoughtfully designed common areas that encourage interaction, collaboration, and friendship. Whether you're a solo traveler looking to meet new people or a group seeking a collaborative environment, our community hosts create an atmosphere of belonging and shared experiences.",
    features: [
      "Communal kitchens and dining areas",
      "Shared living spaces with comfortable seating",
      "Regular community events and activities",
      "Skill-sharing workshops and sessions",
      "Game nights and social gatherings",
      "Local excursions with fellow guests",
      "Private bedrooms with shared facilities",
      "Community managers to facilitate connections",
    ],
    locations: [
      {
        name: "Creator's Collective",
        location: "Bangalore, India",
        price: "₹2,800/night",
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop",
      },
      {
        name: "Entrepreneur's Hub",
        location: "Mumbai, India",
        price: "₹3,200/night",
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1600494603989-9650cf6ddd3d?q=80&w=2070&auto=format&fit=crop",
      },
      {
        name: "Digital Nomad Community",
        location: "Pondicherry, India",
        price: "₹2,500/night",
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=2071&auto=format&fit=crop",
      },
    ],
    testimonials: [
      {
        name: "Aditya K.",
        role: "Freelance Designer",
        comment:
          "I came for a place to stay and left with lifelong friends and business partners. The community events were the highlight of my stay!",
        rating: 5,
      },
      {
        name: "Neha T.",
        role: "Travel Blogger",
        comment:
          "As a solo female traveler, I felt completely at home. The community manager organized amazing events that helped me connect with everyone.",
        rating: 4,
      },
    ],
    faqs: [
      {
        question: "Is this suitable for introverts?",
        answer:
          "While we encourage community interaction, we respect everyone's personal space and need for alone time. Our spaces include quiet areas and private rooms where you can recharge.",
      },
      {
        question: "What kind of events do you organize?",
        answer:
          "Our events range from casual dinners and game nights to professional networking sessions, skill-sharing workshops, and local excursions. The schedule varies by location and is shared weekly.",
      },
      {
        question: "Can I host my own event or workshop?",
        answer:
          "Yes! We encourage guests to share their skills and passions. Just coordinate with the community manager, and they'll help you organize and promote your event to other guests.",
      },
    ],
  },
  "remote-work-spaces": {
    title: "Remote Work Ready Spaces",
    description:
      "Ergonomic furniture, power backup, dedicated work zones. Quiet zones and collaborative spaces for remote teams or solo workers.",
    icon: Wifi,
    fullDescription:
      "Our remote work ready spaces are designed specifically for professionals who need a productive environment while traveling. Each space features ergonomic furniture, reliable power and internet backup, and thoughtfully designed work zones to maximize your productivity. Whether you're a solo digital nomad or part of a remote team, our spaces provide everything you need to work efficiently in beautiful surroundings.",
    features: [
      "Ergonomic chairs and adjustable desks",
      "Multiple monitors available upon request",
      "Private phone booths for calls",
      "Meeting rooms with video conferencing equipment",
      "24/7 access to work areas",
      "Printer and scanner facilities",
      "Unlimited high-speed internet",
      "Power backup solutions",
    ],
    locations: [
      {
        name: "Urban Productivity Hub",
        location: "Delhi, India",
        price: "₹1,200/day",
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=2069&auto=format&fit=crop",
      },
      {
        name: "Coastal Work Retreat",
        location: "Kochi, India",
        price: "₹950/day",
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1600494603989-9650cf6ddd3d?q=80&w=2070&auto=format&fit=crop",
      },
      {
        name: "Mountain View Workspace",
        location: "Darjeeling, India",
        price: "₹1,100/day",
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?q=80&w=2069&auto=format&fit=crop",
      },
    ],
    testimonials: [
      {
        name: "Vikram S.",
        role: "Tech Entrepreneur",
        comment:
          "The remote work space was perfect for our team retreat. We had productive meetings in the conference room and relaxed together in the evenings.",
        rating: 5,
      },
      {
        name: "Ananya P.",
        role: "UX Designer",
        comment:
          "As someone who needs an ergonomic setup due to back issues, I was impressed with the quality of furniture and attention to detail in the workspace.",
        rating: 5,
      },
    ],
    faqs: [
      {
        question: "Can I book a space for my entire team?",
        answer:
          "Yes! We offer team packages for groups of any size. We can arrange dedicated meeting rooms, collaborative spaces, and even team-building activities.",
      },
      {
        question: "Are the workspaces available 24/7?",
        answer:
          "Yes, all our remote work spaces offer 24/7 access with secure entry systems, so you can work according to your own schedule or timezone requirements.",
      },
      {
        question: "Do you offer day passes?",
        answer:
          "We offer flexible options including day passes, weekly passes, and monthly memberships to suit your needs.",
      },
    ],
  },
}

export default function ServiceDetailPage() {
  const params = useParams()
  const router = useRouter()
  const [service, setService] = useState<any>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [bookingData, setBookingData] = useState({
    startDate: "",
    endDate: "",
    guests: "1",
    location: "",
    specialRequests: "",
  })

  useEffect(() => {
    // In a real app, you would fetch this data from an API
    const serviceId = params.id as string
    const serviceData = servicesData[serviceId as keyof typeof servicesData]

    if (serviceData) {
      setService(serviceData)
    } else {
      // Service not found, redirect to services page
      router.push("/services")
    }
  }, [params.id, router])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setBookingData((prev) => ({ ...prev, [name]: value }))
  }

  const handleBooking = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      const response = await fetch("/api/services/book", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          serviceId: params.id,
          ...bookingData,
        }),
      })

      const data = await response.json()

      if (data.success) {
        toast({
          title: "Booking Confirmed!",
          description: `Your booking has been confirmed with confirmation code: ${data.bookingDetails.confirmationCode}`,
        })

        // Reset form
        setBookingData({
          startDate: "",
          endDate: "",
          guests: "1",
          location: "",
          specialRequests: "",
        })
      } else {
        toast({
          title: "Booking Failed",
          description: data.message || "Something went wrong with your booking. Please try again.",
          variant: "destructive",
        })
      }
    } catch (error) {
      console.error("Booking error:", error)
      toast({
        title: "Booking Failed",
        description: "An unexpected error occurred. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  if (!service) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <Loader2 className="h-8 w-8 animate-spin mx-auto" />
        <p className="mt-4">Loading service details...</p>
      </div>
    )
  }

  const ServiceIcon = service.icon

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
          <Link href="/">Home</Link> / <Link href="/services">Services</Link> / <span>{service.title}</span>
        </div>

        <div className="flex flex-col md:flex-row gap-8 mb-12">
          <div className="md:w-1/2">
            <div className="relative h-64 md:h-96 rounded-lg overflow-hidden">
              <Image
                src={
                  service === servicesData["workation-stays"]
                    ? "https://images.unsplash.com/photo-1571983823232-07c35b70baae?q=80&w=2070&auto=format&fit=crop"
                    : service === servicesData["community-hosting"]
                      ? "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop"
                      : "https://images.unsplash.com/photo-1600494603989-9650cf6ddd3d?q=80&w=2070&auto=format&fit=crop"
                }
                alt={service.title}
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="flex items-center gap-2 mb-4">
              <ServiceIcon className="h-6 w-6 text-primary" />
              <h1 className="text-3xl font-bold">{service.title}</h1>
            </div>
            <p className="text-slate-600 mb-6">{service.fullDescription}</p>
            <div className="mb-6">
              <h2 className="text-lg font-semibold mb-3">Key Features</h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {service.features.map((feature: string, index: number) => (
                  <li key={index} className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <Button size="lg" asChild>
              <a href="#book-now">Book Now</a>
            </Button>
          </div>
        </div>

        <Tabs defaultValue="locations" className="mb-12">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="locations">Locations</TabsTrigger>
            <TabsTrigger value="testimonials">Testimonials</TabsTrigger>
            <TabsTrigger value="faqs">FAQs</TabsTrigger>
          </TabsList>
          <TabsContent value="locations" className="pt-6">
            <h2 className="text-2xl font-bold mb-6">Available Locations</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {service.locations.map((location: any, index: number) => (
                <Card key={index} className="overflow-hidden">
                  <div className="relative h-48">
                    <Image
                      src={location.image || "/placeholder.svg"}
                      alt={location.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-lg">{location.name}</CardTitle>
                    <CardDescription className="flex items-center">
                      <MapPin className="h-4 w-4 mr-1" />
                      {location.location}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-between items-center">
                      <div className="font-bold text-primary">{location.price}</div>
                      <div className="flex items-center">
                        <Star className="h-4 w-4 text-yellow-400 fill-yellow-400 mr-1" />
                        <span>{location.rating}/5</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="testimonials" className="pt-6">
            <h2 className="text-2xl font-bold mb-6">What Our Guests Say</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {service.testimonials.map((testimonial: any, index: number) => (
                <Card key={index}>
                  <CardContent className="pt-6">
                    <div className="flex items-center gap-1 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                    <p className="italic mb-4">"{testimonial.comment}"</p>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="faqs" className="pt-6">
            <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {service.faqs.map((faq: any, index: number) => (
                <div key={index}>
                  <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
                  <p className="text-slate-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        <div id="book-now" className="scroll-mt-16">
          <Card>
            <CardHeader>
              <CardTitle>Book Your {service.title}</CardTitle>
              <CardDescription>Fill out the form below to make a reservation</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleBooking} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="startDate">Check-in Date</Label>
                    <Input
                      id="startDate"
                      name="startDate"
                      type="date"
                      value={bookingData.startDate}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="endDate">Check-out Date</Label>
                    <Input
                      id="endDate"
                      name="endDate"
                      type="date"
                      value={bookingData.endDate}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="guests">Number of Guests</Label>
                    <Input
                      id="guests"
                      name="guests"
                      type="number"
                      min="1"
                      value={bookingData.guests}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="location">Preferred Location</Label>
                    <Input
                      id="location"
                      name="location"
                      placeholder="Select a location"
                      value={bookingData.location}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="specialRequests">Special Requests</Label>
                  <Textarea
                    id="specialRequests"
                    name="specialRequests"
                    placeholder="Any special requirements or requests"
                    value={bookingData.specialRequests}
                    onChange={handleInputChange}
                  />
                </div>
                <Button type="submit" className="w-full" disabled={isLoading}>
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Processing...
                    </>
                  ) : (
                    "Confirm Booking"
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6">Explore Other Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {Object.entries(servicesData)
              .filter(([id]) => id !== params.id)
              .slice(0, 3)
              .map(([id, serviceData]) => {
                const ServiceIcon = serviceData.icon
                return (
                  <Card key={id} className="overflow-hidden">
                    <CardHeader className="pb-2">
                      <div className="flex items-center gap-2">
                        <ServiceIcon className="h-5 w-5 text-primary" />
                        <CardTitle className="text-lg">{serviceData.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-slate-600 mb-4">{serviceData.description}</p>
                      <Button variant="outline" asChild className="w-full">
                        <Link href={`/services/${id}`}>
                          View Details <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                )
              })}
          </div>
        </div>
      </div>
    </div>
  )
}
