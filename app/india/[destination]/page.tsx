import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Calendar, Star, Sun, Umbrella } from "lucide-react"

// Mock data for destinations
const destinationsData = {
  goa: {
    name: "Goa",
    tagline: "Sun, Sand, and Serenity",
    description:
      "Goa is India's smallest state and one of its most popular tourist destinations. Known for its stunning beaches, vibrant nightlife, and Portuguese-influenced architecture, Goa offers a unique blend of Indian and Western cultures.",
    image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=2074&auto=format&fit=crop",
    weather: {
      winter: {
        temp: "25-30°C",
        condition: "Sunny and dry",
        rainfall: "Minimal",
        description:
          "Perfect beach weather with warm days and pleasant evenings. Ideal for water sports and outdoor activities.",
      },
      summer: {
        temp: "30-35°C",
        condition: "Hot and humid",
        rainfall: "Occasional pre-monsoon showers",
        description: "Hot days with high humidity. Beaches are less crowded but the heat can be intense during midday.",
      },
      monsoon: {
        temp: "24-28°C",
        condition: "Rainy and windy",
        rainfall: "Heavy",
        description:
          "Lush green landscapes but many beach activities are restricted. Good time for budget travelers and nature lovers.",
      },
      spring: {
        temp: "28-32°C",
        condition: "Warm and moderately humid",
        rainfall: "Very low",
        description:
          "Transitional season with gradually increasing temperatures. Still good for beach activities with fewer tourists than winter.",
      },
    },
    attractions: [
      {
        name: "Calangute Beach",
        description: "Known as the 'Queen of Beaches', this is Goa's largest and most popular beach.",
        image: "https://images.unsplash.com/photo-1614082242765-7c98ca0f3df3?q=80&w=2070&auto=format&fit=crop",
        rating: 4.2,
      },
      {
        name: "Basilica of Bom Jesus",
        description: "UNESCO World Heritage Site housing the mortal remains of St. Francis Xavier.",
        image: "https://images.unsplash.com/photo-1590077428593-a33c3abc4c5b?q=80&w=2002&auto=format&fit=crop",
        rating: 4.5,
      },
      {
        name: "Fort Aguada",
        description: "A well-preserved 17th-century Portuguese fort offering panoramic views of the Arabian Sea.",
        image: "https://images.unsplash.com/photo-1626714100856-8d8fb4427029?q=80&w=2070&auto=format&fit=crop",
        rating: 4.3,
      },
      {
        name: "Dudhsagar Falls",
        description: "One of India's tallest waterfalls, located in the Bhagwan Mahavir Wildlife Sanctuary.",
        image: "https://images.unsplash.com/photo-1629196914168-3a2652305f9f?q=80&w=2070&auto=format&fit=crop",
        rating: 4.7,
      },
      {
        name: "Anjuna Flea Market",
        description: "Famous weekly market selling everything from clothes to spices and souvenirs.",
        image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=2071&auto=format&fit=crop",
        rating: 4.0,
      },
    ],
    activities: [
      "Beach hopping",
      "Water sports (parasailing, jet skiing, banana boat rides)",
      "Cruises and dolphin watching",
      "Spice plantation tours",
      "Nightlife and casinos",
      "Portuguese heritage walks",
      "Seafood culinary experiences",
    ],
    itinerary: {
      days: 5,
      plan: [
        {
          day: 1,
          title: "North Goa Beaches",
          activities: [
            "Breakfast at a beachside café in Baga",
            "Relax at Calangute Beach",
            "Water sports at Candolim Beach",
            "Sunset at Aguada Fort",
            "Dinner and nightlife at Tito's Lane",
          ],
        },
        {
          day: 2,
          title: "Cultural Exploration",
          activities: [
            "Visit Old Goa churches (Basilica of Bom Jesus, Se Cathedral)",
            "Lunch at a traditional Goan restaurant",
            "Explore Fontainhas (Latin Quarter)",
            "Evening river cruise on the Mandovi",
            "Seafood dinner in Panjim",
          ],
        },
        {
          day: 3,
          title: "South Goa Relaxation",
          activities: [
            "Day trip to Palolem Beach",
            "Lunch at beachside shack",
            "Visit Cotigao Wildlife Sanctuary",
            "Explore Cabo de Rama Fort",
            "Sunset at Colva Beach",
          ],
        },
        {
          day: 4,
          title: "Adventure Day",
          activities: [
            "Dudhsagar Falls excursion",
            "Spice plantation tour with traditional lunch",
            "Visit to Tambdi Surla Temple",
            "Evening at Arpora Night Market (if Saturday)",
            "Dinner at a popular beach restaurant",
          ],
        },
        {
          day: 5,
          title: "Relaxation and Shopping",
          activities: [
            "Morning yoga on the beach",
            "Shopping at Anjuna Flea Market (if Wednesday)",
            "Lunch at Curlies Beach Shack",
            "Relaxing Ayurvedic massage",
            "Farewell dinner at a luxury beach resort",
          ],
        },
      ],
    },
  },
  rajasthan: {
    name: "Rajasthan",
    tagline: "Land of Kings and Living Heritage",
    description:
      "Rajasthan, the 'Land of Kings', is India's largest state and a treasure trove of royal heritage, vibrant culture, and desert landscapes. From magnificent forts and palaces to colorful festivals and wildlife, Rajasthan offers an immersive experience into India's regal past.",
    image: "https://images.unsplash.com/photo-1477587458883-47145ed94245?q=80&w=2070&auto=format&fit=crop",
    weather: {
      winter: {
        temp: "10-25°C",
        condition: "Cool and dry",
        rainfall: "None",
        description:
          "Perfect weather for sightseeing with warm days and cool nights. Ideal time to visit the desert and explore outdoor attractions.",
      },
      summer: {
        temp: "32-45°C",
        condition: "Very hot and dry",
        rainfall: "None",
        description: "Extremely hot, especially in the desert regions. Sightseeing is challenging during midday hours.",
      },
      monsoon: {
        temp: "25-35°C",
        condition: "Warm with occasional rain",
        rainfall: "Light to moderate",
        description: "The desert blooms with greenery. Less crowded but humidity can be high in some regions.",
      },
      spring: {
        temp: "20-35°C",
        condition: "Warm days, cool nights",
        rainfall: "Very low",
        description:
          "Transitional season with gradually increasing temperatures. Good time for wildlife spotting and outdoor activities.",
      },
    },
    attractions: [
      {
        name: "Amber Fort, Jaipur",
        description: "Magnificent fort complex with stunning architecture and artistic elements.",
        image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?q=80&w=2070&auto=format&fit=crop",
        rating: 4.7,
      },
      {
        name: "City Palace, Udaipur",
        description: "Stunning palace complex on the banks of Lake Pichola with panoramic lake views.",
        image: "https://images.unsplash.com/photo-1585136917228-a4cdb8f07f35?q=80&w=2069&auto=format&fit=crop",
        rating: 4.6,
      },
      {
        name: "Mehrangarh Fort, Jodhpur",
        description: "One of India's largest forts with impressive views of the blue city.",
        image: "https://images.unsplash.com/photo-1524613032530-449a5d94c285?q=80&w=2070&auto=format&fit=crop",
        rating: 4.8,
      },
      {
        name: "Jaisalmer Fort",
        description: "A living fort with a quarter of the city's population still residing within its walls.",
        image: "https://images.unsplash.com/photo-1568652155856-9e812b6a2f65?q=80&w=2070&auto=format&fit=crop",
        rating: 4.5,
      },
      {
        name: "Ranthambore National Park",
        description: "One of the best places in India to spot wild tigers in their natural habitat.",
        image: "https://images.unsplash.com/photo-1615963244664-5b845b2025ee?q=80&w=2070&auto=format&fit=crop",
        rating: 4.4,
      },
    ],
    activities: [
      "Fort and palace tours",
      "Desert safari in Thar Desert",
      "Camel rides and camping",
      "Wildlife safaris",
      "Heritage walks",
      "Traditional Rajasthani folk performances",
      "Handicraft shopping",
      "Cooking classes for Rajasthani cuisine",
    ],
    itinerary: {
      days: 7,
      plan: [
        {
          day: 1,
          title: "Jaipur Exploration",
          activities: [
            "Visit Amber Fort",
            "Explore City Palace and Jantar Mantar",
            "Shopping at Johari Bazaar",
            "Evening light and sound show at Amber Fort",
            "Dinner with folk dance performance",
          ],
        },
        {
          day: 2,
          title: "More of Pink City",
          activities: [
            "Visit Hawa Mahal (Palace of Winds)",
            "Explore Albert Hall Museum",
            "Lunch at a heritage restaurant",
            "Visit Jaigarh and Nahargarh Forts",
            "Dinner at Chokhi Dhani ethnic village resort",
          ],
        },
        {
          day: 3,
          title: "Jodhpur - The Blue City",
          activities: [
            "Travel to Jodhpur",
            "Visit Mehrangarh Fort",
            "Explore Jaswant Thada",
            "Walk through the blue city neighborhoods",
            "Shopping at Sardar Market near Clock Tower",
          ],
        },
        {
          day: 4,
          title: "Jaisalmer - The Golden City",
          activities: [
            "Travel to Jaisalmer",
            "Explore Jaisalmer Fort",
            "Visit Patwon Ki Haveli",
            "Evening at Gadisar Lake",
            "Dinner with traditional Rajasthani music",
          ],
        },
        {
          day: 5,
          title: "Desert Experience",
          activities: [
            "Morning visit to Bada Bagh cenotaphs",
            "Lunch at a desert camp",
            "Camel safari in the Thar Desert",
            "Sunset at Sam Sand Dunes",
            "Overnight stay in desert camp with cultural performances",
          ],
        },
        {
          day: 6,
          title: "Udaipur - City of Lakes",
          activities: [
            "Travel to Udaipur",
            "Visit City Palace",
            "Boat ride on Lake Pichola",
            "Explore Jagdish Temple",
            "Evening cultural performance at Bagore Ki Haveli",
          ],
        },
        {
          day: 7,
          title: "Udaipur and Departure",
          activities: [
            "Visit Saheliyon Ki Bari (Garden of Maidens)",
            "Explore Monsoon Palace",
            "Shopping for miniature paintings and handicrafts",
            "Lunch at a rooftop restaurant with lake views",
            "Departure",
          ],
        },
      ],
    },
  },
  himachal: {
    name: "Himachal Pradesh",
    tagline: "Adventure in the Himalayan Highlands",
    description:
      "Himachal Pradesh is a northern Indian state in the Himalayas known for its stunning mountain scenery, hill stations, and outdoor activities. With snow-capped peaks, lush valleys, and pristine rivers, it's a paradise for nature lovers and adventure seekers.",
    image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=2070&auto=format&fit=crop",
    weather: {
      winter: {
        temp: "-5 to 15°C",
        condition: "Cold with snowfall in higher elevations",
        rainfall: "Snowfall in many regions",
        description:
          "Perfect for snow activities and winter sports. Many high-altitude areas may have limited accessibility.",
      },
      summer: {
        temp: "15-30°C",
        condition: "Pleasant and mild",
        rainfall: "Occasional showers",
        description: "Ideal weather for trekking, outdoor activities, and escaping the heat of the plains.",
      },
      monsoon: {
        temp: "15-25°C",
        condition: "Rainy with occasional landslides",
        rainfall: "Heavy in many regions",
        description: "Lush green landscapes but travel can be challenging due to landslides and road blockages.",
      },
      spring: {
        temp: "10-25°C",
        condition: "Pleasant with blooming flowers",
        rainfall: "Light showers possible",
        description:
          "Beautiful season with rhododendrons and other Himalayan flowers in bloom. Good for trekking and outdoor activities.",
      },
    },
    attractions: [
      {
        name: "Shimla",
        description: "Former summer capital of British India with colonial architecture and scenic beauty.",
        image: "https://images.unsplash.com/photo-1626714100856-8d8fb4427029?q=80&w=2070&auto=format&fit=crop",
        rating: 4.5,
      },
      {
        name: "Manali",
        description: "Popular hill station with adventure activities, hot springs, and beautiful valleys.",
        image: "https://images.unsplash.com/photo-1591649462288-d7f8b0ef8b8e?q=80&w=2070&auto=format&fit=crop",
        rating: 4.6,
      },
      {
        name: "Dharamshala & McLeodganj",
        description: "Home to the Dalai Lama and Tibetan government-in-exile with stunning Himalayan views.",
        image: "https://images.unsplash.com/photo-1626714100856-8d8fb4427029?q=80&w=2070&auto=format&fit=crop",
        rating: 4.7,
      },
      {
        name: "Spiti Valley",
        description: "Cold desert mountain valley with Buddhist monasteries and stark landscapes.",
        image: "https://images.unsplash.com/photo-1593181629936-11c609b8db9b?q=80&w=2068&auto=format&fit=crop",
        rating: 4.8,
      },
      {
        name: "Kullu Valley",
        description: "Known as the 'Valley of Gods' with beautiful landscapes and adventure activities.",
        image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=2070&auto=format&fit=crop",
        rating: 4.4,
      },
    ],
    activities: [
      "Trekking and hiking",
      "Paragliding in Bir-Billing",
      "River rafting in Kullu",
      "Skiing in Kufri (winter)",
      "Mountain biking",
      "Camping",
      "Buddhist monastery visits",
      "Wildlife spotting in Great Himalayan National Park",
    ],
    itinerary: {
      days: 6,
      plan: [
        {
          day: 1,
          title: "Shimla Exploration",
          activities: [
            "Arrive in Shimla",
            "Walk along the Mall Road",
            "Visit Christ Church",
            "Explore Jakhu Temple and enjoy views with the monkeys",
            "Evening at Scandal Point and Ridge",
          ],
        },
        {
          day: 2,
          title: "Around Shimla",
          activities: [
            "Excursion to Kufri",
            "Visit Himalayan Nature Park",
            "Horse riding in Kufri",
            "Return to Shimla",
            "Shopping at Lakkar Bazaar",
          ],
        },
        {
          day: 3,
          title: "Journey to Manali",
          activities: [
            "Scenic drive from Shimla to Manali",
            "Stop at Kullu for river rafting (optional)",
            "Visit Kullu Shawl factories",
            "Arrive in Manali",
            "Evening walk at Mall Road, Manali",
          ],
        },
        {
          day: 4,
          title: "Manali Exploration",
          activities: [
            "Visit Hadimba Temple",
            "Explore Old Manali",
            "Visit Vashisht Hot Springs and Temple",
            "Tibetan Monastery visit",
            "Evening at Mall Road for shopping and dining",
          ],
        },
        {
          day: 5,
          title: "Solang Valley Adventure",
          activities: [
            "Day trip to Solang Valley",
            "Adventure activities (paragliding, zorbing, etc.)",
            "Enjoy the snow (in winter) or lush green views (in summer)",
            "Return to Manali",
            "Dinner at a riverside restaurant",
          ],
        },
        {
          day: 6,
          title: "Rohtang Pass Excursion (weather permitting)",
          activities: [
            "Day trip to Rohtang Pass (or Gulaba if Rohtang is closed)",
            "Enjoy snow activities (in season)",
            "Spectacular mountain views",
            "Return to Manali",
            "Farewell dinner",
          ],
        },
      ],
    },
  },
}

