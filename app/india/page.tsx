import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Calendar, Cloud, MapPin, Sun, Umbrella, Wind } from "lucide-react"

// Mock data for Indian destinations with weather information
const destinations = {
  winter: [
    {
      id: "goa",
      name: "Goa",
      description: "Enjoy the perfect beach weather with sunny days and pleasant evenings.",
      image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=2074&auto=format&fit=crop",
      weather: {
        temp: "25-30°C",
        condition: "Sunny",
        rainfall: "Minimal",
      },
      activities: ["Beach hopping", "Water sports", "Nightlife", "Seafood cuisine"],
      bestTime: "November to February",
    },
    {
      id: "rajasthan",
      name: "Rajasthan",
      description: "Explore the royal heritage with comfortable daytime temperatures.",
      image: "https://images.unsplash.com/photo-1477587458883-47145ed94245?q=80&w=2070&auto=format&fit=crop",
      weather: {
        temp: "20-25°C",
        condition: "Sunny and dry",
        rainfall: "None",
      },
      activities: ["Fort tours", "Desert safari", "Cultural experiences", "Heritage walks"],
      bestTime: "October to March",
    },
    {
      id: "kerala",
      name: "Kerala",
      description: "Experience the backwaters and beaches with pleasant weather.",
      image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=2070&auto=format&fit=crop",
      weather: {
        temp: "23-33°C",
        condition: "Moderate humidity",
        rainfall: "Occasional showers",
      },
      activities: ["Houseboat stay", "Ayurvedic treatments", "Wildlife sanctuaries", "Beach relaxation"],
      bestTime: "December to February",
    },
  ],
  summer: [
    {
      id: "himachal",
      name: "Himachal Pradesh",
      description: "Escape the heat in these cool mountain retreats.",
      image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=2070&auto=format&fit=crop",
      weather: {
        temp: "15-25°C",
        condition: "Pleasant and cool",
        rainfall: "Light rainfall possible",
      },
      activities: ["Trekking", "Paragliding", "Camping", "Sightseeing"],
      bestTime: "March to June",
    },
    {
      id: "ladakh",
      name: "Ladakh",
      description: "Visit the high-altitude desert when mountain passes are open.",
      image: "https://images.unsplash.com/photo-1589793907316-f94025b46850?q=80&w=2074&auto=format&fit=crop",
      weather: {
        temp: "10-20°C",
        condition: "Sunny days, cold nights",
        rainfall: "Very dry",
      },
      activities: ["Monastery visits", "Mountain biking", "River rafting", "Star gazing"],
      bestTime: "May to September",
    },
    {
      id: "darjeeling",
      name: "Darjeeling",
      description: "Enjoy the tea gardens and mountain views with mild temperatures.",
      image: "https://images.unsplash.com/photo-1544634076-a90160ddf44c?q=80&w=2070&auto=format&fit=crop",
      weather: {
        temp: "15-25°C",
        condition: "Mild with occasional fog",
        rainfall: "Moderate",
      },
      activities: ["Tea garden tours", "Toy train ride", "Trekking", "Cultural exploration"],
      bestTime: "April to June",
    },
  ],
  monsoon: [
    {
      id: "meghalaya",
      name: "Meghalaya",
      description: "Experience the 'abode of clouds' during the rainy season.",
      image: "https://images.unsplash.com/photo-1605649487212-47bdab064df7?q=80&w=2070&auto=format&fit=crop",
      weather: {
        temp: "15-25°C",
        condition: "Heavy rainfall",
        rainfall: "Very high",
      },
      activities: ["Living root bridges", "Waterfalls", "Cave exploration", "Village tours"],
      bestTime: "June to September",
    },
    {
      id: "valley-of-flowers",
      name: "Valley of Flowers",
      description: "Witness the valley in full bloom during the monsoon.",
      image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?q=80&w=2043&auto=format&fit=crop",
      weather: {
        temp: "10-20°C",
        condition: "Rainy and misty",
        rainfall: "High",
      },
      activities: ["Flower valley trek", "Wildlife spotting", "Photography", "Nature walks"],
      bestTime: "July to September",
    },
    {
      id: "coorg",
      name: "Coorg",
      description: "Enjoy the lush green landscapes of this coffee country.",
      image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=2070&auto=format&fit=crop",
      weather: {
        temp: "20-25°C",
        condition: "Rainy and pleasant",
        rainfall: "High",
      },
      activities: ["Coffee plantation tours", "Waterfall visits", "Trekking", "Bird watching"],
      bestTime: "June to September",
    },
  ],
  spring: [
    {
      id: "sikkim",
      name: "Sikkim",
      description: "Witness the rhododendron blooms and clear mountain views.",
      image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=2187&auto=format&fit=crop",
      weather: {
        temp: "10-22°C",
        condition: "Pleasant with clear skies",
        rainfall: "Low",
      },
      activities: ["Flower trails", "Buddhist monasteries", "Trekking", "Cultural festivals"],
      bestTime: "March to May",
    },
    {
      id: "rishikesh",
      name: "Rishikesh",
      description: "Perfect time for adventure activities before the summer heat.",
      image: "https://images.unsplash.com/photo-1585136917228-a4cdb8f07f35?q=80&w=2069&auto=format&fit=crop",
      weather: {
        temp: "20-30°C",
        condition: "Warm days, cool nights",
        rainfall: "Minimal",
      },
      activities: ["River rafting", "Yoga retreats", "Camping", "Temple visits"],
      bestTime: "February to April",
    },
    {
      id: "kaziranga",
      name: "Kaziranga National Park",
      description: "Ideal time for wildlife spotting before the park closes for monsoon.",
      image: "https://images.unsplash.com/photo-1581985673768-e7194b237209?q=80&w=2070&auto=format&fit=crop",
      weather: {
        temp: "25-35°C",
        condition: "Warm and humid",
        rainfall: "Low",
      },
      activities: ["Jeep safaris", "Elephant rides", "Bird watching", "Wildlife photography"],
      bestTime: "February to April",
    },
  ],
}

