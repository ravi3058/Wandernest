import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function BlogPage() {
  const blogPosts = [
    {
      id: 1,
      title: "Get ready to unwind",
      excerpt: "A cabin getaway can be a wonderful way to relax and reconnect with nature.",
      image: "https://images.unsplash.com/photo-1510798831971-661eb04b3739?q=80&w=2187&auto=format&fit=crop",
      date: "April 15, 2025",
      author: "Sarah Johnson",
    },
    {
      id: 2,
      title: "Nourish the mind, body",
      excerpt: "In today's fast-paced world, taking time to nourish your mind and body is essential.",
      image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=2022&auto=format&fit=crop",
      date: "April 10, 2025",
      author: "Michael Chen",
    },
    {
      id: 3,
      title: "The Digital Nomad's Guide to India",
      excerpt: "Discover the best places to work remotely while exploring India's diverse landscapes.",
      image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2070&auto=format&fit=crop",
      date: "April 5, 2025",
      author: "Priya Sharma",
    },
    {
      id: 4,
      title: "Sustainable Travel: Reducing Your Carbon Footprint",
      excerpt: "Learn how to travel responsibly while minimizing your environmental impact.",
      image: "https://images.unsplash.com/photo-1569385210018-127685230669?q=80&w=2070&auto=format&fit=crop",
      date: "March 28, 2025",
      author: "David Wilson",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8 text-center">Our Blog</h1>
      <p className="text-xl text-slate-600 max-w-3xl mx-auto text-center mb-12">
        Discover travel tips, destination guides, and stories from our community of travelers.
      </p>

      <div className="grid md:grid-cols-2 gap-8">
        {blogPosts.map((post) => (
          <Card key={post.id} className="overflow-hidden">
            <div className="relative h-64 w-full">
              <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
            </div>
            <CardHeader>
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-slate-500">{post.date}</span>
                <span className="text-sm text-slate-500">By {post.author}</span>
              </div>
              <CardTitle className="text-2xl">{post.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-600 mb-6">{post.excerpt}</p>
              <Button asChild>
                <Link href={`/blog/${post.id}`}>Read more</Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-12 flex justify-center">
        <Button variant="outline">Load more articles</Button>
      </div>
    </div>
  )
}
