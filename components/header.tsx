"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "./mode-toggle"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useRouter } from "next/navigation"
import { toast } from "@/hooks/use-toast"

export default function Header() {
  const router = useRouter()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [user, setUser] = useState<any>(null)

  useEffect(() => {
    // Check if user is logged in
    const storedUser = localStorage.getItem("wandernest_user")
    if (storedUser) {
      setUser(JSON.parse(storedUser))
    }
  }, [])

  const handleLogout = () => {
    // Clear user data from localStorage
    localStorage.removeItem("wandernest_user")
    localStorage.removeItem("wandernest_token")

    setUser(null)

    toast({
      title: "Logged out",
      description: "You have been successfully logged out.",
    })

    router.push("/")
  }

  return (
    <header className="bg-background border-b sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-primary">
          WANDERNEST
        </Link>

        <div className="hidden md:flex items-center space-x-8">
          <nav>
            <ul className="flex space-x-8">
              <li>
                <Link href="/services" className="font-medium hover:text-primary transition-colors">
                  Our services
                </Link>
              </li>
              <li>
                <Link href="/india" className="font-medium hover:text-primary transition-colors">
                  Discover India
                </Link>
              </li>
              <li>
                <Link href="/travel-assistant" className="font-medium hover:text-primary transition-colors">
                  Travel Assistant
                </Link>
              </li>
              <li>
                <Link href="/faq" className="font-medium hover:text-primary transition-colors">
                  FAQ&apos;s
                </Link>
              </li>
              <li>
                <Link href="/about" className="font-medium hover:text-primary transition-colors">
                  About us
                </Link>
              </li>
            </ul>
          </nav>
          <div className="flex items-center space-x-4">
            {user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                    <Avatar className="h-8 w-8">
                      <AvatarImage
                        src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1780&auto=format&fit=crop"
                        alt={user.name}
                      />
                      <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56" align="end" forceMount>
                  <DropdownMenuLabel className="font-normal">
                    <div className="flex flex-col space-y-1">
                      <p className="text-sm font-medium leading-none">{user.name}</p>
                      <p className="text-xs leading-none text-muted-foreground">{user.email}</p>
                    </div>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild>
                    <Link href="/dashboard">Dashboard</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/dashboard/bookings">Bookings</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/itinerary-advisor/create">Create Itinerary</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/travel-assistant">Travel Assistant</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/dashboard/settings">Settings</Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={handleLogout} className="text-red-500">
                    Log out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <>
                <Button variant="outline" asChild>
                  <Link href="/login">Login</Link>
                </Button>
                <Button asChild>
                  <Link href="/signup">Sign Up</Link>
                </Button>
              </>
            )}
            <ModeToggle />
          </div>
        </div>

        <div className="md:hidden flex items-center">
          <ModeToggle />
          <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(true)} className="ml-2">
            <Menu className="h-6 w-6" />
          </Button>
        </div>

        {isMenuOpen && (
          <div className="fixed inset-0 bg-background z-50 md:hidden">
            <div className="flex justify-end p-4">
              <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(false)}>
                <X className="h-6 w-6" />
              </Button>
            </div>
            <div className="flex flex-col items-center justify-center h-full">
              <nav className="mb-8">
                <ul className="flex flex-col space-y-6 text-center">
                  <li>
                    <Link
                      href="/services"
                      className="text-xl font-medium hover:text-primary transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Our services
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/india"
                      className="text-xl font-medium hover:text-primary transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Discover India
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/travel-assistant"
                      className="text-xl font-medium hover:text-primary transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Travel Assistant
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/faq"
                      className="text-xl font-medium hover:text-primary transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      FAQ&apos;s
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/about"
                      className="text-xl font-medium hover:text-primary transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      About us
                    </Link>
                  </li>
                </ul>
              </nav>
              <div className="flex flex-col space-y-4">
                {user ? (
                  <>
                    <Button variant="outline" asChild className="w-40" onClick={() => setIsMenuOpen(false)}>
                      <Link href="/dashboard">Dashboard</Link>
                    </Button>
                    <Button className="w-40" onClick={handleLogout}>
                      Logout
                    </Button>
                  </>
                ) : (
                  <>
                    <Button variant="outline" asChild className="w-40">
                      <Link href="/login" onClick={() => setIsMenuOpen(false)}>
                        Login
                      </Link>
                    </Button>
                    <Button asChild className="w-40">
                      <Link href="/signup" onClick={() => setIsMenuOpen(false)}>
                        Sign Up
                      </Link>
                    </Button>
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
