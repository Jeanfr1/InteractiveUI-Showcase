
import React from "react";
import { GradientHeading } from "./ui/gradient-heading";
import { LogoCarousel } from "./ui/logo-carousel";
import { 
  Plane, 
  Building2, 
  Globe, 
  Search, 
  Hotel, 
  MapPin 
} from "lucide-react";

const allLogos = [
  { 
    name: "Uber", 
    id: 1, 
    img: (props) => <MapPin {...props} className="w-12 h-12 md:w-16 md:h-16 text-[#22c55e] drop-shadow-[0_0_10px_rgba(34,197,94,0.3)]" /> 
  },
  { 
    name: "Travel Rentals", 
    id: 2, 
    img: (props) => <Building2 {...props} className="w-12 h-12 md:w-16 md:h-16 text-[#22c55e] drop-shadow-[0_0_10px_rgba(34,197,94,0.3)]" /> 
  },
  { 
    name: "Air France", 
    id: 3, 
    img: (props) => <Plane {...props} className="w-12 h-12 md:w-16 md:h-16 text-[#22c55e] drop-shadow-[0_0_10px_rgba(34,197,94,0.3)]" /> 
  },
  { 
    name: "Skyscanner", 
    id: 4, 
    img: (props) => <Search {...props} className="w-12 h-12 md:w-16 md:h-16 text-[#22c55e] drop-shadow-[0_0_10px_rgba(34,197,94,0.3)]" /> 
  },
  { 
    name: "Booking.com", 
    id: 5, 
    img: (props) => <Hotel {...props} className="w-12 h-12 md:w-16 md:h-16 text-[#22c55e] drop-shadow-[0_0_10px_rgba(34,197,94,0.3)]" /> 
  },
  { 
    name: "Global Travel", 
    id: 6, 
    img: (props) => <Globe {...props} className="w-12 h-12 md:w-16 md:h-16 text-[#22c55e] drop-shadow-[0_0_10px_rgba(34,197,94,0.3)]" /> 
  },
];

export function LogoCarouselDemo() {
  return (
    <div className="space-y-8 py-24 bg-black/5 dark:bg-black/40 backdrop-blur-sm">
      <div className="mx-auto flex w-full max-w-screen-lg flex-col items-center space-y-8">
        <div className="text-center space-y-2">
          <h3 className="text-xl md:text-2xl font-semibold text-[#22c55e]/80 drop-shadow-[0_0_10px_rgba(34,197,94,0.2)]">
            Trusted by Leading Travel Brands
          </h3>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#22c55e] drop-shadow-[0_0_15px_rgba(34,197,94,0.4)]">
            Our Travel Partners
          </h2>
        </div>
        <LogoCarousel columnCount={3} logos={allLogos} />
      </div>
    </div>
  );
}
