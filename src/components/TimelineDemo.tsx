
import React from "react";
import { Timeline } from "./ui/Timeline";

export function TimelineDemo() {
  const data = [
    {
      title: "2024",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Launched our flagship product and expanded to new markets
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80"
              alt="Tech showcase 1"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
            />
            <img
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80"
              alt="Tech showcase 2"
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
            Significant milestones achieved in product development and team growth
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80"
              alt="Development process"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
            />
            <img
              src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=800&q=80"
              alt="Team collaboration"
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
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
            Key achievements and milestones:
          </p>
          <div className="mb-8">
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              ✓ Initial product launch
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              ✓ First major client acquisition
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              ✓ Team expansion to 20+ members
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              ✓ International market entry
            </div>
          </div>
        </div>
      ),
    },
  ];
  
  return (
    <div className="min-h-screen w-full bg-background">
      <Timeline data={data} />
    </div>
  );
}
