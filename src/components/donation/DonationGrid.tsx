"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Check, ShoppingCart, Plus, Minus, HeartHandshake } from "lucide-react"
import confetti from "canvas-confetti"

interface DonationItemProps {
  id: string
  title: string
  price: number
  image: string
  description: string
  onSelect: (id: string, price: number) => void
}

const DONATION_ITEMS = [
  {
    id: "hay",
    title: "Feed a Senior for a Week",
    price: 10,
    image: "https://images.unsplash.com/photo-1584473457406-6240486418e9?q=80&w=800&auto=format&fit=crop",
    description: "Provides specialized feed for our elderly residents with dental issues.",
  },
  {
    id: "farrier",
    title: "Essential Farrier Care",
    price: 50,
    image: "https://images.unsplash.com/photo-1596733430502-d418d7529269?q=80&w=800&auto=format&fit=crop",
    description: "Keeps hooves healthy and pain-free. Critical for rehabilitation.",
  },
  {
    id: "vet",
    title: "Emergency Medical Fund",
    price: 100,
    image: "https://images.unsplash.com/photo-1628009368231-7603352721c3?q=80&w=800&auto=format&fit=crop",
    description: "Contributes to life-saving surgeries and medication for new rescues.",
  },
  {
    id: "blanket",
    title: "Winter Rug",
    price: 75,
    image: "https://images.unsplash.com/photo-1543165365-07951f042e3d?q=80&w=800&auto=format&fit=crop",
    description: "Keeps a horse warm and dry during the harsh winter months.",
  },
]

export function DonationGrid() {
  const [cart, setCart] = useState<{ [key: string]: number }>({})

  const handleAdd = (id: string, price: number) => {
    setCart((prev) => ({ ...prev, [id]: (prev[id] || 0) + 1 }))
    triggerConfetti()
  }

  const handleRemove = (id: string) => {
    setCart((prev) => {
      const newCart = { ...prev }
      if (newCart[id] > 0) {
        newCart[id] -= 1
        if (newCart[id] === 0) delete newCart[id]
      }
      return newCart
    })
  }

  const triggerConfetti = () => {
    const scalar = 2
    const heart = confetti.shapeFromPath({
      path: "M167 102.17c0 20.2-22 53.9-74.4 100h2.4c-52.4-46.1-74.4-79.8-74.4-100 0-26 23.4-38.9 44.5-38.9 14.1 0 26.2 6.6 34.3 16.9 8-10.3 20.1-16.9 34.3-16.9 21.1 0 44.5 12.9 44.5 38.9z",
    })

    confetti({
      particleCount: 30,
      spread: 70,
      origin: { y: 0.6 },
      shapes: [heart],
      colors: ["#d97706", "#b45309", "#f59e0b"], // Fall colors
    })
  }

  const total = Object.entries(cart).reduce((sum, [id, count]) => {
    const item = DONATION_ITEMS.find((i) => i.id === id)
    return sum + (item ? item.price * count : 0)
  }, 0)

  return (
    <div className="grid gap-8 lg:grid-cols-3">
      {/* Items Grid */}
      <div className="lg:col-span-2 grid gap-6 sm:grid-cols-2">
        {DONATION_ITEMS.map((item) => (
          <Card key={item.id} className="overflow-hidden transition-all hover:shadow-lg">
            <div className="relative aspect-video">
              <img src={item.image} alt={item.title} className="h-full w-full object-cover" />
              <div className="absolute top-2 right-2">
                <Badge className="bg-white/90 text-black hover:bg-white text-base px-3 py-1">
                  £{item.price}
                </Badge>
              </div>
            </div>
            <CardContent className="p-6">
              <h3 className="font-serif text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground mb-4">{item.description}</p>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  {cart[item.id] ? (
                    <>
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-8 w-8 rounded-full"
                        onClick={() => handleRemove(item.id)}
                      >
                        <Minus className="h-4 w-4" />
                      </Button>
                      <span className="font-medium w-4 text-center">{cart[item.id]}</span>
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-8 w-8 rounded-full"
                        onClick={() => handleAdd(item.id, item.price)}
                      >
                        <Plus className="h-4 w-4" />
                      </Button>
                    </>
                  ) : (
                    <Button
                      className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                      onClick={() => handleAdd(item.id, item.price)}
                    >
                      Add to Donation
                    </Button>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Cart / Summary */}
      <div className="lg:col-span-1">
        <div className="sticky top-24">
          <Card className="border-2 border-primary/20 bg-muted/30">
            <CardContent className="p-6">
              <h3 className="font-serif text-2xl font-bold mb-6 flex items-center gap-2">
                <HeartHandshake className="text-primary" />
                Your Impact
              </h3>
              
              {Object.keys(cart).length === 0 ? (
                <p className="text-muted-foreground text-center py-8">
                  Select items to see your impact.
                </p>
              ) : (
                <div className="space-y-4">
                  {Object.entries(cart).map(([id, count]) => {
                    const item = DONATION_ITEMS.find((i) => i.id === id)
                    if (!item) return null
                    return (
                      <div key={id} className="flex justify-between items-center text-sm">
                        <span>{item.title} (x{count})</span>
                        <span className="font-medium">£{item.price * count}</span>
                      </div>
                    )
                  })}
                  
                  <div className="h-px bg-border my-4" />
                  
                  <div className="flex justify-between items-center text-lg font-bold">
                    <span>Total Donation</span>
                    <span>£{total}</span>
                  </div>
                </div>
              )}

              <div className="mt-8 space-y-4">
                <div className="flex items-center justify-between p-3 rounded-lg border bg-background">
                  <div className="flex items-center gap-2">
                     <div className="h-4 w-4 rounded-full border border-primary bg-primary flex items-center justify-center">
                         <Check className="h-3 w-3 text-white" />
                     </div>
                     <span className="text-sm font-medium">Make this monthly</span>
                  </div>
                   <span className="text-xs text-muted-foreground">Round up enabled</span>
                </div>

                <Button className="w-full h-12 text-lg" disabled={total === 0} onClick={triggerConfetti}>
                  Complete Donation
                </Button>
                
                <p className="text-xs text-center text-muted-foreground">
                    Secure payment powered by Stripe.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

