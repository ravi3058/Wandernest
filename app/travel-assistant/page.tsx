"use client"

import { useRef, useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useChat } from "ai/react"
import { Bot, Send, User, Loader2 } from "lucide-react"

export default function TravelAssistantPage() {
  const { messages, input, handleInputChange, handleSubmit, isLoading } = useChat({
    api: "/api/chat",
    initialMessages: [
      {
        id: "welcome",
        role: "assistant",
        content:
          "Hello! I'm your India travel assistant. I can help you with destination recommendations, itinerary planning, information about local cuisine, cultural insights, and travel tips for India. How can I assist you today?",
      },
    ],
  })
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const [showSuggestions, setShowSuggestions] = useState(true)

  // Auto-scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  const handleSuggestionClick = (suggestion: string) => {
    handleInputChange({ target: { value: suggestion } } as any)
    setShowSuggestions(false)
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <Card className="border-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Bot className="h-6 w-6 text-primary" />
              Travel Assistant
            </CardTitle>
            <CardDescription>
              Ask me anything about traveling in India. I can recommend destinations based on weather, suggest
              itineraries, or provide information about local attractions, cuisine, and culture.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[500px] overflow-y-auto p-4 space-y-4 mb-4">
              {messages.map((message) => (
                <div key={message.id} className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
                  <div className={`flex gap-3 max-w-[80%] ${message.role === "user" ? "flex-row-reverse" : ""}`}>
                    <Avatar className="h-8 w-8">
                      {message.role === "user" ? (
                        <AvatarImage src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1780&auto=format&fit=crop" />
                      ) : (
                        <AvatarImage src="https://images.unsplash.com/photo-1531379410502-63bfe8cdaf6f?q=80&w=1887&auto=format&fit=crop" />
                      )}
                      <AvatarFallback>
                        {message.role === "user" ? <User className="h-4 w-4" /> : <Bot className="h-4 w-4" />}
                      </AvatarFallback>
                    </Avatar>
                    <div
                      className={`rounded-lg px-4 py-2 ${
                        message.role === "user" ? "bg-primary text-primary-foreground" : "bg-muted"
                      }`}
                    >
                      <div className="whitespace-pre-wrap">{message.content}</div>
                    </div>
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="flex gap-3 max-w-[80%]">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src="https://images.unsplash.com/photo-1531379410502-63bfe8cdaf6f?q=80&w=1887&auto=format&fit=crop" />
                      <AvatarFallback>
                        <Bot className="h-4 w-4" />
                      </AvatarFallback>
                    </Avatar>
                    <div className="rounded-lg px-4 py-2 bg-muted">
                      <Loader2 className="h-4 w-4 animate-spin" />
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
          </CardContent>
          <CardFooter>
            <form onSubmit={handleSubmit} className="flex w-full gap-2">
              <Input
                placeholder="Ask about destinations, weather, or travel tips..."
                value={input}
                onChange={handleInputChange}
                className="flex-1"
              />
              <Button type="submit" disabled={isLoading || !input.trim()}>
                <Send className="h-4 w-4" />
                <span className="sr-only">Send</span>
              </Button>
            </form>
          </CardFooter>
        </Card>

        {showSuggestions && messages.length === 1 && (
          <div className="mt-8">
            <h2 className="text-xl font-bold mb-4">Try asking:</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Button
                variant="outline"
                className="justify-start h-auto py-3 px-4 text-left"
                onClick={() => handleSuggestionClick("Where should I visit in India during monsoon season?")}
              >
                Where should I visit in India during monsoon season?
              </Button>
              <Button
                variant="outline"
                className="justify-start h-auto py-3 px-4 text-left"
                onClick={() => handleSuggestionClick("Plan a 7-day trip to Rajasthan in winter")}
              >
                Plan a 7-day trip to Rajasthan in winter
              </Button>
              <Button
                variant="outline"
                className="justify-start h-auto py-3 px-4 text-left"
                onClick={() => handleSuggestionClick("What are the best hill stations to visit in summer?")}
              >
                What are the best hill stations to visit in summer?
              </Button>
              <Button
                variant="outline"
                className="justify-start h-auto py-3 px-4 text-left"
                onClick={() => handleSuggestionClick("Tell me about Indian cuisine and what to try")}
              >
                Tell me about Indian cuisine and what to try
              </Button>
            </div>
          </div>
        )}

        <div className="mt-12 grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>How I Can Help</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="bg-primary/10 p-2 rounded-full">
                  <Bot className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">Weather-Based Recommendations</h3>
                  <p className="text-sm text-muted-foreground">
                    Get destination suggestions based on current weather or your preferred season.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-primary/10 p-2 rounded-full">
                  <Bot className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">Itinerary Planning</h3>
                  <p className="text-sm text-muted-foreground">
                    Ask for customized itineraries for any region in India based on your interests and time available.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-primary/10 p-2 rounded-full">
                  <Bot className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">Cultural Insights</h3>
                  <p className="text-sm text-muted-foreground">
                    Learn about local customs, festivals, cuisine, and cultural practices across different Indian
                    regions.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Sample Questions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <Button
                variant="ghost"
                className="w-full justify-start text-left h-auto py-2"
                onClick={() =>
                  handleInputChange({
                    target: { value: "What are the best places to visit in Kerala during December?" },
                  } as any)
                }
              >
                "What are the best places to visit in Kerala during December?"
              </Button>
              <Button
                variant="ghost"
                className="w-full justify-start text-left h-auto py-2"
                onClick={() =>
                  handleInputChange({
                    target: { value: "I'm planning a family trip to North India in winter. Where should we go?" },
                  } as any)
                }
              >
                "I'm planning a family trip to North India in winter. Where should we go?"
              </Button>
              <Button
                variant="ghost"
                className="w-full justify-start text-left h-auto py-2"
                onClick={() =>
                  handleInputChange({
                    target: { value: "Create a 5-day itinerary for Goa with beach and cultural activities" },
                  } as any)
                }
              >
                "Create a 5-day itinerary for Goa with beach and cultural activities"
              </Button>
              <Button
                variant="ghost"
                className="w-full justify-start text-left h-auto py-2"
                onClick={() =>
                  handleInputChange({
                    target: { value: "What should I pack for a trip to Darjeeling in October?" },
                  } as any)
                }
              >
                "What should I pack for a trip to Darjeeling in October?"
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
