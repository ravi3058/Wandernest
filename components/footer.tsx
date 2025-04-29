import Link from "next/link"

export default function Footer() {
  const footerLinks = [
    {
      title: "About us",
      links: [
        { label: "Our story", href: "/about" },
        { label: "Why us", href: "/about" },
        { label: "How it works", href: "/about" },
        { label: "FAQ", href: "/faq" },
      ],
    },
    {
      title: "Our services",
      links: [
        { label: "Workation Stays", href: "/services/workation-stays" },
        { label: "Community Hosting", href: "/services/community-hosting" },
        { label: "Remote Work Spaces", href: "/services/remote-work-spaces" },
        { label: "Itinerary Advisor", href: "/itinerary-advisor" },
        { label: "Travel Assistant", href: "/travel-assistant" },
      ],
    },
    {
      title: "Get inspired",
      links: [
        { label: "Explore nature", href: "/services" },
        { label: "Hiking trails", href: "/services" },
        { label: "Swimming", href: "/services" },
        { label: "Boating", href: "/services" },
        { label: "Rest, relax and re-set", href: "/services" },
        { label: "Pet friendly", href: "/services" },
      ],
    },
    {
      title: "Support",
      links: [
        { label: "Help", href: "/contact" },
        { label: "Contact us", href: "/contact" },
        { label: "Privacy Policy", href: "/contact" },
        { label: "Terms of Service", href: "/contact" },
        { label: "Complaints Policy", href: "/contact" },
      ],
    },
  ]

  return (
    <footer className="bg-slate-800 text-white pt-16 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {footerLinks.map((column, index) => (
            <div key={index}>
              <h3 className="text-lg font-bold mb-4">{column.title}</h3>
              <ul className="space-y-2">
                {column.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link href={link.href} className="text-slate-300 hover:text-white transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="text-center pt-8 border-t border-slate-700">
          <div className="text-2xl font-bold text-primary mb-4">WANDERNEST</div>
          <p className="text-slate-400">&copy; {new Date().getFullYear()} Wandernest. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
