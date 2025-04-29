import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Calendar, User } from "lucide-react"

export default function BlogPostPage({ params }: { params: { id: string } }) {
  // In a real app, you would fetch the blog post data based on the ID
  const post = {
    id: params.id,
    title: params.id === "1" ? "Get ready to unwind" : "Nourish the mind, body",
    image:
      params.id === "1"
        ? "https://images.unsplash.com/photo-1510798831971-661eb04b3739?q=80&w=2187&auto=format&fit=crop"
        : "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=2022&auto=format&fit=crop",
    date: "April 15, 2025",
    author: "Sarah Johnson",
    content: `
      <p>A cabin getaway can be a wonderful way to relax and reconnect with nature. Many cabin rentals are located in beautiful, secluded areas, surrounded by trees and other natural beauty.</p>
      
      <p>When planning a cabin getaway, consider what activities you want to enjoy during your stay. Many cabins are located near hiking trails, lakes, or other outdoor attractions. Some cabins also offer amenities like hot tubs, fireplaces, or game rooms for indoor entertainment.</p>
      
      <p>It's also important to consider the size of the cabin and how many people will be staying with you. Cabins come in a variety of sizes, from cozy one-bedroom options perfect for couples to larger cabins that can accommodate families or groups of friends.</p>
      
      <p>No matter what type of cabin you choose, a cabin getaway can be a wonderful way to escape the hustle and bustle of daily life and reconnect with nature. So why not start planning your cabin getaway today?</p>
    `,
    relatedPosts: [
      {
        id: "3",
        title: "The Digital Nomad's Guide to India",
        image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2070&auto=format&fit=crop",
      },
      {
        id: "4",
        title: "Sustainable Travel: Reducing Your Carbon Footprint",
        image: "https://images.unsplash.com/photo-1569385210018-127685230669?q=80&w=2070&auto=format&fit=crop",
      },
    ],
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <Link href="/blog" className="flex items-center text-primary mb-8 hover:underline">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to all articles
        </Link>

        <div className="relative h-[400px] w-full rounded-xl overflow-hidden mb-8">
          <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" priority />
        </div>

        <div className="flex items-center gap-4 mb-6">
          <div className="flex items-center text-slate-500">
            <Calendar className="mr-2 h-4 w-4" />
            {post.date}
          </div>
          <div className="flex items-center text-slate-500">
            <User className="mr-2 h-4 w-4" />
            By {post.author}
          </div>
        </div>

        <h1 className="text-4xl font-bold mb-8">{post.title}</h1>

        <div className="prose prose-lg max-w-none mb-12" dangerouslySetInnerHTML={{ __html: post.content }} />

        <div className="border-t pt-12">
          <h2 className="text-2xl font-bold mb-6">Related Articles</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {post.relatedPosts.map((relatedPost) => (
              <div key={relatedPost.id} className="group">
                <Link href={`/blog/${relatedPost.id}`}>
                  <div className="relative h-48 rounded-lg overflow-hidden mb-4">
                    <Image
                      src={relatedPost.image || "/placeholder.svg"}
                      alt={relatedPost.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="text-xl font-bold group-hover:text-primary transition-colors">{relatedPost.title}</h3>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
