"use client"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface HorseFiltersProps {
  activeFilter: string
  onFilterChange: (filter: string) => void
}

export function HorseFilters({ activeFilter, onFilterChange }: HorseFiltersProps) {
  const filters = [
    "All",
    "Rideable",
    "Companion Only",
    "Good with Kids",
    "Pasture Potato",
    "Special Needs",
  ]

  return (
    <div className="flex flex-wrap justify-center gap-2 py-8">
      {filters.map((filter) => (
        <Button
          key={filter}
          variant={activeFilter === filter ? "default" : "outline"}
          onClick={() => onFilterChange(filter)}
          className={cn(
            "rounded-full border-primary/20",
            activeFilter === filter
              ? "bg-primary text-primary-foreground"
              : "bg-transparent hover:bg-primary/10 hover:text-primary"
          )}
        >
          {filter}
        </Button>
      ))}
    </div>
  )
}

