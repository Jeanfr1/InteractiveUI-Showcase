
import { Hero } from "@/components/ui/Hero"
import { TimelineDemo } from "@/components/TimelineDemo"
import { LogoCarouselDemo } from "@/components/LogoCarouselDemo"
import { ImageTrailDemo } from "@/components/ImageTrailDemo"
import { WorldMapDemo } from "@/components/WorldMapDemo"

const Index = () => {
  return (
    <div className="w-full">
      <Hero />
      <TimelineDemo />
      <LogoCarouselDemo />
      <ImageTrailDemo />
      <WorldMapDemo />
    </div>
  )
}

export default Index
