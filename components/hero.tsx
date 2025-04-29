import Link from "next/link"
import { Star } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section className="relative h-[80vh] flex items-center text-white">
      <div className="absolute inset-0 bg-black/50 z-0"></div>
      <div
        className="absolute inset-0 bg-cover bg-center z-[-1]"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1682687982501-1e58ab814714?q=80&w=3870&auto=format&fit=crop')",
        }}
      ></div>
      <div className="container mx-auto px-4 relative z-10 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">CONNECT. PLAN. TRAVEL.</h1>
          <p className="text-lg md:text-xl mb-8">
            Connect with fellow travelers, plan personalized trips, and share your adventures. Whether you're seeking
            new friends or unforgettable experiences, your journey begins here. Start exploring today!
          </p>
          <Button size="lg" asChild className="text-lg px-8 py-6">
            <Link href="/services">Get Started</Link>
          </Button>
          <div className="flex items-center justify-center mt-8">
            <div className="flex mr-2 text-yellow-400">
              <Star className="w-5 h-5 fill-current" />
              <Star className="w-5 h-5 fill-current" />
              <Star className="w-5 h-5 fill-current" />
              <Star className="w-5 h-5 fill-current" />
              <Star className="w-5 h-5 fill-current stroke-current fill-yellow-400/50" />
            </div>
            <span>4.5 / 5</span>
          </div>
        </div>
      </div>
    </section>
  )
}
