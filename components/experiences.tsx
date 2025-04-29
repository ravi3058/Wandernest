import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function Experiences() {
  const experiences = [
    {
      id: 1,
      title: "FOR THOSE WHO LOVE To Explore nature",
      description:
        "Discover some of the most beautiful scenery – from the wonders of Snowdonia to the famous beauty of the Scottish Highlands.",
      color: "#8db596",
      image: "https://images.unsplash.com/photo-1682687982501-1e58ab814714?q=80&w=3870&auto=format&fit=crop",
    },
    {
      id: 2,
      title: "FOR THOSE WHO WANT To Relax, rest & re-set",
      description:
        "Experience mind and body connection through breathing exercises and relaxation with our Yoga inspired get away for you and the family.",
      color: "#c4b7a6",
      image: "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?q=80&w=2070&auto=format&fit=crop",
    },
    {
      id: 3,
      title: "FOR THOSE WHO HAVE Four-legged friends",
      description:
        "When going on holiday nobody wants to put their dog in a kennel. So, lets keep the family together with our pet friendly cabins.",
      color: "#d4a59a",
      image: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?q=80&w=2069&auto=format&fit=crop",
    },
  ]

  return (
    <section className="bg-slate-50">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Get Inspired</h2>
        <p className="text-center text-slate-600 mb-10 max-w-2xl mx-auto">
          We've curated some amazing experiences to help you find your next getaway.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {experiences.map((experience) => (
            <Card key={experience.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 relative">
                <Image
                  src={experience.image || "/placeholder.svg"}
                  alt={experience.title}
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">{experience.title}</h3>
                <p className="text-slate-600">{experience.description}</p>
                <Link href={`/services`} className="text-primary font-medium inline-block mt-4 hover:underline">
                  Explore more
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-center mt-10">
          <Button asChild>
            <Link href="/services">View all experiences</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
