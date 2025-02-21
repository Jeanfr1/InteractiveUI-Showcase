
import React from "react";
import { GradientHeading } from "./ui/gradient-heading";
import { LogoCarousel } from "./ui/logo-carousel";
import { Airplay, Airbnb, Plane, Search, Booking, Google } from "lucide-react";

const allLogos = [
  { 
    name: "Uber", 
    id: 1, 
    img: (props) => <Airplay {...props} className="w-12 h-12 md:w-16 md:h-16 text-black dark:text-white" /> 
  },
  { 
    name: "Airbnb", 
    id: 2, 
    img: (props) => <Airbnb {...props} className="w-12 h-12 md:w-16 md:h-16 text-[#FF5A5F]" /> 
  },
  { 
    name: "Air France", 
    id: 3, 
    img: (props) => <Plane {...props} className="w-12 h-12 md:w-16 md:h-16 text-[#002157]" /> 
  },
  { 
    name: "Skyscanner", 
    id: 4, 
    img: (props) => <Search {...props} className="w-12 h-12 md:w-16 md:h-16 text-[#0770E3]" /> 
  },
  { 
    name: "Booking.com", 
    id: 5, 
    img: (props) => <Booking {...props} className="w-12 h-12 md:w-16 md:h-16 text-[#003580]" /> 
  },
  { 
    name: "Google", 
    id: 6, 
    img: (props) => <Google {...props} className="w-12 h-12 md:w-16 md:h-16 text-[#4285F4]" /> 
  },
];

export function LogoCarouselDemo() {
  return (
    <div className="space-y-8 py-24">
      <div className="mx-auto flex w-full max-w-screen-lg flex-col items-center space-y-8">
        <div className="text-center">
          <GradientHeading variant="secondary">
            Trusted by Leading Travel Brands
          </GradientHeading>
          <GradientHeading size="xxl">
            Our Travel Partners
          </GradientHeading>
        </div>
        <LogoCarousel columnCount={3} logos={allLogos} />
      </div>
    </div>
  );
}
