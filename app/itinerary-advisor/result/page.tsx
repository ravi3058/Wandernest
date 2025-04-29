"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Separator } from "@/components/ui/separator"
import { Calendar, Clock, MapPin, Sun, Umbrella, AlertTriangle, Info, Download, Share2 } from "lucide-react"
import { toast } from "@/hooks/use-toast"

export default function ItineraryResultPage() {
  const router = useRouter()
  const [itinerary, setItinerary] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Retrieve itinerary data from localStorage
    const storedItinerary = localStorage.getItem("wandernest_itinerary")

    if (storedItinerary) {
      try {
        setItinerary(JSON.parse(storedItinerary))
      } catch (error) {
        console.error("Error parsing itinerary data:", error)
        toast({
          title: "Error loading itinerary",
          description: "There was a problem loading your itinerary data.",
          variant: "destructive",
        })
      }
    } else {
      // Redirect to create page if no itinerary data is found
      toast({
        title: "No itinerary found",
        description: "Please create a new itinerary.",
        variant: "destructive",
      })
      router.push("/itinerary-advisor/create")
    }

    setLoading(false)
  }, [router])

  const handleDownload = () => {
    if (!itinerary) return

    // Create a formatted text version of the itinerary
    let content = `ITINERARY FOR ${itinerary.destination.toUpperCase()}\n`
    content += `${itinerary.dates}\n`
    content += `Travelers: ${itinerary.travelers}\n\n`

    // Add weather summary if available
    if (itinerary.weatherSummary) {
      content += `WEATHER FORECAST:\n`
      content += `Current: ${itinerary.weatherSummary.current.temp_c}°C, ${itinerary.weatherSummary.current.condition}\n`
      content += `Forecast:\n`
      itinerary.weatherSummary.forecast.forEach((day: any) => {
        content += `  ${day.date}: ${day.mintemp_c}°C to ${day.maxtemp_c}°C, ${day.condition}\n`
      })
      content += `\n`
    }

    // Add travel advisory if available
    if (itinerary.travelAdvisory) {
      content += `TRAVEL ADVISORY:\n`
      content += `${itinerary.travelAdvisory.message}\n\n`
    }

    // Add local events if available
    if (itinerary.localEvents && itinerary.localEvents.length > 0) {
      content += `LOCAL EVENTS DURING YOUR STAY:\n`
      itinerary.localEvents.forEach((event: any) => {
        content += `  ${event.date}: ${event.name} (${event.localName})\n`
      })
      content += `\n`
    }

    // Add daily itinerary
    itinerary.days.forEach((day: any) => {
      content += `DAY ${day.day}: ${day.date}\n`

      // Add weather for the day if available
      if (day.weather) {
        content += `Weather: ${day.weather.minTemp}°C to ${day.weather.maxTemp}°C, ${day.weather.condition}\n`
      }

      // Add local events for the day if available
      if (day.localEvents && day.localEvents.length > 0) {
        content += `Events today: ${day.localEvents.map((e: any) => e.name).join(", ")}\n`
      }

      content += `\nSchedule:\n`
      day.activities.forEach((activity: any) => {
        content += `  ${activity.time} (${activity.duration}): ${activity.title}\n`
        content += `    ${activity.description}\n`
        if (activity.weatherTip) {
          content += `    Note: ${activity.weatherTip}\n`
        }
        content += `\n`
      })
      content += `\n`
    })

    // Create a blob and download
    const blob = new Blob([content], { type: "text/plain" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = `${itinerary.destination.replace(/\s+/g, "_")}_itinerary.txt`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)

    toast({
      title: "Itinerary downloaded",
      description: "Your itinerary has been downloaded as a text file.",
    })
  }

  const handleShare = () => {
    if (!itinerary) return

    // Create a shareable URL (in a real app, you might want to save the itinerary to a database and generate a unique URL)
    const shareText = `Check out my travel itinerary for ${itinerary.destination}!`

    if (navigator.share) {
      navigator
        .share({
          title: `${itinerary.destination} Itinerary`,
          text: shareText,
          url: window.location.href,
        })
        .then(() => console.log("Shared successfully"))
        .catch((error) => console.log("Error sharing:", error))
    } else {
      // Fallback for browsers that don't support the Web Share API
      navigator.clipboard.writeText(`${shareText} ${window.location.href}`)
      toast({
        title: "Link copied to clipboard",
        description: "Share this link with others to show your itinerary.",
      })
    }
  }

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-3xl font-bold mb-8">Loading your itinerary...</h1>
      </div>
    )
  }

  if (!itinerary) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-3xl font-bold mb-4">No Itinerary Found</h1>
        <p className="mb-8">We couldn't find your itinerary. Please create a new one.</p>
        <Button asChild>
          <Link href="/itinerary-advisor/create">Create New Itinerary</Link>
        </Button>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold">Your {itinerary.destination} Itinerary</h1>
            <p className="text-slate-600">{itinerary.dates}</p>
          </div>
          <div className="flex gap-2 mt-4 md:mt-0">
            <Button variant="outline" size="sm" onClick={handleDownload}>
              <Download className="h-4 w-4 mr-2" />
              Download
            </Button>
            <Button variant="outline" size="sm" onClick={handleShare}>
              <Share2 className="h-4 w-4 mr-2" />
              Share
            </Button>
            <Button variant="outline" size="sm" asChild>
              <Link href="/itinerary-advisor/create">
                <Info className="h-4 w-4 mr-2" />
                New Itinerary
              </Link>
            </Button>
          </div>
        </div>

        {/* Weather Summary */}
        {itinerary.weatherSummary && (
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Sun className="h-5 w-5 mr-2 text-yellow-500" />
                Weather Forecast
              </CardTitle>
              <CardDescription>Weather conditions during your trip</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium mb-2">Current Weather</h3>
                  <div className="flex items-center gap-4 bg-slate-50 dark:bg-slate-800 p-3 rounded-md">
                    <div className="text-3xl font-bold">{itinerary.weatherSummary.current.temp_c}°C</div>
                    <div>
                      <div className="font-medium">{itinerary.weatherSummary.current.condition}</div>
                      <div className="text-sm text-slate-500">
                        Humidity: {itinerary.weatherSummary.current.humidity}% | Wind:{" "}
                        {itinerary.weatherSummary.current.wind_kph} km/h
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-medium mb-2">Forecast</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    {itinerary.weatherSummary.forecast.map((day: any, index: number) => (
                      <div key={index} className="bg-slate-50 dark:bg-slate-800 p-3 rounded-md">
                        <div className="text-sm text-slate-500">{day.date}</div>
                        <div className="font-medium">
                          {day.mintemp_c}°C to {day.maxtemp_c}°C
                        </div>
                        <div className="text-sm">{day.condition}</div>
                        {day.daily_chance_of_rain > 30 && (
                          <div className="flex items-center text-sm text-blue-500 mt-1">
                            <Umbrella className="h-3 w-3 mr-1" />
                            {day.daily_chance_of_rain}% chance of rain
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Travel Advisory */}
        {itinerary.travelAdvisory && (
          <Alert className="mb-8">
            <AlertTriangle className="h-4 w-4" />
            <AlertTitle>Travel Advisory</AlertTitle>
            <AlertDescription>
              {itinerary.travelAdvisory.message}
              <div className="text-xs text-slate-500 mt-1">
                Source: {itinerary.travelAdvisory.source} (Updated: {itinerary.travelAdvisory.updated})
              </div>
            </AlertDescription>
          </Alert>
        )}

        {/* Local Events */}
        {itinerary.localEvents && itinerary.localEvents.length > 0 && (
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Calendar className="h-5 w-5 mr-2 text-primary" />
                Local Events During Your Stay
              </CardTitle>
              <CardDescription>Special events and holidays that coincide with your trip</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {itinerary.localEvents.map((event: any, index: number) => (
                  <div key={index} className="flex items-start gap-3 bg-slate-50 dark:bg-slate-800 p-3 rounded-md">
                    <div className="bg-primary/10 text-primary px-2 py-1 rounded text-sm font-medium">{event.date}</div>
                    <div>
                      <div className="font-medium">{event.name}</div>
                      <div className="text-sm text-slate-500">
                        {event.localName} {event.type && `(${event.type})`}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {/* Daily Itinerary */}
        <Card>
          <CardHeader>
            <CardTitle>Daily Itinerary</CardTitle>
            <CardDescription>Your day-by-day plan for {itinerary.destination}</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue={`day1`} className="w-full">
              <TabsList className="grid grid-cols-3 md:grid-cols-7 mb-4">
                {itinerary.days.map((day: any, index: number) => (
                  <TabsTrigger key={index} value={`day${day.day}`}>
                    Day {day.day}
                  </TabsTrigger>
                ))}
              </TabsList>

              {itinerary.days.map((day: any, index: number) => (
                <TabsContent key={index} value={`day${day.day}`} className="space-y-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div>
                      <h3 className="text-xl font-bold">
                        Day {day.day}: {day.date}
                      </h3>
                      {day.localEvents && day.localEvents.length > 0 && (
                        <div className="mt-1 text-sm text-primary">
                          <span className="font-medium">Local Events Today:</span>{" "}
                          {day.localEvents.map((e: any) => e.name).join(", ")}
                        </div>
                      )}
                    </div>

                    {day.weather && (
                      <div className="mt-2 md:mt-0 flex items-center gap-2 bg-slate-50 dark:bg-slate-800 px-3 py-1 rounded-md text-sm">
                        {day.weather.condition.toLowerCase().includes("rain") ? (
                          <Umbrella className="h-4 w-4 text-blue-500" />
                        ) : (
                          <Sun className="h-4 w-4 text-yellow-500" />
                        )}
                        <span>
                          {day.weather.minTemp}°C to {day.weather.maxTemp}°C, {day.weather.condition}
                        </span>
                      </div>
                    )}
                  </div>

                  <Separator />

                  <div className="space-y-6">
                    {day.activities.map((activity: any, actIndex: number) => (
                      <div key={actIndex} className="relative pl-8 md:pl-0">
                        <div className="md:grid md:grid-cols-[150px_1fr] gap-4">
                          <div className="absolute left-0 md:static">
                            <div className="flex flex-col">
                              <span className="text-primary font-medium">{activity.time}</span>
                              <span className="text-xs text-slate-500">{activity.duration}</span>
                            </div>
                          </div>

                          <div className="space-y-2">
                            <div className="flex items-start justify-between">
                              <h4 className="font-bold">{activity.title}</h4>
                              <Badge variant="outline">{activity.type}</Badge>
                            </div>
                            <p className="text-slate-600">{activity.description}</p>

                            <div className="flex flex-wrap gap-2 text-sm">
                              {activity.location && (
                                <div className="flex items-center text-slate-500">
                                  <MapPin className="h-3 w-3 mr-1" />
                                  {activity.location}
                                </div>
                              )}

                              {activity.duration && (
                                <div className="flex items-center text-slate-500">
                                  <Clock className="h-3 w-3 mr-1" />
                                  {activity.duration}
                                </div>
                              )}

                              {activity.budgetCategory && (
                                <Badge variant="secondary" className="text-xs">
                                  {activity.budgetCategory.charAt(0).toUpperCase() + activity.budgetCategory.slice(1)}{" "}
                                  Budget
                                </Badge>
                              )}
                            </div>

                            {activity.weatherTip && (
                              <div className="bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-300 p-2 rounded-md text-sm">
                                <Info className="h-3 w-3 inline mr-1" />
                                {activity.weatherTip}
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
