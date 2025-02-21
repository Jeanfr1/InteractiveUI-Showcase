
import React from "react";
import { Timeline } from "./ui/Timeline";

export function TimelineDemo() {
  const data = [
    {
      title: "2025",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
            Still in France and planning for the next adventures
          </p>
        </div>
      ),
    },
    {
      title: "2024",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            🇮🇹 Italy: Exploring the beautiful cities of Pisa, Florence, Cinque Terre, Portofino, Genoa, and Camogli
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://images.unsplash.com/photo-1516186366443-0744a82bffe7?auto=format&fit=crop&w=800&q=80"
              alt="Pisa Tower"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
            />
            <img
              src="https://images.unsplash.com/photo-1541370976299-4d24ebbc9077?auto=format&fit=crop&w=800&q=80"
              alt="Cinque Terre"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2023",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            🌴 Exploring the diverse landscapes of Martinique, Morocco, and returning to Ireland
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://images.unsplash.com/photo-1539020140153-e479b8c26819?auto=format&fit=crop&w=800&q=80"
              alt="Morocco"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
            />
            <img
              src="https://images.unsplash.com/photo-1533551037358-c8f7182cdb79?auto=format&fit=crop&w=800&q=80"
              alt="Ireland"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2022",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            🌿 Nature and culture: Croatia (Krka and Plitvice National Parks), Lyon, and Strasbourg
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://images.unsplash.com/photo-1560196332-b2a8464a2ac3?auto=format&fit=crop&w=800&q=80"
              alt="Plitvice Lakes"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
            />
            <img
              src="https://images.unsplash.com/photo-1524046960467-53444978e9d0?auto=format&fit=crop&w=800&q=80"
              alt="Lyon"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2021",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            🌅 European city adventures: Nice (France), Barcelona, Venice, and Paris
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=800&q=80"
              alt="Paris"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
            />
            <img
              src="https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?auto=format&fit=crop&w=800&q=80"
              alt="Venice"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2020",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
            🔄 Returned to Brazil for a short period
          </p>
        </div>
      ),
    },
    {
      title: "2019",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            🗺️ Central European exploration: Poland, Czech Republic, Germany, and Belgium
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://images.unsplash.com/photo-1562624475-96c2bc08fab6?auto=format&fit=crop&w=800&q=80"
              alt="Prague"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
            />
            <img
              src="https://images.unsplash.com/photo-1561112078-7d24e04c3407?auto=format&fit=crop&w=800&q=80"
              alt="Berlin"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2018",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            ✈️ First year of European adventures: Amsterdam, Portugal, Switzerland, London, Russia, Cyprus, and Greece
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://images.unsplash.com/photo-1512470876302-972faa2aa9a4?auto=format&fit=crop&w=800&q=80"
              alt="Amsterdam"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
            />
            <img
              src="https://images.unsplash.com/photo-1555993539-1732b0258235?auto=format&fit=crop&w=800&q=80"
              alt="Santorini"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2017",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Embarked on a new adventure, leaving Brazil to live in Dublin, Ireland
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=800&q=80"
              alt="Dublin"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
            />
            <img
              src="https://images.unsplash.com/photo-1572555675827-128b94ee6159?auto=format&fit=crop&w=800&q=80"
              alt="Ireland Landscape"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
            />
          </div>
        </div>
      ),
    },
  ];
  
  return (
    <div className="min-h-screen w-full bg-black/5 dark:bg-black/40 backdrop-blur-sm">
      <div className="pt-24 pb-12 text-center space-y-4">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black dark:text-white">
          Journey Through Time
        </h2>
        <p className="text-lg md:text-xl text-black/60 dark:text-white/60">
          A digital nomad's adventure across the globe
        </p>
      </div>
      <Timeline data={data} />
    </div>
  );
}
