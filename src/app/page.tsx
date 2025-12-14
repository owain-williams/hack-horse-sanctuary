import { Hero } from "@/components/home/Hero"
import { ImpactTicker } from "@/components/home/ImpactTicker"
import { BeforeAfterSlider } from "@/components/home/BeforeAfterSlider"
import { SanctuaryMap } from "@/components/home/SanctuaryMap"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <ImpactTicker />
      <BeforeAfterSlider />
      <SanctuaryMap />
      
      {/* Temporary Navigation Links for Development */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-serif font-bold mb-8">Explore More</h2>
            <div className="flex justify-center gap-4">
                <Link href="/horses">
                    <Button variant="secondary" size="lg">Meet the Horses</Button>
                </Link>
                <Link href="/donate">
                    <Button variant="default" size="lg">Donate Now</Button>
                </Link>
            </div>
        </div>
      </section>
    </div>
  )
}
