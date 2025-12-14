"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-40 transition-all duration-300",
        isScrolled
          ? "bg-background/80 backdrop-blur-md shadow-sm py-4"
          : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto flex items-center justify-between px-4">
        <Link href="/" className="font-serif text-2xl font-bold tracking-tight text-primary">
          HACK<span className="text-foreground">Sanctuary</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8 font-medium">
          <Link href="/about" className="hover:text-primary transition-colors">
            Our Mission
          </Link>
          <Link href="/horses" className="hover:text-primary transition-colors">
            Meet the Horses
          </Link>
          <Link href="/stories" className="hover:text-primary transition-colors">
            Success Stories
          </Link>
          <Link href="/visit" className="hover:text-primary transition-colors">
            Visit Us
          </Link>
        </nav>

        <div className="flex items-center gap-4">
            <Button variant="default" className="hidden md:flex rounded-full px-6 bg-primary hover:bg-primary/90">
            Donate
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
            </Button>
        </div>
      </div>
    </header>
  )
}

