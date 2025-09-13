"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ExternalLink } from "lucide-react"

const categories = ["all", "commercial", "documentary", "social", "music"]

const projects = [
  {
    id: 1,
    title: "Fire Within (Full Song)",
    category: "music",
    year: "2025",
    client: "Nextup Studio",
    description:
      "Fire Within isn’t just music — it’s a storm of strength and resilience. From quiet struggles to powerful comebacks, this anthem is for everyone who has ever risen stronger from the ashes. 💥",
    thumbnail: "https://img.youtube.com/vi/_W0IXb5jjZs/hqdefault.jpg",
    duration: "3:50",
    views: "",
    link: "https://youtu.be/_W0IXb5jjZs",
  },
  {
    id: 2,
    title: "Documentary: Urban Stories",
    category: "documentary",
    year: "2023",
    client: "Independent Film",
    description:
      "Feature-length documentary exploring urban culture through personal narratives and cinematic storytelling.",
    thumbnail: "/placeholder-video-2.jpg",
    duration: "45:12",
    views: "108K",
  },
  {
    id: 3,
    title: "Social Media Content Series",
    category: "social",
    year: "2024",
    client: "Fashion Brand",
    description:
      "Weekly content series featuring dynamic editing, transitions, and brand-focused storytelling for Instagram and TikTok.",
    thumbnail: "/placeholder-video-3.jpg",
    duration: "0:30",
    views: "85.2K",
  },
  {
    id: 4,
    title: "Music Video Production",
    category: "music",
    year: "2023",
    client: "Rising Artist",
    description:
      "Creative music video with complex choreography, lighting design, and post-production visual effects.",
    thumbnail: "/placeholder-video-4.jpg",
    duration: "3:22",
    views: "156K",
  },
  {
    id: 5,
    title: "Event Highlight Reel",
    category: "commercial",
    year: "2024",
    client: "Event Management Co.",
    description:
      "High-energy event recap showcasing key moments, speakers, and attendee experiences through dynamic editing.",
    thumbnail: "/placeholder-video-5.jpg",
    duration: "4:15",
    views: "42.8K",
  },
  {
    id: 6,
    title: "Product Demo Series",
    category: "commercial",
    year: "2024",
    client: "Software Company",
    description:
      "Educational video series demonstrating software features with screen recordings and animated explanations.",
    thumbnail: "/placeholder-video-6.jpg",
    duration: "8:30",
    views: "73.1K",
  },
  {
    id: 7,
    title: "Raat Ka Banda",
    category: "music",
    year: "2025",
    client: "Nextup Studio",
    description:
      "A Nextup Studio Original – Raat Ka Banda captures late-night vibes with lo-fi beats, raw lyrics, and the grind of every sleepless soul.",
    thumbnail: "https://img.youtube.com/vi/xftcj39h-QY/hqdefault.jpg",
    duration: "3:28",
    views: "",
    link: "https://youtu.be/xftcj39h-QY",
  },
]

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState("all")

  const filteredProjects =
    selectedCategory === "all"
      ? projects
      : projects.filter((project) => project.category === selectedCategory)

  return (
    <section className="py-20 bg-black text-white min-h-screen">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Portfolio
        </motion.h2>

        {/* Categories */}
        <div className="flex justify-center mb-12 space-x-4">
          {categories.map((category) => (
            <button
              key={category}
              className={`px-6 py-2 rounded-full transition-colors ${
                selectedCategory === category
                  ? "bg-teal-500 text-black"
                  : "bg-gray-800 hover:bg-gray-700"
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: { staggerChildren: 0.15 },
            },
          }}
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              className="bg-gray-900 rounded-xl overflow-hidden shadow-lg group"
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="relative">
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-2 right-2 bg-black bg-opacity-70 text-xs px-2 py-1 rounded">
                  {project.duration}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <span>{project.year}</span>
                  <span>{project.client}</span>
                </div>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-teal-400 hover:text-teal-300 transition-colors"
                  >
                    <ExternalLink size={16} className="mr-2" />
                    View Project
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}