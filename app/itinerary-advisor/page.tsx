import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { ArrowRight, Calendar, Clock, Compass, Map, Sparkles, Users } from "lucide-react"

export default function ItineraryAdvisorPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">AI-Powered Itinerary Advisor</h1>
          <p className="text-xl text-slate-600 mb-8">
            Let our AI create a personalized travel itinerary based on your preferences, budget, and travel style.
          </p>
          <Button size="lg" asChild>
            <Link href="/itinerary-advisor/create">
              Create Your Itinerary <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Sparkles className="mr-2 h-5 w-5 text-primary" />
                Personalized Recommendations
              </CardTitle>
              <CardDescription>Tailored to your unique preferences</CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                Our AI analyzes thousands of travel options to create an itinerary that matches your interests, budget,
                and travel style. Whether you're a foodie, adventure seeker, or culture enthusiast, we'll find the
                perfect experiences for you.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Clock className="mr-2 h-5 w-5 text-primary" />
                Save Time Planning
              </CardTitle>
              <CardDescription>From hours to minutes</CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                Skip the hours of research and planning. Our AI can generate a complete itinerary in minutes, including
                accommodations, activities, restaurants, and transportation options that fit your schedule.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Map className="mr-2 h-5 w-5 text-primary" />
                Discover Hidden Gems
              </CardTitle>
              <CardDescription>Beyond the tourist traps</CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                Our AI knows about those special places that don't always make it to the top of search results. Discover
                local favorites, off-the-beaten-path attractions, and authentic experiences that make your trip truly
                memorable.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Users className="mr-2 h-5 w-5 text-primary" />
                Connect with Fellow Travelers
              </CardTitle>
              <CardDescription>Share and collaborate</CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                Share your itinerary with friends or find travelers with similar plans. Our platform makes it easy to
                coordinate group trips or meet new friends who'll be in the same location.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="bg-slate-50 rounded-xl p-8 mb-16">
          <h2 className="text-2xl font-bold mb-6 text-center">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Compass className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-bold mb-2">1. Tell Us Your Preferences</h3>
              <p className="text-slate-600">Share your destination, dates, interests, budget, and travel style.</p>
            </div>

            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-bold mb-2">2. AI Creates Your Itinerary</h3>
              <p className="text-slate-600">Our AI generates a personalized day-by-day plan based on your inputs.</p>
            </div>

            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-bold mb-2">3. Customize & Finalize</h3>
              <p className="text-slate-600">Review, adjust, and save your perfect travel plan.</p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-bold mb-6">Ready to Plan Your Dream Trip?</h2>
          <Button size="lg" asChild>
            <Link href="/itinerary-advisor/create">
              Create Your Itinerary <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
