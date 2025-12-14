"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MapPin, X } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

interface Location {
  id: string
  name: string
  x: number // percentage
  y: number // percentage
  description: string
  image: string
}

const LOCATIONS: Location[] = [
  {
    id: "barn",
    name: "The Big Barn",
    x: 40,
    y: 30,
    description: "The heart of our sanctuary, housing our seniors and those needing extra care.",
    image: "https://images.unsplash.com/photo-1544977085-35db3e47dc40?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "pasture",
    name: "North Pasture",
    x: 70,
    y: 50,
    description: "Acres of rolling hills where the herd roams free during the day.",
    image: "https://images.unsplash.com/photo-1447012359422-54c3dc02b236?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "arena",
    name: "Rehab Arena",
    x: 25,
    y: 65,
    description: "Where trust is rebuilt. Our specialized training facility for rehabilitation.",
    image: "https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?q=80&w=800&auto=format&fit=crop",
  },
]

export function SanctuaryMap() {
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(null)

  return (
    <section className="py-20 bg-muted/20 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl font-bold mb-4">Explore the Sanctuary</h2>
          <p className="text-muted-foreground">Click on a location to see what's happening.</p>
        </div>

        <div className="relative aspect-[16/9] w-full max-w-5xl mx-auto rounded-3xl overflow-hidden bg-[#e6dfd3] shadow-inner border-4 border-white">
          {/* Stylized Map Background (SVG Pattern) */}
          <div className="absolute inset-0 opacity-20" 
               style={{ 
                   backgroundImage: 'radial-gradient(#5a7c65 1px, transparent 1px)', 
                   backgroundSize: '20px 20px' 
               }} 
          />
          
          {/* Simple Illustration Elements (SVG) */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none text-primary/20" viewBox="0 0 100 100" preserveAspectRatio="none">
             {/* River */}
             <path d="M0 80 C 30 70, 70 90, 100 80" stroke="currentColor" strokeWidth="2" fill="none" />
             {/* Trees */}
             <circle cx="10" cy="20" r="5" fill="currentColor" />
             <circle cx="85" cy="15" r="8" fill="currentColor" />
             <circle cx="90" cy="85" r="6" fill="currentColor" />
          </svg>

          {/* Interactive Pins */}
          {LOCATIONS.map((loc) => (
            <button
              key={loc.id}
              className="absolute z-10 group transform -translate-x-1/2 -translate-y-1/2"
              style={{ left: `${loc.x}%`, top: `${loc.y}%` }}
              onClick={() => setSelectedLocation(loc)}
            >
              <div className="relative">
                <div className="h-8 w-8 bg-primary rounded-full flex items-center justify-center text-white shadow-lg transition-transform group-hover:scale-110 animate-bounce">
                  <MapPin className="h-5 w-5" />
                </div>
                <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 bg-white px-3 py-1 rounded-full text-xs font-bold shadow-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                  {loc.name}
                </div>
              </div>
            </button>
          ))}

          {/* Selected Location Modal / Card */}
          <AnimatePresence>
            {selectedLocation && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="absolute inset-0 z-20 flex items-center justify-center p-4 bg-black/20 backdrop-blur-sm"
                onClick={() => setSelectedLocation(null)}
              >
                <Card 
                    className="w-full max-w-md overflow-hidden bg-background"
                    onClick={(e) => e.stopPropagation()}
                >
                  <div className="relative aspect-video">
                    <img src={selectedLocation.image} alt={selectedLocation.name} className="w-full h-full object-cover" />
                    <button
                      className="absolute top-2 right-2 p-1 bg-black/50 rounded-full text-white hover:bg-black/70"
                      onClick={() => setSelectedLocation(null)}
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="font-serif text-2xl font-bold mb-2">{selectedLocation.name}</h3>
                    <p className="text-muted-foreground">{selectedLocation.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}

