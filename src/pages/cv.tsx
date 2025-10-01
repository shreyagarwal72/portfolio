import { Calendar, Mail, Phone, Github, Instagram, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";

const CV = () => {
  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Hero Header */}
        <div className="text-center mb-20">
          <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 animate-fade-in">
            CURRICULUM <span className="bg-gradient-to-r from-primary via-primary/80 to-accent bg-clip-text text-transparent">VITAE</span>
          </h1>
          <p className="text-2xl text-muted-foreground max-w-4xl mx-auto animate-fade-in delay-200 leading-relaxed">
            Creative Content Creator • Video Editor • Music Artist • Gamer
          </p>
          <div className="mt-8 animate-fade-in delay-300">
            <div className="h-1 w-32 bg-gradient-to-r from-primary via-primary/50 to-transparent rounded-full mx-auto"></div>
          </div>
        </div>

        {/* Personal Info Card */}
        <div className="relative mb-16 animate-slide-up">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl blur-xl scale-105"></div>
          <div className="relative card-gradient rounded-2xl p-8 border border-border/50 backdrop-blur-sm hover:border-primary/30 transition-smooth">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center border border-primary/30">
                <Mail size={20} className="text-primary" />
              </div>
              <h2 className="text-3xl font-bold text-white">Personal Information</h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="space-y-2">
                <div className="flex items-center gap-3 p-4 bg-card/30 rounded-xl border border-border/30 backdrop-blur-sm hover:bg-card/50 transition-smooth">
                  <Mail size={20} className="text-primary" />
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wide">Email</p>
                    <p className="text-white font-medium">sanjayvansu1973@gmail.com</p>
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-3 p-4 bg-card/30 rounded-xl border border-border/30 backdrop-blur-sm hover:bg-card/50 transition-smooth">
                  <Phone size={20} className="text-primary" />
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wide">Phone</p>
                    <p className="text-white font-medium">9412104618</p>
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-3 p-4 bg-card/30 rounded-xl border border-border/30 backdrop-blur-sm hover:bg-card/50 transition-smooth">
                  <Calendar size={20} className="text-primary" />
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wide">Education</p>
                    <p className="text-white font-medium">Class 11 • Science (PCM)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Objective */}
        <div className="relative mb-16 animate-slide-up delay-200">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl blur-xl scale-105"></div>
          <div className="relative card-gradient rounded-2xl p-8 border border-border/50 backdrop-blur-sm hover:border-primary/30 transition-smooth hover:scale-[1.02]">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/70 rounded-full flex items-center justify-center shadow-glow">
                <span className="text-white font-bold text-lg">🎯</span>
              </div>
              <h2 className="text-3xl font-bold text-white">Objective</h2>
            </div>
            <div className="pl-15">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Creative and passionate content creator building unique projects in 
                <span className="text-primary font-semibold"> music, gaming, and video editing</span>. 
                Dedicated to blending storytelling with visuals and sounds to engage audiences online 
                and create meaningful connections through digital media.
              </p>
            </div>
          </div>
        </div>

        {/* Skills */}
        <div className="relative mb-16 animate-slide-up delay-300">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl blur-xl scale-105"></div>
          <div className="relative card-gradient rounded-2xl p-8 border border-border/50 backdrop-blur-sm hover:border-primary/30 transition-smooth">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/70 rounded-full flex items-center justify-center shadow-glow">
                <span className="text-white font-bold text-lg">⚡</span>
              </div>
              <h2 className="text-3xl font-bold text-white">Skills & Expertise</h2>
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="p-4 bg-card/30 rounded-xl border border-border/30 backdrop-blur-sm hover:bg-card/50 transition-smooth group">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-2xl">🎬</span>
                    <h3 className="text-white font-semibold group-hover:text-primary transition-smooth">Video Editing</h3>
                  </div>
                  <p className="text-muted-foreground text-sm">Shorts, Music Videos, Gaming Highlights</p>
                </div>
                <div className="p-4 bg-card/30 rounded-xl border border-border/30 backdrop-blur-sm hover:bg-card/50 transition-smooth group">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-2xl">🎵</span>
                    <h3 className="text-white font-semibold group-hover:text-primary transition-smooth">Music Production</h3>
                  </div>
                  <p className="text-muted-foreground text-sm">Rap Writing & Audio Production</p>
                </div>
                <div className="p-4 bg-card/30 rounded-xl border border-border/30 backdrop-blur-sm hover:bg-card/50 transition-smooth group">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-2xl">🎭</span>
                    <h3 className="text-white font-semibold group-hover:text-primary transition-smooth">Creative Direction</h3>
                  </div>
                  <p className="text-muted-foreground text-sm">Storytelling & Content Strategy</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="p-4 bg-card/30 rounded-xl border border-border/30 backdrop-blur-sm hover:bg-card/50 transition-smooth group">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-2xl">🌐</span>
                    <h3 className="text-white font-semibold group-hover:text-primary transition-smooth">Languages</h3>
                  </div>
                  <p className="text-muted-foreground text-sm">English, Hindi (Fluent)</p>
                </div>
                <div className="p-4 bg-card/30 rounded-xl border border-border/30 backdrop-blur-sm hover:bg-card/50 transition-smooth group">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-2xl">🛠️</span>
                    <h3 className="text-white font-semibold group-hover:text-primary transition-smooth">Tools & Software</h3>
                  </div>
                  <p className="text-muted-foreground text-sm">CapCut, Premiere Pro, Canva</p>
                </div>
                <div className="p-4 bg-card/30 rounded-xl border border-border/30 backdrop-blur-sm hover:bg-card/50 transition-smooth group">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-2xl">🎮</span>
                    <h3 className="text-white font-semibold group-hover:text-primary transition-smooth">Gaming</h3>
                  </div>
                  <p className="text-muted-foreground text-sm">Content Creation & Streaming</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Projects */}
        <div className="relative mb-16 animate-slide-up delay-400">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl blur-xl scale-105"></div>
          <div className="relative card-gradient rounded-2xl p-8 border border-border/50 backdrop-blur-sm hover:border-primary/30 transition-smooth">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/70 rounded-full flex items-center justify-center shadow-glow">
                <span className="text-white font-bold text-lg">🚀</span>
              </div>
              <h2 className="text-3xl font-bold text-white">Featured Projects</h2>
            </div>
            <div className="grid gap-6">
              <div className="p-6 bg-card/20 rounded-xl border border-border/30 backdrop-blur-sm hover:bg-card/40 transition-smooth group">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center shadow-lg">
                    <span className="text-white text-2xl">🔥</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-smooth">
                      Raat Ka Banda (2025)
                    </h3>
                    <p className="text-muted-foreground mb-2">Original Song • Nextup Studio</p>
                    <p className="text-sm text-muted-foreground">
                      A soulful original composition capturing late-night vibes with contemporary beats and meaningful lyrics.
                    </p>
                  </div>
                  <span className="px-3 py-1 bg-primary/20 text-primary text-xs font-medium rounded-full border border-primary/30">
                    Music
                  </span>
                </div>
              </div>
              
              <div className="p-6 bg-card/20 rounded-xl border border-border/30 backdrop-blur-sm hover:bg-card/40 transition-smooth group">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center shadow-lg">
                    <span className="text-white text-2xl">🎮</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-smooth">
                      Minecraft All-in-One Shorts
                    </h3>
                    <p className="text-muted-foreground mb-2">Gaming Content • YouTube</p>
                    <p className="text-sm text-muted-foreground">
                      Engaging gaming content featuring creative builds, tutorials, and entertainment for the gaming community.
                    </p>
                  </div>
                  <span className="px-3 py-1 bg-green-500/20 text-green-400 text-xs font-medium rounded-full border border-green-500/30">
                    Gaming
                  </span>
                </div>
              </div>
              
              <div className="p-6 bg-card/20 rounded-xl border border-border/30 backdrop-blur-sm hover:bg-card/40 transition-smooth group">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                    <span className="text-white text-2xl">🦑</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-smooth">
                      Squid Game Inspired Videos
                    </h3>
                    <p className="text-muted-foreground mb-2">Creative Content • Social Media</p>
                    <p className="text-sm text-muted-foreground">
                      Creative adaptations and parodies inspired by popular culture, showcasing storytelling skills.
                    </p>
                  </div>
                  <span className="px-3 py-1 bg-purple-500/20 text-purple-400 text-xs font-medium rounded-full border border-purple-500/30">
                    Content
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Education */}
        <div className="relative mb-16 animate-slide-up delay-500">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl blur-xl scale-105"></div>
          <div className="relative card-gradient rounded-2xl p-8 border border-border/50 backdrop-blur-sm hover:border-primary/30 transition-smooth hover:scale-[1.02]">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/70 rounded-full flex items-center justify-center shadow-glow">
                <span className="text-white font-bold text-lg">🎓</span>
              </div>
              <h2 className="text-3xl font-bold text-white">Education</h2>
            </div>
            <div className="p-6 bg-card/20 rounded-xl border border-border/30 backdrop-blur-sm">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-white">Higher Secondary Education</h3>
                <span className="px-3 py-1 bg-primary/20 text-primary text-sm font-medium rounded-full border border-primary/30">
                  Current
                </span>
              </div>
              <div className="space-y-2">
                <p className="text-muted-foreground">
                  <span className="text-white font-medium">Class:</span> 11th Grade (2025)
                </p>
                <p className="text-muted-foreground">
                  <span className="text-white font-medium">Stream:</span> Science - Physics, Chemistry, Mathematics (PCM)
                </p>
                <p className="text-muted-foreground">
                  <span className="text-white font-medium">Focus:</span> Balancing academics with creative pursuits in content creation
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="relative text-center animate-slide-up delay-600">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl blur-xl scale-105"></div>
          <div className="relative card-gradient rounded-2xl p-8 border border-border/50 backdrop-blur-sm hover:border-primary/30 transition-smooth">
            <div className="flex items-center justify-center gap-3 mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/70 rounded-full flex items-center justify-center shadow-glow">
                <span className="text-white font-bold text-lg">🌐</span>
              </div>
              <h2 className="text-3xl font-bold text-white">Connect With Me</h2>
            </div>
            <p className="text-muted-foreground mb-8 text-lg">
              Follow my creative journey and stay updated with my latest projects
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="https://github.com/shreyagarwal72" target="_blank" rel="noreferrer" className="group">
                <div className="flex items-center gap-3 px-6 py-4 bg-card/30 rounded-xl border border-border/30 backdrop-blur-sm hover:bg-card/50 transition-smooth hover:scale-105">
                  <Github size={24} className="text-muted-foreground group-hover:text-primary transition-smooth" />
                  <div className="text-left">
                    <p className="text-white font-medium group-hover:text-primary transition-smooth">GitHub</p>
                    <p className="text-xs text-muted-foreground">Code & Projects</p>
                  </div>
                </div>
              </a>
              
              <a href="https://instagram.com/vanshu_ag_72" target="_blank" rel="noreferrer" className="group">
                <div className="flex items-center gap-3 px-6 py-4 bg-card/30 rounded-xl border border-border/30 backdrop-blur-sm hover:bg-card/50 transition-smooth hover:scale-105">
                  <Instagram size={24} className="text-muted-foreground group-hover:text-pink-400 transition-smooth" />
                  <div className="text-left">
                    <p className="text-white font-medium group-hover:text-pink-400 transition-smooth">Instagram</p>
                    <p className="text-xs text-muted-foreground">Daily Updates</p>
                  </div>
                </div>
              </a>
              
              <a href="https://www.youtube.com/@nextupstudioyt" target="_blank" rel="noreferrer" className="group">
                <div className="flex items-center gap-3 px-6 py-4 bg-card/30 rounded-xl border border-border/30 backdrop-blur-sm hover:bg-card/50 transition-smooth hover:scale-105">
                  <Youtube size={24} className="text-muted-foreground group-hover:text-red-400 transition-smooth" />
                  <div className="text-left">
                    <p className="text-white font-medium group-hover:text-red-400 transition-smooth">YouTube</p>
                    <p className="text-xs text-muted-foreground">Video Content</p>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default CV;