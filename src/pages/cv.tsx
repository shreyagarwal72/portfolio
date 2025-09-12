import { Calendar, Mail, Phone, Github, Instagram, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";

const CV = () => {
  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4 animate-fade-in">
            Curriculum Vitae
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in delay-200">
            Creative Content Creator • Video Editor • Music Artist  
          </p>
        </div>

        {/* Info Card */}
        <div className="card-gradient rounded-2xl p-8 mb-12 space-y-6 animate-slide-up">
          <h2 className="text-2xl font-bold text-white">Personal Info</h2>
          <div className="grid sm:grid-cols-2 gap-6 text-muted-foreground">
            <div className="flex items-center gap-3">
              <Mail size={18} className="text-primary" />
              <span>sanjayvansu1973@gmail.com</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone size={18} className="text-primary" />
              <span>9412104618</span>
            </div>
            <div className="flex items-center gap-3">
              <Calendar size={18} className="text-primary" />
              <span>Class 11 • Science (PCM)</span>
            </div>
          </div>
        </div>

        {/* Objective */}
        <div className="card-gradient rounded-2xl p-8 mb-12 animate-slide-up delay-200">
          <h2 className="text-2xl font-bold text-white mb-4">Objective</h2>
          <p className="text-muted-foreground leading-relaxed">
            Creative and passionate content creator building unique projects in 
            <span className="text-primary"> music, gaming, and video editing</span>. 
            Dedicated to blending storytelling with visuals and sounds to engage audiences online.
          </p>
        </div>

        {/* Skills */}
        <div className="card-gradient rounded-2xl p-8 mb-12 animate-slide-up delay-300">
          <h2 className="text-2xl font-bold text-white mb-6">Skills</h2>
          <ul className="grid sm:grid-cols-2 gap-4 text-muted-foreground">
            <li>🎬 Video Editing (Shorts, Music Videos, Gaming Highlights)</li>
            <li>🎵 Music Production & Rap Writing</li>
            <li>🎭 Creative Direction & Storytelling</li>
            <li>🌐 Languages: English, Hindi</li>
            <li>🛠️ Tools: CapCut, Premiere Pro, Canva</li>
          </ul>
        </div>

        {/* Projects */}
        <div className="card-gradient rounded-2xl p-8 mb-12 animate-slide-up delay-400">
          <h2 className="text-2xl font-bold text-white mb-6">Projects</h2>
          <ul className="space-y-4 text-muted-foreground">
            <li>🔥 <b>Raat Ka Banda (2025)</b> – Original Song (Nextup Studio)</li>
            <li>🎮 Minecraft All-in-One Shorts – Gaming content for YouTube</li>
            <li>🦑 Squid Game Inspired Videos – Creative adaptations for Shorts</li>
            <li>✂️ Editing Projects – Custom video edits</li>
          </ul>
        </div>

        {/* Education */}
        <div className="card-gradient rounded-2xl p-8 mb-12 animate-slide-up delay-500">
          <h2 className="text-2xl font-bold text-white mb-4">Education</h2>
          <p className="text-muted-foreground">Class 11 Student (2025) • Stream: Science (PCM)</p>
        </div>

        {/* Social Links */}
        <div className="card-gradient rounded-2xl p-8 text-center animate-slide-up delay-600">
          <h2 className="text-2xl font-bold text-white mb-6">Find Me Online</h2>
          <div className="flex justify-center gap-6">
            <a href="https://github.com/shreyagarwal72" target="_blank" rel="noreferrer">
              <Button variant="ghost" className="hover:text-primary">
                <Github className="mr-2" /> GitHub
              </Button>
            </a>
            <a href="https://instagram.com/vanshu_ag_72" target="_blank" rel="noreferrer">
              <Button variant="ghost" className="hover:text-primary">
                <Instagram className="mr-2" /> Instagram
              </Button>
            </a>
            <a href="https://www.youtube.com/@nextupstudioyt" target="_blank" rel="noreferrer">
              <Button variant="ghost" className="hover:text-primary">
                <Youtube className="mr-2" /> YouTube
              </Button>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};

export default CV;