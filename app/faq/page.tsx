import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { MessageCircle, Search, ArrowRight } from "lucide-react"

export default function FAQPage() {
  const faqCategories = [
    {
      id: "general",
      title: "General Questions",
      items: [
        {
          question: "What is Wandernest?",
          answer:
            "Wandernest is a platform that connects travelers with each other and with unique accommodations. We help you discover destinations, plan personalized trips, and share your adventures with a community of like-minded explorers.",
        },
        {
          question: "How do I create an account?",
          answer:
            "Creating an account is simple! Click on the 'Sign Up' button in the top right corner of the homepage. You'll need to provide your name, email address, and create a password. You can also sign up using your Google account for faster access.",
        },
        {
          question: "Is Wandernest available worldwide?",
          answer:
            "While our accommodations and experiences are currently focused on India, our platform is available to travelers from around the world. We're actively expanding to new destinations and will be adding international locations soon.",
        },
        {
          question: "How do I contact customer support?",
          answer:
            "You can reach our customer support team through the 'Contact Us' page, by emailing support@wandernest.com, or by using the live chat feature available on our website. Our team is available 24/7 to assist you with any questions or concerns.",
        },
      ],
    },
    {
      id: "bookings",
      title: "Bookings & Reservations",
      items: [
        {
          question: "How do I book a stay?",
          answer:
            "To book a stay, browse our available accommodations, select your desired dates and number of guests, and click 'Book Now.' You'll be guided through the reservation process, including payment options and any additional services you might want to add.",
        },
        {
          question: "What is your cancellation policy?",
          answer:
            "Our cancellation policy varies depending on the property and the host's preferences. Generally, cancellations made 7 days or more before check-in receive a full refund. Cancellations made 3-7 days before check-in receive a 50% refund. Cancellations made less than 3 days before check-in are not eligible for a refund. Each listing clearly displays its specific cancellation terms.",
        },
        {
          question: "Can I modify my reservation after booking?",
          answer:
            "Yes, you can modify your reservation through your account dashboard. Go to 'My Bookings' and select the reservation you wish to change. Depending on the property's policy, you may be able to change dates, add guests, or request additional services. Some changes may affect the total price of your booking.",
        },
        {
          question: "How do I pay for my booking?",
          answer:
            "We accept various payment methods including credit/debit cards, net banking, UPI, and wallet payments. All transactions are secure and encrypted. You can choose to pay the full amount upfront or, for some properties, pay a deposit with the balance due before your stay.",
        },
      ],
    },
    {
      id: "accommodations",
      title: "Accommodations",
      items: [
        {
          question: "What types of accommodations do you offer?",
          answer:
            "We offer a diverse range of accommodations including cabins, treehouses, villas, apartments, boutique hotels, and unique stays like houseboats and glamping tents. Each property is carefully selected to provide a memorable and comfortable experience.",
        },
        {
          question: "Are the accommodations suitable for remote work?",
          answer:
            "Many of our properties are specifically designed for digital nomads and remote workers. These 'Workation Stays' feature high-speed internet, dedicated workspaces, and amenities that support productivity. Each listing indicates its suitability for remote work and details the available facilities.",
        },
        {
          question: "Are pets allowed?",
          answer:
            "Pet policies vary by property. Look for the 'Pet Friendly' tag when browsing accommodations. These properties welcome your four-legged friends, though some may have restrictions on size or number of pets. Additional cleaning fees may apply for pet-friendly stays.",
        },
        {
          question: "What amenities can I expect?",
          answer:
            "Standard amenities include clean linens, towels, toiletries, and kitchen facilities where applicable. Many properties offer additional amenities such as Wi-Fi, air conditioning, heating, washing machines, and outdoor spaces. Premium stays may include extras like hot tubs, private pools, or housekeeping services. Each listing details all available amenities.",
        },
      ],
    },
    {
      id: "experiences",
      title: "Experiences & Activities",
      items: [
        {
          question: "What types of experiences do you offer?",
          answer:
            "We offer a wide range of experiences including outdoor adventures, cultural workshops, food tours, wellness retreats, and local excursions. Our experiences are led by knowledgeable hosts who provide authentic insights into local culture and traditions.",
        },
        {
          question: "How do I book an experience?",
          answer:
            "Booking an experience is similar to booking accommodations. Browse our experiences, select your preferred date and number of participants, and proceed to checkout. Some experiences require advance booking due to limited availability, so we recommend reserving early.",
        },
        {
          question: "Can I book private experiences for my group?",
          answer:
            "Yes, many of our experiences can be booked as private sessions for your group. When viewing an experience, look for the 'Private Option' or contact the host directly to inquire about private bookings. Private experiences are ideal for special occasions or when you prefer a more personalized experience.",
        },
        {
          question: "What if an experience is canceled due to weather?",
          answer:
            "For weather-dependent experiences, hosts may need to cancel or reschedule in case of unfavorable conditions. If this happens, you'll be offered the option to reschedule for another date or receive a full refund. Our hosts prioritize your safety and will communicate any changes as early as possible.",
        },
      ],
    },
    {
      id: "community",
      title: "Community & Networking",
      items: [
        {
          question: "How can I connect with other travelers?",
          answer:
            "Our platform offers several ways to connect with fellow travelers. You can join community events at our properties, participate in group experiences, or use our messaging system to connect with travelers who have similar interests or are visiting the same destination.",
        },
        {
          question: "What are community stays?",
          answer:
            "Community stays are accommodations designed to facilitate interaction among guests. These properties feature communal spaces, shared activities, and regular events that bring travelers together. They're perfect for solo travelers or anyone looking to make new connections during their journey.",
        },
        {
          question: "Are there events for digital nomads?",
          answer:
            "Yes, we regularly organize networking events, skill-sharing workshops, and social gatherings specifically for digital nomads. These events provide opportunities to expand your professional network, learn new skills, and connect with like-minded professionals from various industries.",
        },
        {
          question: "How can I host my own event or workshop?",
          answer:
            "If you have expertise or skills you'd like to share, you can apply to host an event or workshop through our platform. Go to the 'Host an Event' section in your account dashboard and submit your proposal. Our team will review it and help you set up and promote your event to our community.",
        },
      ],
    },
    {
      id: "itinerary",
      title: "Itinerary Planning",
      items: [
        {
          question: "How does the AI Itinerary Advisor work?",
          answer:
            "Our AI Itinerary Advisor creates personalized travel plans based on your preferences, budget, and travel dates. It analyzes thousands of data points including weather patterns, local events, and traveler reviews to recommend the best activities, accommodations, and dining options for your trip.",
        },
        {
          question: "Can I modify the suggested itinerary?",
          answer:
            "The AI-generated itinerary serves as a starting point that you can customize to your liking. You can add, remove, or rearrange activities, adjust timings, or replace suggestions with your own preferences. Your itinerary remains flexible and editable at any time.",
        },
        {
          question: "How accurate is the weather information?",
          answer:
            "Our weather data comes from reliable meteorological sources and is updated regularly. While we strive for accuracy, weather conditions can change unexpectedly. The forecast provided is intended as a general guide to help you plan appropriate activities and pack suitable clothing.",
        },
        {
          question: "Can I share my itinerary with friends?",
          answer:
            "Yes, you can share your itinerary with travel companions or friends by using the 'Share' button on your itinerary page. You can choose to share via email, messaging apps, or generate a shareable link. You can also control what aspects of your itinerary are visible to others.",
        },
      ],
    },
  ]

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Frequently Asked Questions</h1>
          <p className="text-xl text-slate-600">
            Find answers to common questions about Wandernest, our services, and how we can help you plan your perfect
            trip.
          </p>
        </div>

        <div className="mb-12">
          <div className="relative max-w-xl mx-auto">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-5 w-5" />
            <Input type="search" placeholder="Search for answers..." className="pl-10 py-6 text-base" />
          </div>
        </div>

        <Tabs defaultValue="general" className="mb-12">
          <TabsList className="w-full flex flex-wrap h-auto mb-8 justify-center">
            {faqCategories.map((category) => (
              <TabsTrigger key={category.id} value={category.id} className="text-sm md:text-base py-2 px-4">
                {category.title}
              </TabsTrigger>
            ))}
          </TabsList>

          {faqCategories.map((category) => (
            <TabsContent key={category.id} value={category.id} className="space-y-6">
              <Accordion type="single" collapsible className="w-full">
                {category.items.map((item, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left text-lg font-medium">{item.question}</AccordionTrigger>
                    <AccordionContent className="text-slate-600">{item.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </TabsContent>
          ))}
        </Tabs>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card>
            <CardHeader>
              <CardTitle>Still have questions?</CardTitle>
              <CardDescription>Get in touch with our support team for personalized assistance.</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col items-center text-center">
              <MessageCircle className="h-12 w-12 text-primary mb-4" />
              <p className="mb-4">Our support team is available 24/7 to help you with any questions or concerns.</p>
              <Button asChild>
                <Link href="/contact">Contact Support</Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Explore our knowledge base</CardTitle>
              <CardDescription>Detailed guides and tutorials to help you make the most of Wandernest.</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col items-center text-center">
              <div className="relative w-12 h-12 mb-4">
                <Image src="/placeholder.svg?height=48&width=48" alt="Knowledge Base" fill />
              </div>
              <p className="mb-4">
                Our knowledge base contains in-depth articles, tutorials, and guides on using all Wandernest features.
              </p>
              <Button variant="outline" asChild>
                <Link href="/resources">
                  Browse Resources <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="bg-slate-50 dark:bg-slate-800 rounded-xl p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Join our community</h2>
          <p className="text-slate-600 dark:text-slate-300 mb-6 max-w-2xl mx-auto">
            Connect with fellow travelers, share experiences, and get travel tips from our global community of
            adventurers.
          </p>
          <Button asChild>
            <Link href="/signup">Sign Up Now</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
