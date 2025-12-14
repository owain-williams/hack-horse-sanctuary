"use client"

import { useState } from "react"
import { HorseCard, type Horse } from "@/components/horses/HorseCard"
import { HorseFilters } from "@/components/horses/HorseFilters"
import { motion, AnimatePresence } from "framer-motion"

// Mock Data
const MOCK_HORSES: Horse[] = [
  {
    id: "1",
    name: "Bella",
    age: 8,
    breed: "Thoroughbred",
    image: "https://images.unsplash.com/photo-1551884831-bbf3ddd77501?q=80&w=1200&auto=format&fit=crop",
    video: "https://videos.pexels.com/video-files/3209663/3209663-uhd_2560_1440_25fps.mp4",
    tags: ["Rideable", "Good with Kids"],
    quirks: { energy: 7, trust: 9, handling: 8 },
  },
  {
    id: "2",
    name: "Barney",
    age: 15,
    breed: "Cob",
    image: "https://images.unsplash.com/photo-1598974357801-cbca100e65d3?q=80&w=1200&auto=format&fit=crop",
    video: "https://videos.pexels.com/video-files/855079/855079-hd_1920_1080_30fps.mp4",
    tags: ["Companion Only", "Pasture Potato"],
    quirks: { energy: 3, trust: 10, handling: 10 },
  },
  {
    id: "3",
    name: "Spirit",
    age: 5,
    breed: "Mustang",
    image: "https://images.unsplash.com/photo-1534068590799-09895a701e3e?q=80&w=1200&auto=format&fit=crop",
    video: "https://videos.pexels.com/video-files/3752668/3752668-uhd_2560_1440_25fps.mp4",
    tags: ["Special Needs", "Project Horse"],
    quirks: { energy: 9, trust: 4, handling: 5 },
  },
  {
    id: "4",
    name: "Luna",
    age: 12,
    breed: "Arabian",
    image: "https://images.unsplash.com/photo-1534251369789-5067c81d1d11?q=80&w=1200&auto=format&fit=crop",
    video: "https://videos.pexels.com/video-files/2892985/2892985-hd_1920_1080_24fps.mp4",
    tags: ["Rideable", "Spirited"],
    quirks: { energy: 8, trust: 7, handling: 7 },
  },
  {
    id: "5",
    name: "Teddy",
    age: 22,
    breed: "Shetland Pony",
    image: "https://images.unsplash.com/photo-1599052727138-0814f09d80a5?q=80&w=1200&auto=format&fit=crop",
    video: "https://videos.pexels.com/video-files/3222851/3222851-uhd_3840_2160_25fps.mp4",
    tags: ["Companion Only", "Good with Kids"],
    quirks: { energy: 4, trust: 10, handling: 9 },
  },
  {
    id: "6",
    name: "Major",
    age: 10,
    breed: "Clydesdale",
    image: "https://images.unsplash.com/photo-1617570535385-d8868ba458a4?q=80&w=1200&auto=format&fit=crop",
    video: "https://videos.pexels.com/video-files/5806655/5806655-uhd_2560_1440_25fps.mp4",
    tags: ["Rideable", "Gentle Giant"],
    quirks: { energy: 5, trust: 9, handling: 8 },
  },
]

export default function HorsesPage() {
  const [filter, setFilter] = useState("All")

  const filteredHorses = MOCK_HORSES.filter((horse) => {
    if (filter === "All") return true
    return horse.tags.includes(filter)
  })

  return (
    <div className="min-h-screen bg-background pb-20 pt-10">
      <div className="container mx-auto px-4">
        <div className="mb-10 text-center">
          <h1 className="font-serif text-5xl font-bold text-primary mb-4">Meet Our Residents</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Each horse has a unique story and personality. Find your perfect match.
          </p>
        </div>

        <HorseFilters activeFilter={filter} onFilterChange={setFilter} />

        <motion.div
          layout
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3"
        >
          <AnimatePresence>
            {filteredHorses.map((horse) => (
              <motion.div
                key={horse.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <HorseCard horse={horse} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredHorses.length === 0 && (
          <div className="py-20 text-center text-muted-foreground">
            No horses found with this filter. Try another one!
          </div>
        )}
      </div>
    </div>
  )
}

