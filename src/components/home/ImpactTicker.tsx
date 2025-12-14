"use client"

import { motion } from "framer-motion"

export function ImpactTicker() {
  const stats = [
    "1,240 lbs of Hay Fed this Month",
    "•",
    "8 Horses Rehabilitated in 2024",
    "•",
    "£15 pays for a farrier visit",
    "•",
    "35 Volunteers Active",
    "•",
    "100% Non-Profit",
    "•",
  ]

  return (
    <div className="w-full overflow-hidden bg-primary py-4 text-primary-foreground">
      <div className="relative flex whitespace-nowrap">
        <motion.div
          className="flex whitespace-nowrap"
          animate={{ x: "-50%" }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 20,
          }}
        >
          <div className="flex gap-8 px-4">
            {stats.map((stat, index) => (
              <span key={index} className="text-lg font-medium tracking-wide uppercase">
                {stat}
              </span>
            ))}
          </div>
          <div className="flex gap-8 px-4">
            {stats.map((stat, index) => (
              <span key={`duplicate-${index}`} className="text-lg font-medium tracking-wide uppercase">
                {stat}
              </span>
            ))}
          </div>
          <div className="flex gap-8 px-4">
            {stats.map((stat, index) => (
              <span key={`duplicate-2-${index}`} className="text-lg font-medium tracking-wide uppercase">
                {stat}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

