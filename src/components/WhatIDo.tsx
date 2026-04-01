import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './WhatIDo.css';

gsap.registerPlugin(ScrollTrigger);

const smoothEase: [number, number, number, number] = [0.25, 0.4, 0.25, 1];

interface ServiceCard {
  number: string;
  title: string;
  description: string;
  tags: string[];
}

const services: ServiceCard[] = [
  {
    number: '01',
    title: 'VIDEO EDITING',
    description:
      'I craft cinematic stories from raw footage — color grading, motion graphics, sound design, and seamless transitions that keep audiences hooked.',
    tags: ['Premiere Pro', 'After Effects', 'DaVinci Resolve', 'Color Grading', 'Motion Graphics', 'Sound Design'],
  },
  {
    number: '02',
    title: 'MUSIC PRODUCTION',
    description:
      'From beats to full compositions — I produce original tracks, mix and master audio, and create soundscapes that elevate any project.',
    tags: ['FL Studio', 'Mixing', 'Mastering', 'Beat Making', 'Sound Design', 'Composition'],
  },
];

const WhatIDo = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!headingRef.current) return;

    const lines = headingRef.current.querySelectorAll('.split-line');
    gsap.fromTo(
      lines,
      { y: 80, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.12,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          once: true,
        },
      }
    );
  }, []);

  const toggleExpand = (index: number) => {
    setExpandedIndex(prev => (prev === index ? null : index));
  };

  return (
    <section ref={sectionRef} className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading with GSAP split-line reveal */}
        <div ref={headingRef} className="mb-12 md:mb-16">
          <div className="overflow-hidden">
            <p className="split-line text-sm md:text-base uppercase tracking-[0.2em] text-muted-foreground font-medium mb-2 opacity-0">
              Services
            </p>
          </div>
          <div className="overflow-hidden">
            <h2 className="split-line text-3xl md:text-5xl lg:text-6xl font-bold opacity-0">
              <span className="bg-gradient-to-r from-primary via-primary/80 to-primary-foreground bg-clip-text text-transparent">
                What I Do
              </span>
            </h2>
          </div>
        </div>

        {/* Cards */}
        <div className="what-i-do-grid">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className={`what-i-do-card ${expandedIndex === index ? 'expanded' : ''}`}
              onClick={() => toggleExpand(index)}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.8, delay: index * 0.15, ease: smoothEase }}
            >
              <span className="card-number">{service.number}</span>
              <h3 className="card-title">{service.title}</h3>

              <div className="card-description">
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-4">
                  {service.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {service.tags.map((tag, i) => (
                    <span key={i} className="skill-tag" style={{ opacity: 0 }}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatIDo;
