"use client"

import { motion } from "framer-motion"
import { TextRotate } from "./text-rotate"
import Floating, { FloatingElement } from "./parallax-floating"
import { Link } from "react-router-dom"

const exampleImages = [
  {
    url: "https://images.unsplash.com/photo-1519681393784-d120267933ba",
    title: "Winter Mountains at Night",
  },
  {
    url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4",
    title: "Dramatic Mountain Landscape",
  },
  {
    url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b",
    title: "Mountain Valley",
  },
  {
    url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    title: "Tropical Beach",
  },
  {
    url: "https://images.unsplash.com/photo-1536048810607-3dc7f86981cb",
    title: "Mountain Lake Reflection",
  },
]

function Hero() {
  return (
    <section className="w-full h-screen overflow-hidden md:overflow-visible flex flex-col items-center justify-center relative">
      <Floating sensitivity={-0.5} className="h-full">
        <FloatingElement
          depth={0.5}
          className="top-[15%] left-[2%] md:top-[25%] md:left-[5%]"
        >
          <motion.img
            src={exampleImages[0].url}
            alt={exampleImages[0].title}
            className="w-16 h-12 sm:w-24 sm:h-16 md:w-28 md:h-20 lg:w-32 lg:h-24 object-cover hover:scale-105 duration-200 cursor-pointer transition-transform -rotate-[3deg] shadow-2xl rounded-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          />
        </FloatingElement>

        <FloatingElement
          depth={1}
          className="top-[0%] left-[8%] md:top-[6%] md:left-[11%]"
        >
          <motion.img
            src={exampleImages[1].url}
            alt={exampleImages[1].title}
            className="w-40 h-28 sm:w-48 sm:h-36 md:w-56 md:h-44 lg:w-60 lg:h-48 object-cover hover:scale-105 duration-200 cursor-pointer transition-transform -rotate-12 shadow-2xl rounded-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          />
        </FloatingElement>

        <FloatingElement
          depth={4}
          className="top-[90%] left-[6%] md:top-[80%] md:left-[8%]"
        >
          <motion.img
            src={exampleImages[2].url}
            alt={exampleImages[2].title}
            className="w-40 h-40 sm:w-48 sm:h-48 md:w-60 md:h-60 lg:w-64 lg:h-64 object-cover -rotate-[4deg] hover:scale-105 duration-200 cursor-pointer transition-transform shadow-2xl rounded-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
          />
        </FloatingElement>

        <FloatingElement
          depth={2}
          className="top-[0%] left-[87%] md:top-[2%] md:left-[83%]"
        >
          <motion.img
            src={exampleImages[3].url}
            alt={exampleImages[3].title}
            className="w-40 h-36 sm:w-48 sm:h-44 md:w-60 md:h-52 lg:w-64 lg:h-56 object-cover hover:scale-105 duration-200 cursor-pointer transition-transform shadow-2xl rotate-[6deg] rounded-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1 }}
          />
        </FloatingElement>

        <FloatingElement
          depth={1}
          className="top-[78%] left-[83%] md:top-[68%] md:left-[83%]"
        >
          <motion.img
            src={exampleImages[4].url}
            alt={exampleImages[4].title}
            className="w-44 h-44 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 object-cover hover:scale-105 duration-200 cursor-pointer transition-transform shadow-2xl rotate-[19deg] rounded-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3 }}
          />
        </FloatingElement>
      </Floating>

      <div className="flex flex-col justify-center items-center w-[250px] sm:w-[300px] md:w-[500px] lg:w-[700px] z-50 pointer-events-auto">
        <motion.h1
          className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl text-center w-full justify-center items-center flex-col flex whitespace-pre leading-tight tracking-tight space-y-1 md:space-y-4 font-bold"
          animate={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.2, ease: "easeOut", delay: 0.3 }}
        >
          <span className="text-black dark:text-white">Explore the </span>
          <motion.span 
            layout 
            className="flex whitespace-pre text-[#22c55e] drop-shadow-[0_0_25px_rgba(34,197,94,0.5)]"
          >
            <motion.span
              layout
              className="flex whitespace-pre"
              transition={{ type: "spring", damping: 30, stiffness: 400 }}
            >
              world{" "}
            </motion.span>
            <TextRotate
              texts={[
                "fearlessly",
                "endlessly",
                "mindfully",
                "naturally",
                "joyfully",
                "freely",
                "boldly",
              ]}
              mainClassName="overflow-hidden pr-3 text-[#22c55e] drop-shadow-[0_0_25px_rgba(34,197,94,0.5)] py-0 pb-2 md:pb-4 rounded-xl"
              staggerDuration={0.03}
              staggerFrom="last"
              rotationInterval={3000}
              transition={{ type: "spring", damping: 30, stiffness: 400 }}
            />
          </motion.span>
        </motion.h1>
        <motion.p
          className="text-sm sm:text-lg md:text-xl lg:text-2xl text-center pt-4 sm:pt-8 md:pt-10 lg:pt-12 text-[#22c55e] drop-shadow-[0_0_15px_rgba(34,197,94,0.4)]"
          animate={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.2, ease: "easeOut", delay: 0.5 }}
        >
          Embark on unforgettable journeys and create lasting memories across the globe.
        </motion.p>

        <div className="flex flex-row justify-center space-x-4 items-center mt-10 sm:mt-16 md:mt-20 lg:mt-20">
          <motion.div
            animate={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{
              duration: 0.2,
              ease: "easeOut",
              delay: 0.7,
            }}
          >
            <Link
              to="/get-started"
              className="inline-flex items-center justify-center text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-[#22c55e] hover:bg-[#22c55e]/90 text-black h-10 px-4 py-2 rounded-md drop-shadow-[0_0_10px_rgba(34,197,94,0.3)]"
            >
              Get Started
            </Link>
          </motion.div>
          <motion.div
            animate={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{
              duration: 0.2,
              ease: "easeOut",
              delay: 0.7,
            }}
          >
            <Link
              to="/next-destinations"
              className="inline-flex items-center justify-center text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-[#22c55e]/30 bg-background hover:bg-[#22c55e]/10 text-[#22c55e] h-10 px-4 py-2 rounded-md drop-shadow-[0_0_10px_rgba(34,197,94,0.2)]"
            >
              Next Destinations
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export { Hero }
