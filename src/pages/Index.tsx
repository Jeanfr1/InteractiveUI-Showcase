
import { Hero } from "@/components/ui/Hero"
import { TimelineDemo } from "@/components/TimelineDemo"
import { LogoCarouselDemo } from "@/components/LogoCarouselDemo"
import { ThreeDPhotoCarouselDemo } from "@/components/ThreeDPhotoCarouselDemo"

const Index = () => {
  return (
    <div className="w-full">
      <Hero />
      <TimelineDemo />
      <LogoCarouselDemo />
      <ThreeDPhotoCarouselDemo />
    </div>
  )
}

export default Index
