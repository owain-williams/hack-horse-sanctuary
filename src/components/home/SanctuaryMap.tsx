"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, X } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { locations, Location } from "@/lib/locations";

export function SanctuaryMap() {
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(
    null,
  );

  return (
    <section className="py-20 bg-muted/20 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl font-bold mb-4">
            Explore the Sanctuary
          </h2>
          <p className="text-muted-foreground">
            Click on a location to see what&apos;s happening.
          </p>
        </div>

        <div className="relative w-full aspect-video max-w-5xl mx-auto rounded-3xl overflow-hidden bg-[#F8F4EB] shadow-inner border-4 border-white">
          {/* Map Overview SVG */}
          <Image
            src="/images/svg/map-overview.svg"
            alt="Sanctuary Map Overview"
            fill
            className="object-contain"
            priority
          />

          {/* Interactive Pins */}
          {locations.map((loc) => (
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
                    <Image
                      src={selectedLocation.image}
                      alt={selectedLocation.name}
                      className="w-full h-full object-cover"
                      height={500}
                      width={500}
                    />
                    <button
                      className="absolute top-2 right-2 p-1 bg-black/50 rounded-full text-white hover:bg-black/70"
                      onClick={() => setSelectedLocation(null)}
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="font-serif text-2xl font-bold mb-2">
                      {selectedLocation.name}
                    </h3>
                    <p className="text-muted-foreground">
                      {selectedLocation.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
