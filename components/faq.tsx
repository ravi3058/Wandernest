import Link from "next/link"
import { MessageCircle } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function Faq() {
  const faqCategories = [
    {
      title: "About Wandernest",
      items: [
        {
          question: "How long have you been in business?",
          answer:
            "Wandernest has been connecting travelers since 2018, building a community of over 10,000 active members across the globe.",
        },
        {
          question: "Why did you start this journey?",
          answer:
            "We started Wandernest because we believe travel is better when shared. Our founders met while backpacking and realized there was no platform dedicated to connecting solo travelers who wanted to share experiences.",
        },
      ],
    },
    {
      title: "Tell me more about the trip",
      items: [
        {
          question: "What do I need to bring?",
          answer:
            "We recommend bringing comfortable clothing suitable for your destination's climate, personal toiletries, any required medications, and a spirit of adventure! A detailed packing list will be provided after booking.",
        },
        {
          question: "How do I get to the cabin?",
          answer:
            "Detailed directions will be provided upon booking confirmation. Most of our locations are accessible by car, and some have shuttle services available from nearby transportation hubs.",
        },
      ],
    },
    {
      title: "Pets, family & friends",
      items: [
        {
          question: "Please tell me I can bring my dog",
          answer:
            "Yes! Many of our locations are pet-friendly. Look for the 'Pet Friendly' tag when browsing accommodations. Additional cleaning fees may apply.",
        },
        {
          question: "How many people share a ride?",
          answer:
            "Our ride-sharing options typically accommodate 3-5 people, depending on the vehicle. You can specify your preferences when arranging transportation.",
        },
      ],
    },
  ]

  return (
    <section className="bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Frequently Asked Questions</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {faqCategories.map((category, index) => (
            <div key={index}>
              <h3 className="text-xl font-bold mb-6">{category.title}</h3>
              <Accordion type="single" collapsible className="w-full">
                {category.items.map((item, itemIndex) => (
                  <AccordionItem key={itemIndex} value={`item-${index}-${itemIndex}`}>
                    <AccordionTrigger className="text-left">{item.question}</AccordionTrigger>
                    <AccordionContent>{item.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center bg-slate-50 p-6 rounded-lg max-w-2xl mx-auto">
          <p className="mb-4">
            Still have a question? If you still have questions contact a member of the team on live chat and we'd be
            more than happy to help.
          </p>
          <Link href="/contact" className="inline-flex items-center text-primary font-medium hover:underline">
            <MessageCircle className="mr-2 h-5 w-5" />
            Start a conversation
          </Link>
        </div>
      </div>
    </section>
  )
}
