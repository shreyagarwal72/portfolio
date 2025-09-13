"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ExternalLink } from "lucide-react"

const categories = ["all", "commercial", "gaming", "social", "music"]

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
    title: "Minecraft",
    category: "gaming",
    year: "2024",
    client: "Gaming Content",
    description:
      "Epic Minecraft gameplay featuring creative builds, adventures, and entertainment for the gaming community.",
    thumbnail: "https://img.youtube.com/vi/bHdg2IIQYK0/hqdefault.jpg",
    duration: "12:30",
    views: "25K",
    link: "https://youtu.be/bHdg2IIQYK0",
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
    <section className="py-20 bg-background text-foreground min-h-screen">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold mb-12 text-center hero-gradient bg-clip-text text-transparent"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Portfolio
        </motion.h2>

        {/* Categories */}
        <div className="flex flex-wrap justify-center mb-12 gap-4">
          {categories.map((category) => (
            <button
              key={category}
              className={`px-6 py-2 rounded-full transition-smooth ${
                selectedCategory === category
                  ? "bg-primary text-primary-foreground shadow-glow"
                  : "bg-card hover:bg-accent border border-border"
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
              className="bg-card rounded-xl overflow-hidden shadow-elegant group hover-scale card-gradient border border-border"
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 300 }}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-smooth group-hover:scale-110"
                />
                <div className="absolute top-2 right-2 bg-background/80 backdrop-blur-sm text-xs px-2 py-1 rounded border border-border">
                  {project.duration}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent opacity-0 group-hover:opacity-100 transition-smooth" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-foreground group-hover:text-primary transition-smooth">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>
                <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                  <span className="px-2 py-1 bg-accent rounded text-xs">{project.year}</span>
                  <span className="text-xs">{project.client}</span>
                </div>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-primary hover:text-primary/80 transition-smooth font-medium group/link"
                  >
                    <ExternalLink size={16} className="mr-2 transition-smooth group-hover/link:translate-x-1" />
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