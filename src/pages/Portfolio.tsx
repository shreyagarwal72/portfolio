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
    <div className="min-h-screen pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Hero Section */}
        <div className="text-center mb-20">
          <motion.h1
            className="text-5xl lg:text-7xl font-bold text-white mb-6 animate-fade-in"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            MY <span className="bg-gradient-to-r from-primary via-primary/80 to-accent bg-clip-text text-transparent glow-effect">PORTFOLIO</span>
          </motion.h1>
          <motion.p
            className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-fade-in delay-200"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Explore my creative journey through video editing, music production, and gaming content. 
            Each project represents passion, creativity, and dedication to storytelling.
          </motion.p>
        </div>

        {/* Categories */}
        <motion.div 
          className="flex flex-wrap justify-center mb-16 gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {categories.map((category, index) => (
            <motion.button
              key={category}
              className={`px-8 py-3 rounded-full font-medium transition-smooth ${
                selectedCategory === category
                  ? "card-gradient text-white shadow-glow border border-primary/30"
                  : "bg-card/50 backdrop-blur-sm text-muted-foreground hover:text-white hover:bg-card border border-border hover:border-primary/30"
              }`}
              onClick={() => setSelectedCategory(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 * index }}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: { staggerChildren: 0.1 },
            },
          }}
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className="group relative overflow-hidden rounded-2xl animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl blur-xl scale-105 opacity-0 group-hover:opacity-100 transition-smooth" />
              
              {/* Main Card */}
              <div className="relative card-gradient rounded-2xl border border-border/50 backdrop-blur-sm overflow-hidden transition-smooth group-hover:border-primary/30 group-hover:shadow-2xl">
                
                {/* Thumbnail */}
                <div className="relative overflow-hidden aspect-video">
                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    className="w-full h-full object-cover transition-smooth group-hover:scale-110"
                    loading="lazy"
                  />
                  
                  {/* Duration Badge */}
                  <div className="absolute top-3 right-3 bg-black/80 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full border border-white/20">
                    {project.duration}
                  </div>
                  
                  {/* Views Badge */}
                  {project.views && (
                    <div className="absolute top-3 left-3 bg-primary/90 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full">
                      {project.views} views
                    </div>
                  )}
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-smooth" />
                  
                  {/* Play Button */}
                  {project.link && (
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-smooth">
                      <div className="w-16 h-16 bg-primary/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-2xl">
                        <ExternalLink size={24} className="text-white ml-1" />
                      </div>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 bg-primary/20 text-primary text-xs font-medium rounded-full border border-primary/30">
                      {project.category.charAt(0).toUpperCase() + project.category.slice(1)}
                    </span>
                    <span className="text-muted-foreground text-xs">{project.year}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white group-hover:text-primary transition-smooth">
                    {project.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2">
                    {project.description}
                  </p>
                  
                  <div className="flex items-center justify-between pt-2">
                    <span className="text-primary text-xs font-medium">{project.client}</span>
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-primary hover:text-white transition-smooth font-medium text-sm group/link"
                      >
                        View Project
                        <ExternalLink size={14} className="ml-1 transition-smooth group-hover/link:translate-x-1" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}