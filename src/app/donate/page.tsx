"use client"

import { DonationGrid } from "@/components/donation/DonationGrid"

export default function DonatePage() {
  return (
    <div className="min-h-screen bg-background pb-20 pt-10">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center max-w-3xl mx-auto">
          <h1 className="font-serif text-5xl font-bold text-primary mb-6">
            Shop for a Cause
          </h1>
          <p className="text-xl text-muted-foreground">
            Don't just give money—give <span className="text-foreground font-semibold">care</span>. 
            Choose exactly how your donation will help our horses today.
          </p>
        </div>

        <DonationGrid />
      </div>
    </div>
  )
}