export default function IndiaPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Discover India by Season</h1>
        <p className="text-xl text-slate-600 max-w-3xl mx-auto">
          India's diverse climate means there's always a perfect destination to visit. Find your ideal getaway based on
          the weather and season.
        </p>
      </div>

      <Tabs defaultValue="winter" className="mb-12">
        <TabsList className="grid grid-cols-4 mb-8">
          <TabsTrigger value="winter" className="flex items-center gap-2">
            <Sun className="h-4 w-4" />
            Winter
          </TabsTrigger>
          <TabsTrigger value="summer" className="flex items-center gap-2">
            <Sun className="h-4 w-4" />
            Summer
          </TabsTrigger>
          <TabsTrigger value="monsoon" className="flex items-center gap-2">
            <Umbrella className="h-4 w-4" />
            Monsoon
          </TabsTrigger>
          <TabsTrigger value="spring" className="flex items-center gap-2">
            <Cloud className="h-4 w-4" />
            Spring
          </TabsTrigger>
        </TabsList>

        {Object.entries(destinations).map(([season, places]) => (
          <TabsContent key={season} value={season} className="space-y-8">
            <div className="grid md:grid-cols-3 gap-6">
              {places.map((destination) => (
                <Card key={destination.id} className="overflow-hidden hover:shadow-lg transition-all">
                  <div className="relative h-48">
                    <Image
                      src={destination.image || "/placeholder.svg"}
                      alt={destination.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <CardTitle>{destination.name}</CardTitle>
                      <Badge variant="outline" className="bg-primary/10">
                        {season}
                      </Badge>
                    </div>
                    <CardDescription>{destination.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <h3 className="text-sm font-medium">Weather Conditions</h3>
                        <div className="grid grid-cols-3 gap-2 text-sm">
                          <div className="flex items-center gap-1">
                            <Sun className="h-4 w-4 text-yellow-500" />
                            <span>{destination.weather.temp}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Cloud className="h-4 w-4 text-blue-500" />
                            <span>{destination.weather.condition}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Umbrella className="h-4 w-4 text-blue-500" />
                            <span>{destination.weather.rainfall}</span>
                          </div>
                        </div>
                      </div>
                      <div>
                        <h3 className="text-sm font-medium mb-2">Top Activities</h3>
                        <div className="flex flex-wrap gap-1">
                          {destination.activities.map((activity, index) => (
                            <Badge key={index} variant="secondary" className="text-xs">
                              {activity}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4 mr-1" />
                        Best time: {destination.bestTime}
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button asChild className="w-full">
                      <Link href={`/india/${destination.id}`}>Explore Destination</Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>

            <div className="bg-slate-50 dark:bg-slate-800 p-6 rounded-lg">
              <h2 className="text-xl font-bold mb-4">
                Why Visit India in {season.charAt(0).toUpperCase() + season.slice(1)}?
              </h2>
              <p className="text-slate-600 dark:text-slate-300 mb-4">
                {season === "winter" &&
                  "Winter (November to February) offers pleasant temperatures across most of India, making it ideal for exploring cities, beaches, and deserts without the scorching heat."}
                {season === "summer" &&
                  "Summer (March to June) is perfect for hill stations and mountain retreats, offering a cool escape from the heat of the plains."}
                {season === "monsoon" &&
                  "Monsoon (June to September) transforms India into a lush green paradise. While some activities may be limited, it's a magical time for nature lovers and photographers."}
                {season === "spring" &&
                  "Spring (February to April) brings moderate temperatures and blooming landscapes, making it ideal for wildlife sanctuaries and outdoor activities."}
              </p>
              <div className="flex justify-center">
                <Button variant="outline" asChild>
                  <Link href="/itinerary-advisor/create">Create Custom Itinerary</Link>
                </Button>
              </div>
            </div>
          </TabsContent>
        ))}
      </Tabs>

      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Need Personalized Recommendations?</h2>
        <p className="text-lg text-slate-600 mb-6 max-w-2xl mx-auto">
          Chat with our AI travel assistant to get customized itineraries based on your preferences, budget, and the
          current weather conditions.
        </p>
        <Button size="lg" asChild>
          <Link href="/travel-assistant">Chat with Travel Assistant</Link>
        </Button>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <Card>
          <CardHeader>
            <CardTitle>Weather-Based Travel Tips</CardTitle>
            <CardDescription>Make the most of your Indian adventure with these seasonal tips</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-start gap-3">
              <Sun className="h-5 w-5 text-yellow-500 mt-1" />
              <div>
                <h3 className="font-medium">Summer Travel</h3>
                <p className="text-sm text-slate-600">
                  Pack light cotton clothes for the plains, but carry layers if visiting hill stations. Stay hydrated
                  and plan indoor activities during peak afternoon heat.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Umbrella className="h-5 w-5 text-blue-500 mt-1" />
              <div>
                <h3 className="font-medium">Monsoon Travel</h3>
                <p className="text-sm text-slate-600">
                  Carry waterproof bags, raincoats, and water-resistant footwear. Check road conditions before traveling
                  to remote areas and be prepared for potential delays.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Wind className="h-5 w-5 text-blue-300 mt-1" />
              <div>
                <h3 className="font-medium">Winter Travel</h3>
                <p className="text-sm text-slate-600">
                  Northern India gets quite cold, so pack warm clothes if visiting places like Delhi, Agra, or any hill
                  stations. Southern India remains pleasant and requires only light jackets in the evenings.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Cloud className="h-5 w-5 text-purple-400 mt-1" />
              <div>
                <h3 className="font-medium">Spring Travel</h3>
                <p className="text-sm text-slate-600">
                  Carry a mix of light and medium-weight clothing as temperatures can vary. This is a great time for
                  outdoor activities before the summer heat sets in.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Current Weather Highlights</CardTitle>
            <CardDescription>Popular destinations and their current conditions</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between items-center p-3 bg-slate-50 dark:bg-slate-800 rounded-lg">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-primary" />
                  <span className="font-medium">Delhi</span>
                </div>
                <div className="flex items-center gap-2">
                  <Sun className="h-5 w-5 text-yellow-500" />
                  <span>28°C</span>
                </div>
              </div>
              <div className="flex justify-between items-center p-3 bg-slate-50 dark:bg-slate-800 rounded-lg">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-primary" />
                  <span className="font-medium">Mumbai</span>
                </div>
                <div className="flex items-center gap-2">
                  <Cloud className="h-5 w-5 text-blue-500" />
                  <span>32°C</span>
                </div>
              </div>
              <div className="flex justify-between items-center p-3 bg-slate-50 dark:bg-slate-800 rounded-lg">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-primary" />
                  <span className="font-medium">Shimla</span>
                </div>
                <div className="flex items-center gap-2">
                  <Sun className="h-5 w-5 text-yellow-500" />
                  <span>18°C</span>
                </div>
              </div>
              <div className="flex justify-between items-center p-3 bg-slate-50 dark:bg-slate-800 rounded-lg">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-primary" />
                  <span className="font-medium">Kochi</span>
                </div>
                <div className="flex items-center gap-2">
                  <Umbrella className="h-5 w-5 text-blue-500" />
                  <span>30°C</span>
                </div>
              </div>
            </div>
            <div className="text-center mt-4">
              <Button variant="link" asChild>
                <Link href="/weather">View detailed weather forecast</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