export default function DestinationPage({ params }: { params: { destination: string } }) {
  const destination = destinationsData[params.destination as keyof typeof destinationsData]

  if (!destination) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-3xl font-bold mb-4">Destination Not Found</h1>
        <p className="mb-8">Sorry, we couldn't find information about this destination.</p>
        <Button asChild>
          <Link href="/india">Browse All Destinations</Link>
        </Button>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
        <Link href="/">Home</Link> / <Link href="/india">India</Link> / <span>{destination.name}</span>
      </div>

      <div className="relative h-[50vh] rounded-xl overflow-hidden mb-8">
        <Image
          src={destination.image || "/placeholder.svg"}
          alt={destination.name}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">{destination.name}</h1>
          <p className="text-xl text-white/90">{destination.tagline}</p>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-12">
        <div className="md:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>About {destination.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg mb-6">{destination.description}</p>
              <h3 className="text-xl font-bold mb-4">Top Activities</h3>
              <div className="flex flex-wrap gap-2 mb-6">
                {destination.activities.map((activity, index) => (
                  <Badge key={index} variant="secondary" className="text-sm py-1">
                    {activity}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div>
          <Card>
            <CardHeader>
              <CardTitle>Weather Guide</CardTitle>
              <CardDescription>Best times to visit and what to expect</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Sun className="h-5 w-5 text-yellow-500" />
                  <h3 className="font-medium">Winter (Nov-Feb)</h3>
                </div>
                <div className="pl-7 space-y-1 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Temperature:</span>
                    <span>{destination.weather.winter.temp}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Conditions:</span>
                    <span>{destination.weather.winter.condition}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Rainfall:</span>
                    <span>{destination.weather.winter.rainfall}</span>
                  </div>
                  <p className="text-muted-foreground mt-1">{destination.weather.winter.description}</p>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Sun className="h-5 w-5 text-orange-500" />
                  <h3 className="font-medium">Summer (Mar-Jun)</h3>
                </div>
                <div className="pl-7 space-y-1 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Temperature:</span>
                    <span>{destination.weather.summer.temp}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Conditions:</span>
                    <span>{destination.weather.summer.condition}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Rainfall:</span>
                    <span>{destination.weather.summer.rainfall}</span>
                  </div>
                  <p className="text-muted-foreground mt-1">{destination.weather.summer.description}</p>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Umbrella className="h-5 w-5 text-blue-500" />
                  <h3 className="font-medium">Monsoon (Jun-Sep)</h3>
                </div>
                <div className="pl-7 space-y-1 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Temperature:</span>
                    <span>{destination.weather.monsoon.temp}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Conditions:</span>
                    <span>{destination.weather.monsoon.condition}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Rainfall:</span>
                    <span>{destination.weather.monsoon.rainfall}</span>
                  </div>
                  <p className="text-muted-foreground mt-1">{destination.weather.monsoon.description}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <h2 className="text-3xl font-bold mb-6">Top Attractions</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {destination.attractions.map((attraction, index) => (
          <Card key={index} className="overflow-hidden">
            <div className="relative h-48">
              <Image src={attraction.image || "/placeholder.svg"} alt={attraction.name} fill className="object-cover" />
            </div>
            <CardContent className="p-6">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-bold">{attraction.name}</h3>
                <div className="flex items-center">
                  <Star className="h-4 w-4 text-yellow-400 fill-yellow-400 mr-1" />
                  <span>{attraction.rating}</span>
                </div>
              </div>
              <p className="text-muted-foreground">{attraction.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <h2 className="text-3xl font-bold mb-6">Suggested Itinerary</h2>
      <Card className="mb-12">
        <CardHeader>
          <CardTitle>
            {destination.itinerary.days}-Day {destination.name} Itinerary
          </CardTitle>
          <CardDescription>A perfect plan to experience the best of {destination.name}</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue={`day1`} className="w-full">
            <TabsList className="grid grid-cols-3 md:grid-cols-7 mb-4">
              {destination.itinerary.plan.map((day, index) => (
                <TabsTrigger key={index} value={`day${index + 1}`}>
                  Day {day.day}
                </TabsTrigger>
              ))}
            </TabsList>

            {destination.itinerary.plan.map((day, index) => (
              <TabsContent key={index} value={`day${index + 1}`} className="space-y-4">
                <div className="flex items-center gap-2 mb-4">
                  <Calendar className="h-5 w-5 text-primary" />
                  <h3 className="text-xl font-bold">
                    Day {day.day}: {day.title}
                  </h3>
                </div>
                <ul className="space-y-3">
                  {day.activities.map((activity, actIndex) => (
                    <li key={actIndex} className="flex items-start gap-2">
                      <div className="bg-primary/10 text-primary rounded-full w-6 h-6 flex items-center justify-center shrink-0 mt-0.5">
                        {actIndex + 1}
                      </div>
                      <span>{activity}</span>
                    </li>
                  ))}
                </ul>
              </TabsContent>
            ))}
          </Tabs>
        </CardContent>
      </Card>

      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Ready to Plan Your Trip?</h2>
        <p className="text-lg text-slate-600 mb-6 max-w-2xl mx-auto">
          Get personalized recommendations and create a custom itinerary with our AI travel assistant.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" asChild>
            <Link href="/itinerary-advisor/create">Create Custom Itinerary</Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="/travel-assistant">Chat with Travel Assistant</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
