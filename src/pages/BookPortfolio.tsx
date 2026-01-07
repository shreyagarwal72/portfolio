"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Link } from "react-router-dom"
import "./BookPortfolio.css"

// Pages data with content
const pages = [
  {
    id: 0,
    title: "Cover",
    content: (
      <div className="book-cover">
        <div className="cover-decoration top-left"></div>
        <div className="cover-decoration top-right"></div>
        <div className="cover-decoration bottom-left"></div>
        <div className="cover-decoration bottom-right"></div>
        <h1 className="cover-title">
          <span className="title-line">VANSHU</span>
          <span className="title-line accent">AGARWAL</span>
        </h1>
        <div className="cover-divider"></div>
        <p className="cover-subtitle">Portfolio Book</p>
        <p className="cover-year">2025</p>
      </div>
    ),
  },
  {
    id: 1,
    title: "About Me",
    content: (
      <div className="book-page-content">
        <h2 className="page-title">About Me</h2>
        <div className="page-divider"></div>
        <p className="page-text">
          I'm <strong>Vanshu Agarwal</strong>, a creative video editor, passionate gamer, and musician from Agra, Uttar Pradesh, India.
        </p>
        <p className="page-text">
          Currently pursuing my education as a <strong>Class 11 PCM Science student</strong>, I balance academics with my passion for digital content creation.
        </p>
        <div className="page-highlight">
          <span className="highlight-icon">🎬</span>
          <span>Video Editor</span>
        </div>
        <div className="page-highlight">
          <span className="highlight-icon">🎮</span>
          <span>Gamer</span>
        </div>
        <div className="page-highlight">
          <span className="highlight-icon">🎵</span>
          <span>Musician</span>
        </div>
      </div>
    ),
  },
  {
    id: 2,
    title: "Skills",
    content: (
      <div className="book-page-content">
        <h2 className="page-title">My Skills</h2>
        <div className="page-divider"></div>
        <div className="skills-grid">
          <div className="skill-item">
            <div className="skill-bar" style={{ width: "90%" }}></div>
            <span>Video Editing</span>
          </div>
          <div className="skill-item">
            <div className="skill-bar" style={{ width: "85%" }}></div>
            <span>Music Production</span>
          </div>
          <div className="skill-item">
            <div className="skill-bar" style={{ width: "80%" }}></div>
            <span>Web Development</span>
          </div>
          <div className="skill-item">
            <div className="skill-bar" style={{ width: "95%" }}></div>
            <span>Gaming</span>
          </div>
          <div className="skill-item">
            <div className="skill-bar" style={{ width: "75%" }}></div>
            <span>Graphic Design</span>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 3,
    title: "Projects",
    content: (
      <div className="book-page-content">
        <h2 className="page-title">Featured Projects</h2>
        <div className="page-divider"></div>
        <div className="projects-list">
          <div className="project-item">
            <h3>Orbital World</h3>
            <p>Solar system exploration website</p>
          </div>
          <div className="project-item">
            <h3>NextUp Studio</h3>
            <p>Professional creative portfolio</p>
          </div>
          <div className="project-item">
            <h3>My Webtools Suite</h3>
            <p>Web utilities collection</p>
          </div>
          <div className="project-item">
            <h3>Minecraft Site</h3>
            <p>Gaming content showcase</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 4,
    title: "Contact",
    content: (
      <div className="book-page-content">
        <h2 className="page-title">Get In Touch</h2>
        <div className="page-divider"></div>
        <div className="contact-info">
          <div className="contact-item">
            <span className="contact-icon">📧</span>
            <span>sanjayvansu1973@gmail.com</span>
          </div>
          <div className="contact-item">
            <span className="contact-icon">📱</span>
            <span>+91 9412104618</span>
          </div>
          <div className="contact-item">
            <span className="contact-icon">📍</span>
            <span>Agra, Uttar Pradesh, India</span>
          </div>
        </div>
        <div className="social-links">
          <a href="https://github.com/shreyagarwal72" target="_blank" rel="noopener noreferrer" className="social-link">GitHub</a>
          <a href="https://instagram.com/vanshu_ag_72" target="_blank" rel="noopener noreferrer" className="social-link">Instagram</a>
          <a href="https://youtube.com/@nextupstudioyt" target="_blank" rel="noopener noreferrer" className="social-link">YouTube</a>
        </div>
      </div>
    ),
  },
]

const BookPortfolio = () => {
  const [currentPage, setCurrentPage] = useState(0)
  const [isFlipping, setIsFlipping] = useState(false)
  const [flipDirection, setFlipDirection] = useState<"next" | "prev">("next")

  useEffect(() => {
    document.title = "Book Portfolio - Vanshu Agarwal | Creative Journey"
    
    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Explore Vanshu Agarwal\'s interactive book portfolio showcasing skills, projects, and creative journey in video editing, gaming, and music production.')
    }

    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Book Portfolio - Vanshu Agarwal",
      "description": "Interactive book portfolio showcasing creative work and skills",
      "author": {
        "@type": "Person",
        "name": "Vanshu Agarwal"
      }
    })
    document.head.appendChild(script)

    return () => {
      const existingScript = document.querySelector('script[type="application/ld+json"]')
      if (existingScript) {
        document.head.removeChild(existingScript)
      }
    }
  }, [])

  const flipPage = (direction: "next" | "prev") => {
    if (isFlipping) return
    
    if (direction === "next" && currentPage < pages.length - 1) {
      setFlipDirection("next")
      setIsFlipping(true)
      setTimeout(() => {
        setCurrentPage(prev => prev + 1)
        setIsFlipping(false)
      }, 600)
    } else if (direction === "prev" && currentPage > 0) {
      setFlipDirection("prev")
      setIsFlipping(true)
      setTimeout(() => {
        setCurrentPage(prev => prev - 1)
        setIsFlipping(false)
      }, 600)
    }
  }

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "ArrowRight") flipPage("next")
    if (e.key === "ArrowLeft") flipPage("prev")
  }

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [currentPage, isFlipping])

  return (
    <main className="book-portfolio-page">
      <div className="book-container">
        <div className="book">
          {/* Book binding */}
          <div className="book-spine"></div>
          
          {/* Current page */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentPage}
              className={`book-page ${isFlipping ? `flipping-${flipDirection}` : ""}`}
              initial={{ rotateY: flipDirection === "next" ? 90 : -90 }}
              animate={{ rotateY: 0 }}
              exit={{ rotateY: flipDirection === "next" ? -90 : 90 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            >
              <div className="page-front">
                {pages[currentPage].content}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Page number */}
          <div className="page-number">
            {currentPage + 1} / {pages.length}
          </div>
        </div>

        {/* Navigation */}
        <div className="book-navigation">
          <button 
            className="nav-button prev"
            onClick={() => flipPage("prev")}
            disabled={currentPage === 0 || isFlipping}
            aria-label="Previous page"
          >
            ← Previous
          </button>
          <div className="page-dots">
            {pages.map((_, index) => (
              <span
                key={index}
                className={`dot ${index === currentPage ? "active" : ""}`}
                onClick={() => {
                  if (!isFlipping && index !== currentPage) {
                    setFlipDirection(index > currentPage ? "next" : "prev")
                    setIsFlipping(true)
                    setTimeout(() => {
                      setCurrentPage(index)
                      setIsFlipping(false)
                    }, 600)
                  }
                }}
              />
            ))}
          </div>
          <button 
            className="nav-button next"
            onClick={() => flipPage("next")}
            disabled={currentPage === pages.length - 1 || isFlipping}
            aria-label="Next page"
          >
            Next →
          </button>
        </div>

        {/* Back to home link */}
        <Link to="/" className="back-to-home">
          ← Back to Home
        </Link>
      </div>
    </main>
  )
}

export default BookPortfolio