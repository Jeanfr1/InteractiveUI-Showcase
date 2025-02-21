
import React from "react";
import { Link } from "react-router-dom";

const GetStarted = () => {
  const steps = [
    {
      title: "Plan Your Journey",
      description: "Start by choosing your dream destinations and creating a timeline that works for you.",
      icon: "🗺️",
    },
    {
      title: "Document Everything",
      description: "Keep track of your adventures through photos, notes, and memories.",
      icon: "📸",
    },
    {
      title: "Share Your Story",
      description: "Connect with fellow travelers and share your unique experiences.",
      icon: "✨",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-black">
      <div className="container mx-auto px-4 py-24">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-8">
          Begin Your Adventure
        </h1>
        <p className="text-lg md:text-xl text-center text-gray-600 dark:text-gray-400 mb-16">
          Follow these simple steps to start documenting your journey
        </p>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="text-4xl mb-4">{step.icon}</div>
              <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            to="/next-destinations"
            className="inline-flex items-center justify-center text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-[#22c55e] hover:bg-[#22c55e]/90 text-black h-10 px-4 py-2 rounded-md"
          >
            Explore Next Destinations
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
