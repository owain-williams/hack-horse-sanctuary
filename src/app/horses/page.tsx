"use client";

import { HorseCard } from "@/components/horses/HorseCard";
import { HorseFilters } from "@/components/horses/HorseFilters";
import { HORSES } from "@/lib/horses";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export default function HorsesPage() {
  const [filter, setFilter] = useState("All");

  const filteredHorses = HORSES.filter((horse) => {
    if (filter === "All") return true;
    return horse.tags.includes(filter);
  });

  return (
    <div className="min-h-screen bg-background pb-20 pt-10">
      <div className="container mx-auto px-4">
        <div className="mb-10 text-center">
          <h1 className="font-serif text-5xl font-bold text-primary mb-4">
            Meet Our Residents
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Each horse has a unique story and personality. Find your perfect
            match.
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
  );
}
