import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MapPin, Briefcase, Clock, ArrowRight, CheckCircle } from "lucide-react"

export default function CareersPage() {
  const openPositions = [
    {
      id: "senior-frontend-developer",
      title: "Senior Frontend Developer",
      department: "Engineering",
      location: "Bangalore, India (Hybrid)",
      type: "Full-time",
      experience: "4+ years",
      description:
        "We're looking for a Senior Frontend Developer to join our Engineering team. You'll be responsible for building and maintaining our web applications, ensuring they're responsive, accessible, and provide an exceptional user experience.",
      responsibilities: [
        "Develop and maintain our web applications using React, Next.js, and TypeScript",
        "Collaborate with designers to implement UI/UX designs",
        "Write clean, maintainable, and well-tested code",
        "Optimize applications for maximum speed and scalability",
        "Stay up-to-date with emerging trends and technologies",
      ],
      requirements: [
        "4+ years of experience in frontend development",
        "Strong proficiency in React, Next.js, and TypeScript",
        "Experience with responsive design and CSS frameworks",
        "Knowledge of modern frontend build pipelines and tools",
        "Understanding of cross-browser compatibility issues and solutions",
      ],
    },
    {
      id: "community-manager",
      title: "Community Manager",
      department: "Community",
      location: "Remote (India)",
      type: "Full-time",
      experience: "3+ years",
      description:
        "We're seeking a passionate Community Manager to nurture and grow our traveler community. You'll be responsible for creating engaging content, organizing events, and fostering meaningful connections between our members.",
      responsibilities: [
        "Develop and implement community engagement strategies",
        "Create and curate content for community platforms",
        "Organize and host virtual and in-person community events",
        "Gather feedback from community members and advocate for their needs",
        "Collaborate with marketing and product teams to align community initiatives",
      ],
      requirements: [
        "3+ years of experience in community management or related field",
        "Excellent communication and interpersonal skills",
        "Experience with community management tools and platforms",
        "Ability to create engaging content for various channels",
        "Passion for travel and building communities",
      ],
    },
    {
      id: "travel-experience-curator",
      title: "Travel Experience Curator",
      department: "Product",
      location: "Delhi, India (Hybrid)",
      type: "Full-time",
      experience: "2+ years",
      description:
        "Join our Product team as a Travel Experience Curator to help design and develop unique travel experiences for our community. You'll work closely with local partners to create authentic, immersive experiences that align with our brand values.",
      responsibilities: [
        "Research and identify potential experience opportunities across India",
        "Build relationships with local hosts, guides, and service providers",
        "Design and document experience itineraries and details",
        "Ensure all experiences meet our quality and safety standards",
        "Collect and incorporate feedback to continuously improve offerings",
      ],
      requirements: [
        "2+ years of experience in travel planning, hospitality, or related field",
        "Strong knowledge of Indian destinations, culture, and attractions",
        "Excellent relationship-building and negotiation skills",
        "Attention to detail and strong organizational abilities",
        "Passion for creating meaningful travel experiences",
      ],
    },
    {
      id: "ai-engineer",
      title: "AI Engineer",
      department: "Engineering",
      location: "Bangalore, India (Hybrid)",
      type: "Full-time",
      experience: "3+ years",
      description:
        "We're looking for an AI Engineer to enhance our travel recommendation and itinerary planning systems. You'll work on developing and improving our AI models to deliver personalized travel experiences to our users.",
      responsibilities: [
        "Develop and maintain AI models for travel recommendations and itinerary planning",
        "Implement natural language processing for our travel assistant",
        "Collaborate with product and engineering teams to integrate AI solutions",
        "Analyze data to improve model accuracy and performance",
        "Stay current with the latest developments in AI and machine learning",
      ],
      requirements: [
        "3+ years of experience in AI/ML development",
        "Strong programming skills in Python and experience with ML frameworks",
        "Experience with NLP and recommendation systems",
        "Understanding of data structures, algorithms, and software design",
        "Degree in Computer Science, AI, or related field",
      ],
    },
  ]

  const benefits = [
    {
      title: "Flexible Work",
      description: "Remote-friendly policies and flexible working hours to support work-life balance.",
      icon: Clock,
    },
    {
      title: "Travel Perks",
      description: "Generous travel allowance and discounts on Wandernest stays and experiences.",
      icon: Briefcase,
    },
    {
      title: "Health & Wellness",
      description: "Comprehensive health insurance and wellness programs for you and your family.",
      icon: CheckCircle,
    },
    {
      title: "Learning & Development",
      description: "Dedicated budget for professional development, courses, and conferences.",
      icon: ArrowRight,
    },
  ]

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-5xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Join Our Team</h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
            We're on a mission to transform how people travel and connect. Join us in building the future of travel
            experiences and community.
          </p>
          <div className="relative h-[400px] rounded-xl overflow-hidden">
            <Image
              src="/placeholder.svg?height=2160&width=3840"
              alt="Wandernest Team"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
              <Button size="lg" asChild className="text-lg">
                <a href="#open-positions">View Open Positions</a>
              </Button>
            </div>
          </div>
        </div>

        {/* Our Culture */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Our Culture</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">What We Value</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                  <div>
                    <span className="font-medium">Authentic Connection</span>
                    <p className="text-slate-600">
                      We believe in building genuine relationships with our community and each other.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                  <div>
                    <span className="font-medium">Continuous Learning</span>
                    <p className="text-slate-600">
                      We're curious by nature and always seeking to grow, both personally and professionally.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                  <div>
                    <span className="font-medium">Inclusive Innovation</span>
                    <p className="text-slate-600">
                      We embrace diverse perspectives and believe the best ideas come from collaborative thinking.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                  <div>
                    <span className="font-medium">Responsible Impact</span>
                    <p className="text-slate-600">
                      We're committed to making a positive difference in the communities we serve.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="relative h-[300px] rounded-xl overflow-hidden">
              <Image
                src="/placeholder.svg?height=2160&width=3840"
                alt="Wandernest Culture"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Benefits */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Benefits & Perks</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <benefit.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                      <p className="text-slate-600">{benefit.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Open Positions */}
        <div id="open-positions" className="scroll-mt-16 mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Open Positions</h2>
          <Tabs defaultValue="all" className="mb-8">
            <TabsList className="w-full flex flex-wrap h-auto mb-8 justify-center">
              <TabsTrigger value="all">All Departments</TabsTrigger>
              <TabsTrigger value="engineering">Engineering</TabsTrigger>
              <TabsTrigger value="product">Product</TabsTrigger>
              <TabsTrigger value="community">Community</TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="space-y-6">
              {openPositions.map((position) => (
                <Card key={position.id} className="overflow-hidden">
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                      <div>
                        <CardTitle>{position.title}</CardTitle>
                        <CardDescription className="flex flex-wrap items-center gap-2 mt-1">
                          <Badge variant="outline">{position.department}</Badge>
                          <span className="flex items-center text-sm">
                            <MapPin className="h-3 w-3 mr-1" />
                            {position.location}
                          </span>
                          <span className="flex items-center text-sm">
                            <Briefcase className="h-3 w-3 mr-1" />
                            {position.type}
                          </span>
                        </CardDescription>
                      </div>
                      <Button asChild>
                        <Link href={`/careers/${position.id}`}>View & Apply</Link>
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 mb-4">{position.description}</p>
                    <div className="text-sm text-slate-500">Experience: {position.experience}</div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>

            <TabsContent value="engineering" className="space-y-6">
              {openPositions
                .filter((position) => position.department === "Engineering")
                .map((position) => (
                  <Card key={position.id} className="overflow-hidden">
                    <CardHeader>
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                        <div>
                          <CardTitle>{position.title}</CardTitle>
                          <CardDescription className="flex flex-wrap items-center gap-2 mt-1">
                            <Badge variant="outline">{position.department}</Badge>
                            <span className="flex items-center text-sm">
                              <MapPin className="h-3 w-3 mr-1" />
                              {position.location}
                            </span>
                            <span className="flex items-center text-sm">
                              <Briefcase className="h-3 w-3 mr-1" />
                              {position.type}
                            </span>
                          </CardDescription>
                        </div>
                        <Button asChild>
                          <Link href={`/careers/${position.id}`}>View & Apply</Link>
                        </Button>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-slate-600 mb-4">{position.description}</p>
                      <div className="text-sm text-slate-500">Experience: {position.experience}</div>
                    </CardContent>
                  </Card>
                ))}
            </TabsContent>

            <TabsContent value="product" className="space-y-6">
              {openPositions
                .filter((position) => position.department === "Product")
                .map((position) => (
                  <Card key={position.id} className="overflow-hidden">
                    <CardHeader>
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                        <div>
                          <CardTitle>{position.title}</CardTitle>
                          <CardDescription className="flex flex-wrap items-center gap-2 mt-1">
                            <Badge variant="outline">{position.department}</Badge>
                            <span className="flex items-center text-sm">
                              <MapPin className="h-3 w-3 mr-1" />
                              {position.location}
                            </span>
                            <span className="flex items-center text-sm">
                              <Briefcase className="h-3 w-3 mr-1" />
                              {position.type}
                            </span>
                          </CardDescription>
                        </div>
                        <Button asChild>
                          <Link href={`/careers/${position.id}`}>View & Apply</Link>
                        </Button>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-slate-600 mb-4">{position.description}</p>
                      <div className="text-sm text-slate-500">Experience: {position.experience}</div>
                    </CardContent>
                  </Card>
                ))}
            </TabsContent>

            <TabsContent value="community" className="space-y-6">
              {openPositions
                .filter((position) => position.department === "Community")
                .map((position) => (
                  <Card key={position.id} className="overflow-hidden">
                    <CardHeader>
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                        <div>
                          <CardTitle>{position.title}</CardTitle>
                          <CardDescription className="flex flex-wrap items-center gap-2 mt-1">
                            <Badge variant="outline">{position.department}</Badge>
                            <span className="flex items-center text-sm">
                              <MapPin className="h-3 w-3 mr-1" />
                              {position.location}
                            </span>
                            <span className="flex items-center text-sm">
                              <Briefcase className="h-3 w-3 mr-1" />
                              {position.type}
                            </span>
                          </CardDescription>
                        </div>
                        <Button asChild>
                          <Link href={`/careers/${position.id}`}>View & Apply</Link>
                        </Button>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-slate-600 mb-4">{position.description}</p>
                      <div className="text-sm text-slate-500">Experience: {position.experience}</div>
                    </CardContent>
                  </Card>
                ))}
            </TabsContent>
          </Tabs>
        </div>

        {/* Application Process */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Our Application Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card>
              <CardContent className="p-6 text-center">
                <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold text-primary">1</span>
                </div>
                <h3 className="font-bold mb-2">Application Review</h3>
                <p className="text-sm text-slate-600">
                  Our team reviews your application and resume to assess your qualifications and experience.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold text-primary">2</span>
                </div>
                <h3 className="font-bold mb-2">Initial Interview</h3>
                <p className="text-sm text-slate-600">
                  A video call with our hiring team to discuss your background, skills, and interest in the role.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold text-primary">3</span>
                </div>
                <h3 className="font-bold mb-2">Skills Assessment</h3>
                <p className="text-sm text-slate-600">
                  Depending on the role, you may complete a skills assessment or technical challenge.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold text-primary">4</span>
                </div>
                <h3 className="font-bold mb-2">Final Interview</h3>
                <p className="text-sm text-slate-600">
                  Meet with team members and leadership to discuss the role in depth and ensure mutual fit.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-slate-50 dark:bg-slate-800 rounded-xl p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Don't see the right role?</h2>
          <p className="text-slate-600 dark:text-slate-300 mb-6 max-w-2xl mx-auto">
            We're always looking for talented individuals to join our team. Send us your resume and we'll keep you in
            mind for future opportunities.
          </p>
          <Button asChild size="lg">
            <Link href="/contact">Get in Touch</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
