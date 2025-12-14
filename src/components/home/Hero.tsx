"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Heart } from "lucide-react"

export function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  return (
    <section className="relative h-[90vh] min-h-[600px] w-full overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/40 z-10" /> {/* Overlay */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="h-full w-full object-cover"
          poster="https://images.unsplash.com/photo-1534068590799-09895a701e3e?q=80&w=2000&auto=format&fit=crop" // Fallback image
        >
          {/* Using a placeholder horse video */}
          <source
            src="https://videos.pexels.com/video-files/5806655/5806655-uhd_2560_1440_25fps.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto flex h-full flex-col justify-center px-4 text-white">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-3xl"
        >
          <motion.h1
            variants={itemVariants}
            className="font-serif text-5xl font-bold leading-tight md:text-7xl lg:text-8xl"
          >
            Restoring Trust. <br />
            <span className="text-primary-foreground/90">One soul at a time.</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="mt-6 max-w-xl text-lg md:text-xl text-white/90"
          >
            We rescue, rehabilitate, and rehome abused and neglected horses across the UK.
            Join us in giving them a second chance at life.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="mt-10 flex flex-col gap-4 sm:flex-row"
          >
            <Button
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-8 py-6 rounded-full"
            >
              Adopt a Horse
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/20 hover:text-white bg-transparent text-lg px-8 py-6 rounded-full backdrop-blur-sm"
            >
              Make a Donation
              <Heart className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Sticky Donate Pill (Positioned absolute relative to hero, but fixed in global layout usually. 
          The plan said "floating Donate pill button in the top right (always visible)".
          This was implemented in Navbar mostly, but if we want a separate floating one, we can add it here or in Global.
          Since Navbar has a Donate button, maybe that's enough, or we add a fixed pill.
          Let's stick to the Navbar one for now as it's cleaner, or add a FAB.
      */}
    </section>
  )
}

