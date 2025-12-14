"use client"

import { useState, useRef } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Activity, Heart, Hand } from "lucide-react"

export interface Horse {
  id: string
  name: string
  age: number
  breed: string
  image: string
  video: string
  tags: string[]
  quirks: {
    energy: number // 1-10
    trust: number // 1-10
    handling: number // 1-10
  }
}

interface HorseCardProps {
  horse: Horse
}

export function HorseCard({ horse }: HorseCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  const handleMouseEnter = () => {
    setIsHovered(true)
    if (videoRef.current) {
      videoRef.current.play().catch(() => {})
    }
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    if (videoRef.current) {
      videoRef.current.pause()
      videoRef.current.currentTime = 0
    }
  }

  return (
    <Card
      className="overflow-hidden border-none shadow-lg transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="relative aspect-[3/4] overflow-hidden bg-muted">
        {/* Main Image */}
        <motion.img
          src={horse.image}
          alt={horse.name}
          className="absolute inset-0 h-full w-full object-cover transition-opacity duration-300"
          style={{ opacity: isHovered ? 0 : 1 }}
        />

        {/* Hover Video */}
        <video
          ref={videoRef}
          src={horse.video}
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
          style={{ opacity: isHovered ? 1 : 0 }}
        />

        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-90" />

        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
          <CardTitle className="mb-2 text-3xl font-serif font-bold">{horse.name}</CardTitle>
          <p className="text-sm font-medium opacity-90">
            {horse.breed} • {horse.age} years old
          </p>

          {/* Quirks Meter - Revealed on Hover */}
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: isHovered ? "auto" : 0, opacity: isHovered ? 1 : 0 }}
            className="mt-4 space-y-2 overflow-hidden"
          >
            <div className="flex items-center gap-2 text-xs">
              <Activity className="h-3 w-3" />
              <span className="w-16">Energy</span>
              <div className="h-1.5 flex-1 rounded-full bg-white/20">
                <div
                  className="h-full rounded-full bg-accent"
                  style={{ width: `${horse.quirks.energy * 10}%` }}
                />
              </div>
            </div>
            <div className="flex items-center gap-2 text-xs">
              <Heart className="h-3 w-3" />
              <span className="w-16">Trust</span>
              <div className="h-1.5 flex-1 rounded-full bg-white/20">
                <div
                  className="h-full rounded-full bg-primary"
                  style={{ width: `${horse.quirks.trust * 10}%` }}
                />
              </div>
            </div>
            <div className="flex items-center gap-2 text-xs">
              <Hand className="h-3 w-3" />
              <span className="w-16">Handling</span>
              <div className="h-1.5 flex-1 rounded-full bg-white/20">
                <div
                  className="h-full rounded-full bg-secondary"
                  style={{ width: `${horse.quirks.handling * 10}%` }}
                />
              </div>
            </div>

            <div className="pt-4">
              <Button className="w-full bg-white text-black hover:bg-white/90">
                View Profile
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Tags */}
        <div className="absolute top-4 right-4 flex flex-col gap-2">
            {horse.tags.map(tag => (
                <Badge key={tag} variant="secondary" className="backdrop-blur-md bg-black/40 text-white hover:bg-black/60 border-none">
                    {tag}
                </Badge>
            ))}
        </div>
      </div>
    </Card>
  )
}

