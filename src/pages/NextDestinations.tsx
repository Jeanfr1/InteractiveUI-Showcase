
import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const destinations = [
  {
    name: "New Zealand",
    description: "Discover dramatic landscapes from The Lord of the Rings",
    image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e",
    expectedVisit: "2026",
  },
  {
    name: "Norway Fjords",
    description: "Experience the majestic fjords and northern lights",
    image: "https://images.unsplash.com/photo-1433086966358-54859d0ed716",
    expectedVisit: "2026",
  },
  {
    name: "Japanese Alps",
    description: "Explore traditional villages and mountain scenery",
    image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb",
    expectedVisit: "2027",
  },
  {
    name: "Canadian Rockies",
    description: "Adventure through pristine wilderness and glacial lakes",
    image: "https://images.unsplash.com/photo-1472396961693-142e6e269027",
    expectedVisit: "2027",
  },
  {
    name: "Swiss Alps",
    description: "Witness the beauty of alpine meadows and peaks",
    image: "https://images.unsplash.com/photo-1458668383970-8ddd3927deed",
    expectedVisit: "2028",
  },
];

const NextDestinations = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-black">
      <div className="container mx-auto px-4 py-24">
        <div className="mb-16">
          <Link
            to="/"
            className="inline-flex items-center justify-center text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-[#22c55e]/10 text-[#22c55e] h-10 px-4 py-2 rounded-md"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-8">
          Next Destinations
        </h1>
        <p className="text-lg md:text-xl text-center text-gray-600 dark:text-gray-400 mb-16">
          Upcoming adventures and dream locations to explore
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="relative h-48 md:h-64">
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-[#22c55e] text-black px-3 py-1 rounded-full text-sm font-medium">
                  {destination.expectedVisit}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{destination.name}</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {destination.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NextDestinations;
