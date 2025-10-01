"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { ExternalLink } from "lucide-react"

import previewMinecraft from "@/assets/preview-minecraft.jpg"
import previewYoutube from "@/assets/preview-youtube.jpg"
import previewWebtools from "@/assets/preview-webtools.jpg"
import previewTools from "@/assets/preview-tools.jpg"
import previewOG from "@/assets/preview-og.jpg"

const categories = ["all", "web development", "tools", "portfolio"]

const projects = [
  {
    id: 1,
    title: "My Minecraft Site",
    category: "web development",
    year: "2024",
    client: "Personal Project",
    description:
      "A comprehensive Minecraft-themed website showcasing creative builds, gaming content, and immersive experiences with interactive elements.",
    thumbnail: previewMinecraft,
    duration: "Interactive",
    views: "",
    link: "https://shreyagarwal72.github.io/Nextup-Studio/",
  },
  {
    id: 2,
    title: "My YouTube Site",
    category: "web development",
    year: "2025",
    client: "Nextup Studio",
    description:
      "A modern YouTube-style platform featuring video content, channel statistics, and seamless integration with YouTube API for real-time data.",
    thumbnail: previewYoutube,
    duration: "Live",
    views: "",
    link: "https://myyoutube-cyan.vercel.app/",
  },
  {
    id: 3,
    title: "My Webtools Suite",
    category: "tools",
    year: "2025",
    client: "Personal Project",
    description:
      "A comprehensive suite of web utilities and tools designed to enhance productivity and streamline digital workflows with modern UI.",
    thumbnail: previewWebtools,
    duration: "Interactive",
    views: "",
    link: "https://nextuptool2.vercel.app/",
  },
  {
    id: 4,
    title: "My Tools Site",
    category: "tools",
    year: "2024",
    client: "Personal Project",
    description:
      "A collection of useful developer tools and utilities featuring clean design, intuitive interface, and powerful functionality for everyday tasks.",
    thumbnail: previewTools,
    duration: "Interactive",
    views: "",
    link: "https://nextuptool.vercel.app/",
  },
  {
    id: 5,
    title: "My OG Website",
    category: "portfolio",
    year: "2024",
    client: "Personal Brand",
    description:
      "The original portfolio website showcasing my creative journey, projects, and skills with elegant design and smooth user experience.",
    thumbnail: previewOG,
    duration: "Live",
    views: "",
    link: "https://shreyagarwal72.github.io/home.html",
  },
]

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState("all")

  useEffect(() => {
    // Set page title for SEO
    document.title = 'Creative Portfolio - Vanshu Agarwal | Video Editing & Music Projects';
  }, []);

  const filteredProjects =
    selectedCategory === "all"
      ? projects
      : projects.filter((project) => project.category === selectedCategory)

  return (
    <main className="min-h-screen pt-20 pb-16" role="main">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Hero Section */}
        <header className="text-center mb-20">
          <motion.h1
            className="text-5xl lg:text-7xl font-bold text-white mb-6 animate-fade-in"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            MY <span className="bg-gradient-to-r from-primary via-primary/80 to-accent bg-clip-text text-transparent">PORTFOLIO</span>
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
        </header>

        {/* Categories */}
        <nav aria-label="Portfolio category filter">
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
                aria-pressed={selectedCategory === category}
                aria-label={`Filter projects by ${category} category`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </motion.button>
            ))}
          </motion.div>
        </nav>

        {/* Projects Grid */}
        <section aria-label="Portfolio projects">
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
              <motion.article
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
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl blur-xl scale-105 opacity-0 group-hover:opacity-100 transition-smooth" aria-hidden="true" />
                
                {/* Main Card */}
                <div className="relative card-gradient rounded-2xl border border-border/50 backdrop-blur-sm overflow-hidden transition-smooth group-hover:border-primary/30 group-hover:shadow-2xl">
                  
                  {/* Thumbnail */}
                  <div className="relative overflow-hidden aspect-video">
                    <img
                      src={project.thumbnail}
                      alt={`${project.title} - ${project.description.substring(0, 50)}...`}
                      className="w-full h-full object-cover transition-smooth group-hover:scale-110"
                      loading="lazy"
                      width="400"
                      height="225"
                    />
                    
                     {/* Duration Badge */}
                    <div className="absolute top-3 right-3 bg-black/80 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full border border-white/20">
                      {project.duration}
                    </div>
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-smooth" aria-hidden="true" />
                    
                    {/* Play Button */}
                    {project.link && (
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-smooth">
                        <div className="w-16 h-16 bg-primary/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-2xl" aria-hidden="true">
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
                      <time className="text-muted-foreground text-xs">{project.year}</time>
                    </div>
                    
                    <h2 className="text-xl font-bold text-white group-hover:text-primary transition-smooth">
                      {project.title}
                    </h2>
                    
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
                          aria-label={`View ${project.title} project`}
                        >
                          View Project
                          <ExternalLink size={14} className="ml-1 transition-smooth group-hover/link:translate-x-1" aria-hidden="true" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </section>
      </div>
    </main>
  )
}