"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { toast } from "@/hooks/use-toast"
import {
  Calendar,
  Clock,
  LogOut,
  MapPin,
  Settings,
  Star,
  User,
  Briefcase,
  Heart,
  Bookmark,
  MessageSquare,
  Bell,
  ArrowRight,
} from "lucide-react"

export default function DashboardPage() {
  const router = useRouter()
  const [user, setUser] = useState<any>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // In a real app, you would verify the user's session/token with the backend
    const storedUser = localStorage.getItem("wandernest_user")

    if (storedUser) {
      setUser(JSON.parse(storedUser))
    } else {
      // Redirect to login if no user data found
      router.push("/login")
    }

    setIsLoading(false)
  }, [router])

  const handleLogout = () => {
    // Clear user data from localStorage
    localStorage.removeItem("wandernest_user")
    localStorage.removeItem("wandernest_token")

    toast({
      title: "Logged out",
      description: "You have been successfully logged out.",
    })

    router.push("/")
  }

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <div className="animate-spin w-8 h-8 border-4 border-primary border-t-transparent rounded-full mx-auto"></div>
        <p className="mt-4">Loading your dashboard...</p>
      </div>
    )
  }

  if (!user) {
    return null // Router will redirect to login
  }

  // Mock data for the dashboard
  const upcomingBookings = [
    {
      id: "booking1",
      title: "Mountain Retreat Workspace",
      location: "Himachal Pradesh, India",
      dates: "May 15 - May 22, 2025",
      status: "confirmed",
      image: "https://images.unsplash.com/photo-1571983823232-07c35b70baae?q=80&w=2070&auto=format&fit=crop",
    },
    {
      id: "booking2",
      title: "Creator's Collective",
      location: "Bangalore, India",
      dates: "June 10 - June 17, 2025",
      status: "pending",
      image: "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?q=80&w=2070&auto=format&fit=crop",
    },
  ]

  const pastBookings = [
    {
      id: "booking3",
      title: "Beachside Digital Nomad Haven",
      location: "Goa, India",
      dates: "January 5 - January 12, 2025",
      rating: 4,
      image: "https://images.unsplash.com/photo-1540202404-a2f29016b523?q=80&w=2033&auto=format&fit=crop",
    },
    {
      id: "booking4",
      title: "Urban Productivity Hub",
      location: "Delhi, India",
      dates: "February 20 - February 27, 2025",
      rating: 5,
      image: "https://images.unsplash.com/photo-1565538810643-b5bdb714032a?q=80&w=2069&auto=format&fit=crop",
    },
  ]

  const savedItineraries = [
    {
      id: "itinerary1",
      destination: "Barcelona, Spain",
      dates: "May 15 - May 20, 2025",
      created: "March 10, 2025",
    },
    {
      id: "itinerary2",
      destination: "Tokyo, Japan",
      dates: "October 5 - October 15, 2025",
      created: "February 28, 2025",
    },
  ]

  const notifications = [
    {
      id: "notif1",
      title: "Booking Confirmed",
      message: "Your booking at Mountain Retreat Workspace has been confirmed.",
      time: "2 days ago",
      read: false,
    },
    {
      id: "notif2",
      title: "New Message",
      message: "You have a new message from the host of Creator's Collective.",
      time: "1 week ago",
      read: true,
    },
    {
      id: "notif3",
      title: "Special Offer",
      message: "You've received a special discount for your next booking!",
      time: "2 weeks ago",
      read: true,
    },
  ]

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/4">
          <Card>
            <CardContent className="p-6">
              <div className="flex flex-col items-center text-center">
                <Avatar className="h-24 w-24 mb-4">
                  <AvatarImage
                    src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1780&auto=format&fit=crop"
                    alt={user.name}
                  />
                  <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <h2 className="text-xl font-bold">{user.name}</h2>
                <p className="text-sm text-muted-foreground mb-4">{user.email}</p>
                <div className="flex gap-2 mb-6">
                  <Badge variant="outline">Traveler</Badge>
                  <Badge variant="outline">Digital Nomad</Badge>
                </div>
                <div className="w-full space-y-2">
                  <Button variant="outline" className="w-full justify-start" asChild>
                    <Link href="/dashboard">
                      <User className="mr-2 h-4 w-4" />
                      Profile
                    </Link>
                  </Button>
                  <Button variant="outline" className="w-full justify-start" asChild>
                    <Link href="/dashboard/bookings">
                      <Calendar className="mr-2 h-4 w-4" />
                      Bookings
                    </Link>
                  </Button>
                  <Button variant="outline" className="w-full justify-start" asChild>
                    <Link href="/dashboard/itineraries">
                      <Briefcase className="mr-2 h-4 w-4" />
                      Itineraries
                    </Link>
                  </Button>
                  <Button variant="outline" className="w-full justify-start" asChild>
                    <Link href="/dashboard/saved">
                      <Heart className="mr-2 h-4 w-4" />
                      Saved
                    </Link>
                  </Button>
                  <Button variant="outline" className="w-full justify-start" asChild>
                    <Link href="/dashboard/messages">
                      <MessageSquare className="mr-2 h-4 w-4" />
                      Messages
                    </Link>
                  </Button>
                  <Button variant="outline" className="w-full justify-start" asChild>
                    <Link href="/dashboard/settings">
                      <Settings className="mr-2 h-4 w-4" />
                      Settings
                    </Link>
                  </Button>
                  <Button variant="outline" className="w-full justify-start text-red-500" onClick={handleLogout}>
                    <LogOut className="mr-2 h-4 w-4" />
                    Logout
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="md:w-3/4">
          <h1 className="text-3xl font-bold mb-6">Welcome back, {user.name.split(" ")[0]}!</h1>

          <Tabs defaultValue="overview" className="mb-8">
            <TabsList>
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="bookings">Bookings</TabsTrigger>
              <TabsTrigger value="itineraries">Itineraries</TabsTrigger>
              <TabsTrigger value="notifications">Notifications</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-6 pt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Upcoming Bookings</CardTitle>
                  <CardDescription>Your next adventures</CardDescription>
                </CardHeader>
                <CardContent>
                  {upcomingBookings.length > 0 ? (
                    <div className="space-y-4">
                      {upcomingBookings.map((booking) => (
                        <div key={booking.id} className="flex gap-4 items-center">
                          <div className="relative h-16 w-24 rounded-md overflow-hidden">
                            <Image
                              src={booking.image || "/placeholder.svg"}
                              alt={booking.title}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div className="flex-1">
                            <h3 className="font-semibold">{booking.title}</h3>
                            <div className="flex items-center text-sm text-muted-foreground">
                              <MapPin className="h-3 w-3 mr-1" />
                              {booking.location}
                            </div>
                            <div className="flex items-center text-sm text-muted-foreground">
                              <Calendar className="h-3 w-3 mr-1" />
                              {booking.dates}
                            </div>
                          </div>
                          <Badge variant={booking.status === "confirmed" ? "default" : "secondary"}>
                            {booking.status === "confirmed" ? "Confirmed" : "Pending"}
                          </Badge>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-muted-foreground">No upcoming bookings.</p>
                  )}
                </CardContent>
                <CardFooter>
                  <Button variant="outline" asChild className="w-full">
                    <Link href="/dashboard/bookings">View All Bookings</Link>
                  </Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Saved Itineraries</CardTitle>
                  <CardDescription>Your travel plans</CardDescription>
                </CardHeader>
                <CardContent>
                  {savedItineraries.length > 0 ? (
                    <div className="space-y-4">
                      {savedItineraries.map((itinerary) => (
                        <div key={itinerary.id} className="flex justify-between items-center">
                          <div>
                            <h3 className="font-semibold">{itinerary.destination}</h3>
                            <div className="flex items-center text-sm text-muted-foreground">
                              <Calendar className="h-3 w-3 mr-1" />
                              {itinerary.dates}
                            </div>
                            <div className="flex items-center text-sm text-muted-foreground">
                              <Clock className="h-3 w-3 mr-1" />
                              Created on {itinerary.created}
                            </div>
                          </div>
                          <Button variant="ghost" size="sm" asChild>
                            <Link href={`/itinerary-advisor/result?id=${itinerary.id}`}>
                              View <ArrowRight className="ml-1 h-3 w-3" />
                            </Link>
                          </Button>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-muted-foreground">No saved itineraries.</p>
                  )}
                </CardContent>
                <CardFooter>
                  <Button variant="outline" asChild className="w-full">
                    <Link href="/itinerary-advisor/create">Create New Itinerary</Link>
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>

            <TabsContent value="bookings" className="space-y-6 pt-6">
              <h2 className="text-xl font-bold mb-4">Upcoming Bookings</h2>
              {upcomingBookings.length > 0 ? (
                <div className="grid md:grid-cols-2 gap-4">
                  {upcomingBookings.map((booking) => (
                    <Card key={booking.id}>
                      <div className="relative h-40 w-full">
                        <Image
                          src={booking.image || "/placeholder.svg"}
                          alt={booking.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <CardContent className="p-6">
                        <h3 className="font-bold text-lg mb-2">{booking.title}</h3>
                        <div className="space-y-1 mb-4">
                          <div className="flex items-center text-sm text-muted-foreground">
                            <MapPin className="h-4 w-4 mr-1" />
                            {booking.location}
                          </div>
                          <div className="flex items-center text-sm text-muted-foreground">
                            <Calendar className="h-4 w-4 mr-1" />
                            {booking.dates}
                          </div>
                        </div>
                        <div className="flex justify-between items-center">
                          <Badge variant={booking.status === "confirmed" ? "default" : "secondary"}>
                            {booking.status === "confirmed" ? "Confirmed" : "Pending"}
                          </Badge>
                          <Button variant="outline" size="sm">
                            Manage Booking
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              ) : (
                <p className="text-muted-foreground">No upcoming bookings.</p>
              )}

              <h2 className="text-xl font-bold mb-4 mt-8">Past Bookings</h2>
              {pastBookings.length > 0 ? (
                <div className="grid md:grid-cols-2 gap-4">
                  {pastBookings.map((booking) => (
                    <Card key={booking.id}>
                      <div className="relative h-40 w-full">
                        <Image
                          src={booking.image || "/placeholder.svg"}
                          alt={booking.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <CardContent className="p-6">
                        <h3 className="font-bold text-lg mb-2">{booking.title}</h3>
                        <div className="space-y-1 mb-4">
                          <div className="flex items-center text-sm text-muted-foreground">
                            <MapPin className="h-4 w-4 mr-1" />
                            {booking.location}
                          </div>
                          <div className="flex items-center text-sm text-muted-foreground">
                            <Calendar className="h-4 w-4 mr-1" />
                            {booking.dates}
                          </div>
                          <div className="flex items-center">
                            <div className="flex mr-1">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  className={`h-4 w-4 ${
                                    i < booking.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                                  }`}
                                />
                              ))}
                            </div>
                            <span className="text-sm">Your rating</span>
                          </div>
                        </div>
                        <Button variant="outline" size="sm" className="w-full">
                          Book Again
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              ) : (
                <p className="text-muted-foreground">No past bookings.</p>
              )}
            </TabsContent>

            <TabsContent value="itineraries" className="space-y-6 pt-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold">Your Itineraries</h2>
                <Button asChild>
                  <Link href="/itinerary-advisor/create">Create New Itinerary</Link>
                </Button>
              </div>

              {savedItineraries.length > 0 ? (
                <div className="grid md:grid-cols-2 gap-4">
                  {savedItineraries.map((itinerary) => (
                    <Card key={itinerary.id}>
                      <CardHeader>
                        <CardTitle>{itinerary.destination}</CardTitle>
                        <CardDescription>
                          <div className="flex items-center">
                            <Calendar className="h-4 w-4 mr-1" />
                            {itinerary.dates}
                          </div>
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground">Created on {itinerary.created}</p>
                      </CardContent>
                      <CardFooter className="flex justify-between">
                        <Button variant="outline" size="sm">
                          <Bookmark className="mr-2 h-4 w-4" />
                          Save
                        </Button>
                        <Button size="sm" asChild>
                          <Link href={`/itinerary-advisor/result?id=${itinerary.id}`}>View Itinerary</Link>
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              ) : (
                <Card>
                  <CardContent className="p-6 text-center">
                    <p className="text-muted-foreground mb-4">You haven't created any itineraries yet.</p>
                    <Button asChild>
                      <Link href="/itinerary-advisor/create">Create Your First Itinerary</Link>
                    </Button>
                  </CardContent>
                </Card>
              )}
            </TabsContent>

            <TabsContent value="notifications" className="space-y-6 pt-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold">Notifications</h2>
                <Button variant="outline" size="sm">
                  Mark All as Read
                </Button>
              </div>

              {notifications.length > 0 ? (
                <div className="space-y-4">
                  {notifications.map((notification) => (
                    <Card key={notification.id} className={notification.read ? "opacity-70" : ""}>
                      <CardContent className="p-4 flex items-start gap-4">
                        <div className={`p-2 rounded-full ${notification.read ? "bg-slate-100" : "bg-primary/10"}`}>
                          <Bell className={`h-5 w-5 ${notification.read ? "text-slate-500" : "text-primary"}`} />
                        </div>
                        <div className="flex-1">
                          <div className="flex justify-between items-start">
                            <h3 className="font-semibold">{notification.title}</h3>
                            <span className="text-xs text-muted-foreground">{notification.time}</span>
                          </div>
                          <p className="text-sm text-muted-foreground">{notification.message}</p>
                        </div>
                        {!notification.read && <div className="h-2 w-2 rounded-full bg-primary shrink-0 mt-2"></div>}
                      </CardContent>
                    </Card>
                  ))}
                </div>
              ) : (
                <p className="text-muted-foreground">No notifications.</p>
              )}
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
