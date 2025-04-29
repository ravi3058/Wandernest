import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Blog() {
  return (
    <section className="bg-slate-50">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Blog of the week!</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <div className="relative h-48 w-full mb-4 rounded-md overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1542718610-a1d656d1884c?q=80&w=2070&auto=format&fit=crop"
                  alt="Cabin in the woods"
                  fill
                  className="object-cover"
                />
              </div>
              <CardTitle className="text-2xl">Get ready to unwind</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-600 mb-4">
                A cabin getaway can be a wonderful way to relax and reconnect with nature. Many cabin rentals are
                located in beautiful, secluded areas, surrounded by trees and other natural beauty.
              </p>
              <p className="text-slate-600 mb-6">
                A cabin getaway can be a wonderful way to escape the hustle and bustle of daily life and reconnect with
                nature.
              </p>
              <Button asChild>
                <Link href="/blog">Learn more</Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="relative h-48 w-full mb-4 rounded-md overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1588286840104-8957b019727f?q=80&w=2070&auto=format&fit=crop"
                  alt="Yoga retreat"
                  fill
                  className="object-cover"
                />
              </div>
              <CardTitle className="text-2xl">Nourish the mind, body.</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-600 mb-4">
                In today's fast-paced world, taking time to nourish your mind and body is essential. Our wellness
                retreats offer the perfect opportunity to disconnect from daily stresses and reconnect with yourself.
              </p>
              <p className="text-slate-600 mb-6">
                From yoga sessions at sunrise to mindfulness walks through ancient forests, discover how our carefully
                curated experiences can help restore balance to your life.
              </p>
              <Button asChild>
                <Link href="/blog">Learn more</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
        <div className="text-center mt-10">
          <Button variant="outline" asChild>
            <Link href="/blog">View all blog posts</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
