import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Heart, Users, Globe, Leaf, Award, ArrowRight, CheckCircle } from "lucide-react"

export default function AboutPage() {
  const teamMembers = [
    {
      name: "Karthik Chowdhary",
      role: "Founder & CEO",
      bio: "Former tech executive with a passion for travel and community building. Founded Wandernest after experiencing the transformative power of connecting with fellow travelers during a solo trip across Southeast Asia.",
    },
    {
      name: "Ravi Prakash",
      role: "Co-Founder & COO",
      bio: "Hospitality industry veteran with 15+ years of experience in luxury accommodations. Passionate about creating unique, memorable experiences that blend comfort with adventure.",
    },
    {
      name: "Ayush Yadav",
      role: "Head of Community",
      bio: "Digital nomad and community builder who has lived in over 20 countries. Expert in creating meaningful connections between travelers and fostering a sense of belonging in diverse groups.",
    },
    {
      name: "Abhinav Chauhan",
      role: "Chief Technology Officer",
      bio: "Tech innovator with a background in AI and machine learning. Leads the development of our intelligent travel planning tools and community platform features.",
    },
  ]

  const milestones = [
    {
      year: "2018",
      title: "The Beginning",
      description:
        "Wandernest was founded with a vision to transform how people travel by creating meaningful connections between travelers.",
    },
    {
      year: "2019",
      title: "First 1,000 Members",
      description:
        "Our community grew to 1,000 active members, with the first Wandernest-exclusive accommodations launched in Goa and Himachal Pradesh.",
    },
    {
      year: "2020",
      title: "Digital Nomad Focus",
      description:
        "Pivoted to support the growing remote work trend by introducing workation-friendly stays with high-speed internet and dedicated workspaces.",
    },
    {
      year: "2021",
      title: "AI Itinerary Planner",
      description:
        "Launched our innovative AI-powered itinerary planning tool, helping travelers create personalized trip plans based on their preferences.",
    },
    {
      year: "2022",
      title: "Expansion Across India",
      description:
        "Expanded to 25+ destinations across India, with a focus on unique, off-the-beaten-path locations and community-driven experiences.",
    },
    {
      year: "2023",
      title: "10,000 Active Members",
      description:
        "Reached the milestone of 10,000 active community members and launched our mobile app for seamless travel planning on the go.",
    },
    {
      year: "2024",
      title: "Sustainability Initiative",
      description:
        "Introduced our sustainability program, committing to carbon-neutral operations and supporting local conservation efforts in all our destinations.",
    },
  ]

  const values = [
    {
      icon: Users,
      title: "Community First",
      description:
        "We believe travel is better when shared. Our platform is designed to foster meaningful connections between travelers, hosts, and local communities.",
    },
    {
      icon: Globe,
      title: "Authentic Experiences",
      description:
        "We curate genuine, immersive experiences that go beyond tourist attractions, allowing travelers to connect with the heart and soul of each destination.",
    },
    {
      icon: Leaf,
      title: "Sustainable Travel",
      description:
        "We're committed to promoting responsible tourism that respects local cultures, supports local economies, and minimizes environmental impact.",
    },
    {
      icon: Heart,
      title: "Inclusive Adventure",
      description:
        "We create spaces and experiences that welcome travelers of all backgrounds, abilities, and travel styles, ensuring everyone can find their place in our community.",
    },
  ]

  const awards = [
    {
      year: "2023",
      title: "Best Travel Community Platform",
      organization: "Digital Travel Awards",
    },
    {
      year: "2022",
      title: "Most Innovative Travel Startup",
      organization: "TechTravel Summit",
    },
    {
      year: "2022",
      title: "Excellence in Customer Experience",
      organization: "Hospitality Innovation Awards",
    },
    {
      year: "2021",
      title: "Best Use of AI in Travel",
      organization: "Travel Tech Innovations",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-16">
      {/* Hero Section */}
      <div className="relative h-[60vh] rounded-xl overflow-hidden mb-16">
        <Image
          src="https://images.unsplash.com/photo-1682687982501-1e58ab814714?q=80&w=3870&auto=format&fit=crop"
          alt="Wandernest Team"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-center p-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Story</h1>
          <p className="text-xl text-white/90 max-w-3xl">
            Founded by passionate travelers for travelers, Wandernest is on a mission to transform how people explore
            the world by creating meaningful connections and unforgettable experiences.
          </p>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h2 className="text-3xl font-bold mb-6">Our Mission & Vision</h2>
        <p className="text-xl mb-8">
          At Wandernest, we're reimagining travel as a transformative experience that connects people, cultures, and
          places. We believe that the most memorable journeys are shaped by the connections we make along the way.
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-4">Our Mission</h3>
              <p className="text-slate-600">
                To create a global community of travelers who share experiences, forge meaningful connections, and
                discover the world together through authentic, sustainable, and transformative travel experiences.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-4">Our Vision</h3>
              <p className="text-slate-600">
                A world where travel breaks down barriers, fosters understanding between cultures, and creates a global
                community of conscious explorers who travel with purpose and connection.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Our Values */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-10">Our Values</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <Card key={index}>
              <CardContent className="p-6 text-center">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                <p className="text-slate-600">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Meet the Team */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-10">Meet the Team</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="text-center">
              <div className="bg-primary/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">{member.name.charAt(0)}</span>
              </div>
              <h3 className="text-xl font-bold">{member.name}</h3>
              <p className="text-primary font-medium mb-2">{member.role}</p>
              <p className="text-slate-600 text-sm">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Our Journey */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-10">Our Journey</h2>
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary/20 z-0"></div>
          <div className="space-y-12 relative z-10">
            {milestones.map((milestone, index) => (
              <div
                key={index}
                className={`flex flex-col ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } items-center gap-4`}
              >
                <div className="md:w-1/2 flex justify-center">
                  <div className="bg-primary text-white font-bold text-xl rounded-full w-16 h-16 flex items-center justify-center">
                    {milestone.year}
                  </div>
                </div>
                <div className="md:w-1/2 bg-slate-50 dark:bg-slate-800 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-2">{milestone.title}</h3>
                  <p className="text-slate-600 dark:text-slate-300">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recognition & Awards */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-10">Recognition & Awards</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {awards.map((award, index) => (
            <Card key={index}>
              <CardContent className="p-6 text-center">
                <Award className="h-10 w-10 text-primary mx-auto mb-4" />
                <Badge className="mb-2">{award.year}</Badge>
                <h3 className="font-bold mb-2">{award.title}</h3>
                <p className="text-sm text-slate-500">{award.organization}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* What Sets Us Apart */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-10">What Sets Us Apart</h2>
        <Tabs defaultValue="community" className="w-full">
          <TabsList className="grid grid-cols-3 w-full max-w-2xl mx-auto mb-8">
            <TabsTrigger value="community">Community Focus</TabsTrigger>
            <TabsTrigger value="technology">Innovative Technology</TabsTrigger>
            <TabsTrigger value="sustainability">Sustainability</TabsTrigger>
          </TabsList>
          <TabsContent value="community" className="text-center">
            <div className="max-w-3xl mx-auto">
              <Users className="h-16 w-16 text-primary mx-auto mb-6" />
              <h3 className="text-2xl font-bold mb-4">A True Travel Community</h3>
              <p className="text-lg text-slate-600 mb-6">
                Unlike traditional travel platforms, Wandernest is built around community. We connect like-minded
                travelers, facilitate meaningful interactions, and create spaces where lasting friendships are formed.
                Our community-focused accommodations and events are designed to bring people together through shared
                experiences.
              </p>
              <div className="grid md:grid-cols-3 gap-4 text-left">
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>Community-driven accommodations</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>Regular social events and activities</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>Skill-sharing and networking opportunities</span>
                </div>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="technology" className="text-center">
            <div className="max-w-3xl mx-auto">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-8 w-8 text-primary"
                >
                  <path d="M12 2H2v10h10V2Z" />
                  <path d="M22 12h-4v4h-4v4h8v-8Z" />
                  <path d="M18 2h4v4" />
                  <path d="M14 6V2h4" />
                  <path d="m14 6-4 4" />
                  <path d="M6 14H2v4" />
                  <path d="M6 14v4h4" />
                  <path d="m6 14 4-4" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">AI-Powered Travel Planning</h3>
              <p className="text-lg text-slate-600 mb-6">
                Our proprietary AI technology transforms travel planning from a stressful task to an enjoyable
                experience. Our Itinerary Advisor creates personalized travel plans based on your preferences, real-time
                weather data, local events, and community recommendations, ensuring you get the most out of every
                destination.
              </p>
              <div className="grid md:grid-cols-3 gap-4 text-left">
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>Personalized itinerary creation</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>Real-time weather integration</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>Smart matching with like-minded travelers</span>
                </div>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="sustainability" className="text-center">
            <div className="max-w-3xl mx-auto">
              <Leaf className="h-16 w-16 text-primary mx-auto mb-6" />
              <h3 className="text-2xl font-bold mb-4">Commitment to Responsible Travel</h3>
              <p className="text-lg text-slate-600 mb-6">
                Sustainability isn't just a buzzword for us—it's a core value. We carefully vet all our accommodations
                and experiences for their environmental practices, support local communities through our bookings, and
                offset the carbon footprint of all stays booked through our platform. We're committed to making travel a
                force for positive change.
              </p>
              <div className="grid md:grid-cols-3 gap-4 text-left">
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>Carbon-neutral operations</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>Support for local communities</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>Eco-friendly accommodation options</span>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Join Our Team */}
      <div className="mb-16">
        <div className="bg-slate-50 dark:bg-slate-800 rounded-xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Join Our Team</h2>
              <p className="text-slate-600 dark:text-slate-300 mb-6">
                We're always looking for passionate individuals who share our vision for transformative travel
                experiences. Join our diverse team and help shape the future of travel.
              </p>
              <Button asChild>
                <Link href="/careers">
                  View Open Positions <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop"
                alt="Wandernest Team Working"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
        <p className="text-slate-600 dark:text-slate-300 mb-6 max-w-2xl mx-auto">
          Have questions about Wandernest or interested in partnering with us? We'd love to hear from you.
        </p>
        <Button asChild size="lg">
          <Link href="/contact">Contact Us</Link>
        </Button>
      </div>
    </div>
  )
}
