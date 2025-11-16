"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { ExternalLink } from "lucide-react"

import previewWebsite from "@/assets/preview-og.jpg"
import previewYoutubeSite from "@/assets/preview-youtube-site.jpg"
import previewWebtoolsSuite from "@/assets/preview-webtools-suite.jpg"
import previewToolsSite from "@/assets/preview-tools-site.jpg"
import previewMinecraftSite from "@/assets/preview-minecraft-site.jpg"
import certificateGreenhat from "@/assets/certificate-greenhat.jpg"
import certificateAmarujala from "@/assets/certificate-amarujala.jpg"
import { Card, CardContent } from "@/components/ui/card"

// SEO Hook
const useSEO = () => {
  useEffect(() => {
    // Set page title for SEO
    document.title = 'Portfolio - Vanshu Agarwal | Video Editing Projects & Creative Work';
    
    // Add meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Explore Vanshu Agarwal\'s creative portfolio featuring web development projects, video editing work, and innovative digital content. View Minecraft sites, YouTube platforms, and custom web tools.');
    }
    
    // Add structured data
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "name": "Vanshu Agarwal Portfolio",
      "description": "Creative portfolio showcasing web development, video editing, and digital content projects",
      "creator": {
        "@type": "Person",
        "name": "Vanshu Agarwal",
        "jobTitle": "Video Editor, Content Creator, Web Developer"
      }
    });
    document.head.appendChild(script);
    
    return () => {
      const existingScript = document.querySelector('script[type="application/ld+json"]');
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
    };
  }, []);
};

const categories = ["all", "web development", "tools", "portfolio"]

const projects = [
  {
    id: 1,
    title: "My Website",
    category: "portfolio",
    year: "2024",
    client: "NextUp Studio",
    description:
      "Official NextUp Studio website - A professional creative portfolio showcasing services, projects, and studio brand with modern design.",
    thumbnail: previewWebsite,
    duration: "Live",
    views: "",
    link: "https://nextup-studio.vercel.app/",
  },
  {
    id: 2,
    title: "My YouTube Site",
    category: "web development",
    year: "2025",
    client: "Nextup Studio",
    description:
      "A modern YouTube-style platform featuring video content, channel statistics, and seamless integration with YouTube API for real-time data.",
    thumbnail: previewYoutubeSite,
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
    thumbnail: previewWebtoolsSuite,
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
    thumbnail: previewToolsSite,
    duration: "Interactive",
    views: "",
    link: "https://nextuptool.vercel.app/",
  },
  {
    id: 5,
    title: "My Minecraft Site",
    category: "web development",
    year: "2024",
    client: "Personal Project",
    description:
      "A comprehensive Minecraft-themed website showcasing creative builds, gaming content, and immersive experiences with interactive elements.",
    thumbnail: previewMinecraftSite,
    duration: "Interactive",
    views: "",
    link: "https://nextup-hub-mc.vercel.app/",
  },
]

export default function Portfolio() {
  useSEO(); // Add SEO metadata
  const [selectedCategory, setSelectedCategory] = useState("all")

  useEffect(() => {
    // Set page title for SEO
    document.title = 'Creative Portfolio - Vanshu Agarwal | Video Editing & Music Projects';
    
    // Add structured data for portfolio
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "CreativeWork",
      "name": "Vanshu Agarwal Portfolio",
      "description": "Collection of creative projects including music production, video editing, and gaming content",
      "creator": {
        "@type": "Person",
        "name": "Vanshu Agarwal"
      },
      "about": ["Video Editing", "Music Production", "Gaming Content", "Minecraft Projects"]
    });
    document.head.appendChild(script);
    return () => {
      document.head.removeChild(script);
    };
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

        {/* Achievements Section */}
        <section aria-label="Achievements and Certificates" className="mb-20">
          <motion.h2
            className="text-4xl font-bold text-white mb-10 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <span className="bg-gradient-to-r from-primary via-primary/80 to-accent bg-clip-text text-transparent">
              Achievements
            </span>
          </motion.h2>
          
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {/* Green Hat Hacker Certificate */}
            <motion.div
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <Card className="overflow-hidden border-primary/30 bg-card/50 backdrop-blur-sm hover:shadow-glow transition-smooth">
                <CardContent className="p-0">
                  <div className="relative aspect-[4/3]">
                    <img
                      src={certificateGreenhat}
                      alt="Green Hat Hacker Certificate - Vanshu Agarwal achieved certification demonstrating creative problem-solving and ethical security practices"
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-2">Green Hat Hacker Certification</h3>
                    <p className="text-muted-foreground text-sm">
                      Successfully achieved Green Hat Hacker certification, demonstrating creative problem-solving and ethical security practices.
                    </p>
                    <time className="text-xs text-primary mt-2 block">August 2025</time>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Amar Ujala Certificate */}
            <motion.div
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <Card className="overflow-hidden border-primary/30 bg-card/50 backdrop-blur-sm hover:shadow-glow transition-smooth">
                <CardContent className="p-0">
                  <div className="relative aspect-[4/3]">
                    <img
                      src={certificateAmarujala}
                      alt="Amar Ujala Certificate - Recognition for outstanding academic performance in Class 10th"
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-2">Academic Excellence Award</h3>
                    <p className="text-muted-foreground text-sm">
                      Honored by Amar Ujala for exceptional academic performance and outstanding marks in Class 10th examinations.
                    </p>
                    <time className="text-xs text-primary mt-2 block">May 2025</time>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </section>

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
                className="group relative overflow-hidden rounded-2xl card-3d"
                whileHover={{ y: -12 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 },
                }}
                style={{
                  transformStyle: 'preserve-3d',
                }}
              >
                {/* Glow Effect */}
                <div className="absolute -inset-1 bg-gradient-to-br from-primary/20 via-primary-glow/10 to-transparent rounded-2xl blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-500" aria-hidden="true" />
                
                {/* Main Card */}
                <div className="relative card-gradient rounded-2xl border border-border/50 backdrop-blur-sm overflow-hidden hover-glow card-3d-content">
                  
                  {/* Thumbnail with 3D effect */}
                  <div className="relative overflow-hidden aspect-video">
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10 opacity-60" />
                    <img
                      src={project.thumbnail}
                      alt={`${project.title} - ${project.description.substring(0, 50)}...`}
                      className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-1"
                      loading="lazy"
                      style={{ 
                        transform: 'translateZ(0)',
                        backfaceVisibility: 'hidden'
                      }}
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
                          <ExternalLink size={24} className="text-white" />
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
