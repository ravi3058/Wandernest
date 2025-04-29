"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Slider } from "@/components/ui/slider"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { toast } from "@/hooks/use-toast"
import { Loader2, Info } from "lucide-react"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

export default function CreateItineraryPage() {
  const router = useRouter()
  const [step, setStep] = useState(1)
  const [isGenerating, setIsGenerating] = useState(false)

  const [formData, setFormData] = useState({
    destination: "",
    startDate: "",
    endDate: "",
    travelers: "1",
    budget: [50],
    interests: [] as string[],
    accommodation: "",
    additionalInfo: "",
    includeWeather: true,
    includeLocalEvents: true,
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSliderChange = (value: number[]) => {
    setFormData((prev) => ({ ...prev, budget: value }))
  }

  const handleCheckboxChange = (interest: string, checked: boolean) => {
    setFormData((prev) => ({
      ...prev,
      interests: checked ? [...prev.interests, interest] : prev.interests.filter((i) => i !== interest),
    }))
  }

  const handleToggleChange = (name: string, checked: boolean) => {
    setFormData((prev) => ({ ...prev, [name]: checked }))
  }

  const nextStep = () => {
    if (step === 1 && (!formData.destination || !formData.startDate || !formData.endDate)) {
      toast({
        title: "Missing information",
        description: "Please fill in all required fields",
        variant: "destructive",
      })
      return
    }

    if (step < 3) {
      setStep(step + 1)
    }
  }

  const prevStep = () => {
    if (step > 1) {
      setStep(step - 1)
    }
  }

  const generateItinerary = async () => {
    setIsGenerating(true)

    try {
      const response = await fetch("/api/itinerary", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (data.success) {
        // Store the itinerary data in localStorage for the result page to access
        localStorage.setItem("wandernest_itinerary", JSON.stringify(data.itinerary))

        toast({
          title: "Itinerary Generated!",
          description: "Your personalized travel plan is ready to view.",
        })

        router.push("/itinerary-advisor/result")
      } else {
        toast({
          title: "Generation failed",
          description: data.message || "Failed to generate itinerary. Please try again.",
          variant: "destructive",
        })
      }
    } catch (error) {
      console.error("Itinerary generation error:", error)
      toast({
        title: "Generation failed",
        description: "An unexpected error occurred. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsGenerating(false)
    }
  }

  const interests = [
    "Nature & Outdoors",
    "History & Culture",
    "Food & Cuisine",
    "Adventure & Sports",
    "Art & Museums",
    "Shopping",
    "Nightlife",
    "Relaxation & Wellness",
    "Photography",
    "Local Experiences",
  ]

  // Indian destinations suggestions
  const indianDestinations = [
    "Goa",
    "Rajasthan",
    "Kerala",
    "Delhi",
    "Mumbai",
    "Agra",
    "Jaipur",
    "Varanasi",
    "Darjeeling",
    "Shimla",
    "Manali",
    "Rishikesh",
    "Udaipur",
    "Amritsar",
    "Kolkata",
    "Chennai",
    "Bangalore",
    "Hyderabad",
    "Pondicherry",
    "Andaman Islands",
  ]

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-center">Create Your Perfect Itinerary</h1>

        <div className="mb-8">
          <div className="flex justify-between mb-2">
            <div className={`text-sm ${step >= 1 ? "text-primary font-medium" : "text-slate-400"}`}>
              Destination & Dates
            </div>
            <div className={`text-sm ${step >= 2 ? "text-primary font-medium" : "text-slate-400"}`}>Preferences</div>
            <div className={`text-sm ${step >= 3 ? "text-primary font-medium" : "text-slate-400"}`}>
              Additional Details
            </div>
          </div>
          <div className="w-full bg-slate-200 rounded-full h-2.5">
            <div
              className="bg-primary h-2.5 rounded-full transition-all"
              style={{ width: `${(step / 3) * 100}%` }}
            ></div>
          </div>
        </div>

        <Card>
          {step === 1 && (
            <>
              <CardHeader>
                <CardTitle>Where and when are you traveling?</CardTitle>
                <CardDescription>Let us know your destination and travel dates</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="destination">Destination</Label>
                  <div className="relative">
                    <Input
                      id="destination"
                      name="destination"
                      placeholder="City, Country or Region"
                      value={formData.destination}
                      onChange={handleInputChange}
                      list="indian-destinations"
                      required
                    />
                    <datalist id="indian-destinations">
                      {indianDestinations.map((dest) => (
                        <option key={dest} value={dest} />
                      ))}
                    </datalist>
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Info className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p className="w-[200px] text-xs">
                            For best results, enter an Indian destination. Our system has enhanced data for Indian
                            locations.
                          </p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="startDate">Start Date</Label>
                    <Input
                      id="startDate"
                      name="startDate"
                      type="date"
                      value={formData.startDate}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="endDate">End Date</Label>
                    <Input
                      id="endDate"
                      name="endDate"
                      type="date"
                      value={formData.endDate}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="travelers">Number of Travelers</Label>
                  <Select value={formData.travelers} onValueChange={(value) => handleSelectChange("travelers", value)}>
                    <SelectTrigger id="travelers">
                      <SelectValue placeholder="Select number of travelers" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">1 (Solo)</SelectItem>
                      <SelectItem value="2">2</SelectItem>
                      <SelectItem value="3-4">3-4</SelectItem>
                      <SelectItem value="5+">5 or more</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </>
          )}

          {step === 2 && (
            <>
              <CardHeader>
                <CardTitle>What are your preferences?</CardTitle>
                <CardDescription>Help us tailor your itinerary to your interests and budget</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label>Budget Level (per day)</Label>
                  <div className="flex justify-between text-sm text-slate-500 mb-2">
                    <span>Budget</span>
                    <span>Luxury</span>
                  </div>
                  <Slider defaultValue={formData.budget} max={100} step={1} onValueChange={handleSliderChange} />
                  <div className="flex justify-between text-xs text-slate-400 mt-1">
                    <span>₹1,000-3,000</span>
                    <span>₹3,000-6,000</span>
                    <span>₹6,000-10,000</span>
                    <span>₹10,000+</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Interests (select all that apply)</Label>
                  <div className="grid grid-cols-2 gap-2 mt-2">
                    {interests.map((interest) => (
                      <div key={interest} className="flex items-center space-x-2">
                        <Checkbox
                          id={interest}
                          checked={formData.interests.includes(interest)}
                          onCheckedChange={(checked) => handleCheckboxChange(interest, checked as boolean)}
                        />
                        <label
                          htmlFor={interest}
                          className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          {interest}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="accommodation">Preferred Accommodation</Label>
                  <Select
                    value={formData.accommodation}
                    onValueChange={(value) => handleSelectChange("accommodation", value)}
                  >
                    <SelectTrigger id="accommodation">
                      <SelectValue placeholder="Select accommodation type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="hotel">Hotel</SelectItem>
                      <SelectItem value="hostel">Hostel</SelectItem>
                      <SelectItem value="apartment">Apartment/Vacation Rental</SelectItem>
                      <SelectItem value="resort">Resort</SelectItem>
                      <SelectItem value="cabin">Cabin/Cottage</SelectItem>
                      <SelectItem value="camping">Camping/Glamping</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label>Enhanced Features</Label>
                  <div className="space-y-2 mt-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="includeWeather"
                        checked={formData.includeWeather}
                        onCheckedChange={(checked) => handleToggleChange("includeWeather", checked as boolean)}
                      />
                      <label
                        htmlFor="includeWeather"
                        className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Include weather forecast and recommendations
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="includeLocalEvents"
                        checked={formData.includeLocalEvents}
                        onCheckedChange={(checked) => handleToggleChange("includeLocalEvents", checked as boolean)}
                      />
                      <label
                        htmlFor="includeLocalEvents"
                        className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Include local events and festivals
                      </label>
                    </div>
                  </div>
                </div>
              </CardContent>
            </>
          )}

          {step === 3 && (
            <>
              <CardHeader>
                <CardTitle>Any additional details?</CardTitle>
                <CardDescription>Tell us anything else that would help create your perfect itinerary</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <Label htmlFor="additionalInfo">Additional Information</Label>
                  <Textarea
                    id="additionalInfo"
                    name="additionalInfo"
                    placeholder="Special requirements, accessibility needs, dietary restrictions, specific places you want to visit, etc."
                    rows={5}
                    value={formData.additionalInfo}
                    onChange={handleInputChange}
                  />
                </div>
              </CardContent>
            </>
          )}

          <CardFooter className="flex justify-between">
            {step > 1 ? (
              <Button variant="outline" onClick={prevStep}>
                Back
              </Button>
            ) : (
              <div></div>
            )}

            {step < 3 ? (
              <Button onClick={nextStep}>Next</Button>
            ) : (
              <Button onClick={generateItinerary} disabled={isGenerating}>
                {isGenerating ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Generating...
                  </>
                ) : (
                  "Generate Itinerary"
                )}
              </Button>
            )}
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
