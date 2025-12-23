"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { tags, type Tag } from "@/lib/horses";

interface HorseFiltersProps {
  activeFilter: Tag;
  onFilterChange: (filter: Tag) => void;
}

export function HorseFilters({
  activeFilter,
  onFilterChange,
}: HorseFiltersProps) {
  return (
    <div className="flex flex-wrap justify-center gap-2 py-8">
      {tags.map((filter) => (
        <Button
          key={filter}
          variant={activeFilter === filter ? "default" : "outline"}
          onClick={() => onFilterChange(filter)}
          className={cn(
            "rounded-full border-primary/20",
            activeFilter === filter
              ? "bg-primary text-primary-foreground"
              : "bg-transparent hover:bg-primary/10 hover:text-primary",
          )}
        >
          {filter}
        </Button>
      ))}
    </div>
  );
}
