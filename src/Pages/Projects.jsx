import React, { useEffect, useState, useRef } from "react";
import { ExternalLink, Github, Sparkles, FileText, Pencil, Sparkle, Telescope, Moon, Star, ChevronLeft, ChevronRight, Eye, Cpu, Zap } from "lucide-react";
import Lottie from "lottie-react";
import AOS from "aos";
import "aos/dist/aos.css";
import codingAnimation from "../assets/coding-animation.json";

// 3D Isometric Laptop Animation for Resume Builder
const ResumeBuilderAnimation = () => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className="relative w-full h-full flex items-center justify-center perspective-1000"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Grid background */}
      <div className="absolute inset-0 grid-background opacity-30"></div>
      
      {/* Glow effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-pink-600/20 to-blue-600/20 blur-3xl animate-pulse-slow"></div>
      
      {/* 3D Laptop */}
      <div className={`relative transition-all duration-700 ${isHovered ? 'scale-110' : 'scale-100'}`} style={{ transformStyle: 'preserve-3d' }}>
        {/* Laptop Base */}
        <div className="relative w-56 h-40" style={{ transform: 'rotateX(15deg) rotateY(-20deg)' }}>
          {/* Screen */}
          <div className="relative w-full h-32 bg-gradient-to-br from-gray-900 to-gray-800 rounded-t-lg border-4 border-purple-500/50 shadow-[0_0_30px_rgba(168,85,247,0.6)] overflow-hidden">
            {/* Screen content - Resume Interface */}
            <div className="absolute inset-2 bg-gray-900 rounded flex flex-col gap-1 p-2 text-[6px]">
              {/* Header */}
              <div className="flex items-center gap-1 pb-1 border-b border-purple-500/30">
                <FileText className="w-3 h-3 text-purple-400" />
                <div className="w-8 h-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded"></div>
              </div>
              {/* Content lines */}
              <div className="space-y-0.5">
                <div className="w-12 h-1 bg-purple-400/60 rounded"></div>
                <div className="w-10 h-1 bg-pink-400/50 rounded"></div>
                <div className="w-14 h-1 bg-blue-400/50 rounded"></div>
                <div className="flex gap-0.5">
                  <div className="w-5 h-1 bg-purple-400/40 rounded"></div>
                  <div className="w-5 h-1 bg-pink-400/40 rounded"></div>
                </div>
                <div className="w-11 h-1 bg-blue-400/40 rounded"></div>
              </div>
              {/* AI Badge */}
              <div className="absolute bottom-1 right-1 px-1.5 py-0.5 bg-gradient-to-r from-purple-600/80 to-pink-600/80 rounded-full">
                <Sparkle className="w-2 h-2 text-white" />
              </div>
            </div>
            {/* Screen glow */}
            <div className="absolute inset-0 bg-gradient-to-t from-purple-500/20 via-transparent to-transparent"></div>
          </div>
          
          {/* Keyboard/Base */}
          <div className="absolute top-32 w-full h-8 bg-gradient-to-br from-gray-800 to-gray-900 rounded-b-lg border-2 border-purple-500/30 shadow-lg">
            <div className="absolute inset-1 grid grid-cols-8 gap-0.5 p-1">
              {[...Array(16)].map((_, i) => (
                <div key={i} className="w-full h-0.5 bg-purple-400/20 rounded-sm"></div>
              ))}
            </div>
          </div>
          
          {/* Coffee cup accessory */}
          <div className="absolute -left-8 top-16 w-6 h-8 bg-gradient-to-br from-purple-600/80 to-pink-600/80 rounded-lg shadow-[0_0_15px_rgba(168,85,247,0.5)] flex items-center justify-center">
            <div className="w-4 h-5 bg-purple-700/60 rounded"></div>
          </div>
          
          {/* Floating sparkles */}
          <Sparkle 
            className="absolute -top-4 -right-4 w-4 h-4 text-pink-400 animate-float-1" 
          />
          <Sparkle 
            className="absolute -bottom-2 -left-6 w-3 h-3 text-blue-400 animate-float-2" 
          />
        </div>
      </div>
      
      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .grid-background {
          background-image: 
            linear-gradient(rgba(99, 102, 241, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(99, 102, 241, 0.1) 1px, transparent 1px);
          background-size: 20px 20px;
        }
        @keyframes float-1 {
          0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0.7; }
          50% { transform: translateY(-15px) rotate(180deg); opacity: 1; }
        }
        @keyframes float-2 {
          0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0.6; }
          50% { transform: translateY(-10px) rotate(-180deg); opacity: 1; }
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.6; }
        }
        .animate-float-1 {
          animation: float-1 3s ease-in-out infinite;
        }
        .animate-float-2 {
          animation: float-2 3.5s ease-in-out infinite;
        }
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

// 3D Isometric Laptop Animation for AstroTrack
const AstroTrackAnimation = () => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className="relative w-full h-full flex items-center justify-center perspective-1000"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Grid background */}
      <div className="absolute inset-0 grid-background opacity-30"></div>
      
      {/* Space stars */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              opacity: Math.random() * 0.5 + 0.2
            }}
          />
        ))}
      </div>
      
      {/* Glow effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/20 via-blue-600/20 to-cyan-600/20 blur-3xl animate-pulse-slow"></div>
      
      {/* 3D Laptop */}
      <div className={`relative transition-all duration-700 ${isHovered ? 'scale-110' : 'scale-100'}`} style={{ transformStyle: 'preserve-3d' }}>
        {/* Laptop Base */}
        <div className="relative w-56 h-40" style={{ transform: 'rotateX(15deg) rotateY(-20deg)' }}>
          {/* Screen */}
          <div className="relative w-full h-32 bg-gradient-to-br from-gray-900 to-gray-800 rounded-t-lg border-4 border-indigo-500/50 shadow-[0_0_30px_rgba(99,102,241,0.6)] overflow-hidden">
            {/* Screen content - AstroTrack Interface */}
            <div className="absolute inset-2 bg-gray-900 rounded flex flex-col gap-1 p-2 text-[6px]">
              {/* Header with telescope icon */}
              <div className="flex items-center gap-1 pb-1 border-b border-indigo-500/30">
                <Telescope className="w-3 h-3 text-indigo-400" />
                <div className="w-8 h-1 bg-gradient-to-r from-indigo-400 to-cyan-400 rounded"></div>
              </div>
              
              {/* Orbital display */}
              <div className="flex-1 flex items-center justify-center relative">
                {/* Central planet */}
                <div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full shadow-[0_0_10px_rgba(59,130,246,0.8)]">
                  <div className="absolute inset-0 rounded-full border border-cyan-400/50"></div>
                </div>
                
                {/* Orbit ring */}
                <div className="absolute inset-0 border border-dashed border-indigo-400/30 rounded-full animate-spin-slow"></div>
                
                {/* Satellite */}
                <Star className="absolute top-2 right-2 w-2 h-2 text-yellow-400 fill-yellow-400 animate-pulse" />
                <Moon className="absolute bottom-3 left-3 w-2 h-2 text-blue-300" />
              </div>
              
              {/* Data lines */}
              <div className="space-y-0.5">
                <div className="flex gap-0.5">
                  <div className="w-4 h-1 bg-indigo-400/60 rounded"></div>
                  <div className="w-3 h-1 bg-cyan-400/50 rounded"></div>
                </div>
              </div>
              
              {/* Live badge */}
              <div className="absolute top-1 right-1 px-1.5 py-0.5 bg-gradient-to-r from-indigo-600/80 to-blue-600/80 rounded-full flex items-center gap-0.5">
                <div className="w-1 h-1 bg-green-400 rounded-full animate-pulse"></div>
              </div>
            </div>
            {/* Screen glow */}
            <div className="absolute inset-0 bg-gradient-to-t from-indigo-500/20 via-transparent to-transparent"></div>
          </div>
          
          {/* Keyboard/Base */}
          <div className="absolute top-32 w-full h-8 bg-gradient-to-br from-gray-800 to-gray-900 rounded-b-lg border-2 border-indigo-500/30 shadow-lg">
            <div className="absolute inset-1 grid grid-cols-8 gap-0.5 p-1">
              {[...Array(16)].map((_, i) => (
                <div key={i} className="w-full h-0.5 bg-indigo-400/20 rounded-sm"></div>
              ))}
            </div>
          </div>
          
          {/* Coffee cup accessory */}
          <div className="absolute -left-8 top-16 w-6 h-8 bg-gradient-to-br from-indigo-600/80 to-cyan-600/80 rounded-lg shadow-[0_0_15px_rgba(99,102,241,0.5)] flex items-center justify-center">
            <div className="w-4 h-5 bg-indigo-700/60 rounded"></div>
          </div>
          
          {/* Floating elements */}
          <Moon 
            className="absolute -top-4 -right-4 w-4 h-4 text-blue-300 animate-float-1" 
          />
          <Star 
            className="absolute -bottom-2 -left-6 w-3 h-3 text-yellow-400 fill-yellow-400 animate-float-2" 
          />
        </div>
      </div>
      
      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .grid-background {
          background-image: 
            linear-gradient(rgba(99, 102, 241, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(99, 102, 241, 0.1) 1px, transparent 1px);
          background-size: 20px 20px;
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes float-1 {
          0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0.7; }
          50% { transform: translateY(-15px) rotate(180deg); opacity: 1; }
        }
        @keyframes float-2 {
          0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0.6; }
          50% { transform: translateY(-10px) rotate(-180deg); opacity: 1; }
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.6; }
        }
        .animate-spin-slow {
          animation: spin-slow 10s linear infinite;
        }
        .animate-float-1 {
          animation: float-1 3s ease-in-out infinite;
        }
        .animate-float-2 {
          animation: float-2 3.5s ease-in-out infinite;
        }
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

// Real-Time Multimodal AI Vision System Animation
const VisionAIAnimation = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [scanLine, setScanLine] = useState(0);
  const [detections, setDetections] = useState([]);
  const intervalRef = useRef(null);

  const sampleDetections = [
    { label: "Person", conf: 97, x: 15, y: 20, w: 30, h: 45, color: "#6366f1" },
    { label: "Car",    conf: 92, x: 55, y: 40, w: 35, h: 30, color: "#10b981" },
    { label: "Object", conf: 85, x: 5,  y: 55, w: 20, h: 20, color: "#f59e0b" },
  ];

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setScanLine(prev => (prev + 2) % 100);
    }, 40);
    setTimeout(() => setDetections(sampleDetections), 800);
    return () => clearInterval(intervalRef.current);
  }, []);

  return (
    <div
      className="relative w-full h-full flex items-center justify-center"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/20 via-cyan-600/20 to-indigo-600/20 blur-3xl animate-pulse-slow"></div>

      {/* Camera feed frame */}
      <div
        className={`relative transition-all duration-700 ${isHovered ? "scale-110" : "scale-100"}`}
        style={{ width: 220, height: 160 }}
      >
        {/* Main screen */}
        <div className="w-full h-full bg-gray-950 rounded-xl border-2 border-emerald-500/60 shadow-[0_0_30px_rgba(16,185,129,0.5)] overflow-hidden">

          {/* Grid overlay */}
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage:
                "linear-gradient(rgba(16,185,129,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(16,185,129,0.4) 1px, transparent 1px)",
              backgroundSize: "20px 20px",
            }}
          />

          {/* Scan line */}
          <div
            className="absolute left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-emerald-400 to-transparent opacity-70 transition-none"
            style={{ top: `${scanLine}%` }}
          />

          {/* Detection boxes */}
          {detections.map((d, i) => (
            <div
              key={i}
              className="absolute border-2 rounded-sm transition-all duration-500"
              style={{
                left: `${d.x}%`, top: `${d.y}%`,
                width: `${d.w}%`, height: `${d.h}%`,
                borderColor: d.color,
                boxShadow: `0 0 6px ${d.color}88`,
              }}
            >
              <span
                className="absolute -top-4 left-0 text-[7px] font-bold px-1 rounded-sm"
                style={{ background: d.color, color: "#fff" }}
              >
                {d.label} {d.conf}%
              </span>
            </div>
          ))}

          {/* Corner brackets */}
          {[["top-1 left-1 border-t-2 border-l-2"], ["top-1 right-1 border-t-2 border-r-2"], ["bottom-1 left-1 border-b-2 border-l-2"], ["bottom-1 right-1 border-b-2 border-r-2"]].map(([cls], i) => (
            <div key={i} className={`absolute w-4 h-4 ${cls} border-emerald-400 opacity-80`} />
          ))}

          {/* HUD top bar */}
          <div className="absolute top-2 left-0 right-0 flex items-center justify-between px-3">
            <div className="flex items-center gap-1">
              <div className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse"></div>
              <span className="text-[7px] text-emerald-400 font-mono">REC</span>
            </div>
            <div className="flex items-center gap-1">
              <Eye className="w-2.5 h-2.5 text-cyan-400" />
              <span className="text-[7px] text-cyan-400 font-mono">VISION AI</span>
            </div>
            <span className="text-[7px] text-gray-400 font-mono">30 FPS</span>
          </div>

          {/* HUD bottom bar */}
          <div className="absolute bottom-2 left-0 right-0 flex items-center justify-between px-3">
            <div className="flex items-center gap-1">
              <Cpu className="w-2.5 h-2.5 text-indigo-400" />
              <span className="text-[7px] text-indigo-400 font-mono">GPU 94%</span>
            </div>
            <div className="flex items-center gap-1">
              <Zap className="w-2.5 h-2.5 text-yellow-400" />
              <span className="text-[7px] text-yellow-400 font-mono">{detections.length} OBJ</span>
            </div>
          </div>
        </div>

        {/* Floating icons */}
        <Eye className="absolute -top-4 -right-4 w-4 h-4 text-emerald-400 animate-float-1" />
        <Zap className="absolute -bottom-2 -left-5 w-3 h-3 text-cyan-400 animate-float-2" />
      </div>

      <style jsx>{`
        @keyframes float-1 {
          0%, 100% { transform: translateY(0px); opacity: 0.7; }
          50% { transform: translateY(-12px); opacity: 1; }
        }
        @keyframes float-2 {
          0%, 100% { transform: translateY(0px); opacity: 0.6; }
          50% { transform: translateY(-8px); opacity: 1; }
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.6; }
        }
        .animate-float-1 { animation: float-1 3s ease-in-out infinite; }
        .animate-float-2 { animation: float-2 3.5s ease-in-out infinite; }
        .animate-pulse-slow { animation: pulse-slow 4s ease-in-out infinite; }
      `}</style>
    </div>
  );
};

const projects = [
  {
    id: 1,
    title: "AI Resume Builder",
    description: "An intelligent resume builder powered by AI that helps users create professional, ATS-friendly resumes. Features include AI-powered content suggestions, multiple templates, and real-time preview.",
    useCustomAnimation: true,
    tags: ["React", "AI", "Tailwind CSS"],
    liveLink: "",
    githubLink: "https://github.com/Rithikzz/Resume-Builder",
  },
  {
    id: 2,
    title: "AstroTrack",
    description: "A real-time astronomical object tracking system that helps users track celestial bodies, satellites, and space objects. Features live tracking data, visualization, and detailed orbital information.",
    useAstroAnimation: true,
    tags: ["Python", "APIs", "Real-time Data"],
    liveLink: "",
    githubLink: "https://github.com/Rithikzz/AstroTrack",
  },
  {
    id: 3,
    title: "Real-Time Multimodal AI Vision System",
    description: "A high-performance real-time AI vision system that combines object detection, semantic segmentation, and multimodal analysis. Processes live video streams at 30 FPS with GPU-accelerated inference, supporting simultaneous detection of objects, faces, gestures, and scene context.",
    useVisionAnimation: true,
    tags: ["Python", "OpenCV", "PyTorch", "WebRTC", "FastAPI"],
    liveLink: "",
    githubLink: "",
  },
];

const ProjectCard = ({ project, index }) => (
  <div
    className="group relative"
    data-aos={index % 2 === 0 ? "fade-up" : "fade-up"}
    data-aos-duration="800"
    data-aos-delay={index * 150}
  >
    {/* Animated glow effect */}
    <div className="absolute -inset-0.5 bg-gradient-to-r from-[#6366f1] via-[#a855f7] to-[#ec4899] rounded-2xl opacity-20 group-hover:opacity-40 blur-lg transition-all duration-500"></div>
    
    <div className="relative bg-gradient-to-br from-[#1a1a2e]/90 to-[#0f172a]/90 backdrop-blur-sm rounded-2xl overflow-hidden border border-purple-500/20 hover:border-purple-500/40 transition-all duration-500">
      {/* Project Animation Container */}
      <div className="relative h-64 overflow-hidden bg-gradient-to-br from-[#2a2a4e]/50 to-[#1f1f3e]/50 flex items-center justify-center">
        {project.useCustomAnimation ? (
          <ResumeBuilderAnimation />
        ) : project.useAstroAnimation ? (
          <AstroTrackAnimation />
        ) : project.useVisionAnimation ? (
          <VisionAIAnimation />
        ) : project.animation ? (
          <Lottie
            animationData={project.animation}
            loop={true}
            className="w-full h-full object-contain"
          />
        ) : (
          <>
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a2e] via-transparent to-transparent opacity-60"></div>
          </>
        )}
        
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a2e] via-transparent to-transparent opacity-50"></div>
      </div>

      {/* Project Details */}
      <div className="p-6 space-y-4">
        <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] via-[#a855f7] to-[#ec4899]">
          {project.title}
        </h3>
        
        <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag, idx) => (
            <span
              key={idx}
              className="px-3 py-1 text-xs font-medium bg-gradient-to-r from-[#6366f1]/20 to-[#a855f7]/20 text-[#a855f7] rounded-full border border-[#a855f7]/30 hover:scale-105 transition-transform duration-300"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-3 pt-2">
          {project.liveLink && (
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#6366f1] to-[#a855f7] rounded-lg text-white text-sm font-medium hover:scale-105 hover:shadow-[0_0_20px_rgba(168,85,247,0.6)] transition-all duration-300"
            >
              <ExternalLink className="w-4 h-4" />
              Live Demo
            </a>
          )}
          {project.githubLink && (
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 border border-gray-600 rounded-lg text-gray-300 text-sm font-medium hover:border-[#a855f7] hover:text-[#a855f7] hover:scale-105 transition-all duration-300"
            >
              <Github className="w-4 h-4" />
              Code
            </a>
          )}
        </div>
      </div>
    </div>
  </div>
);

const Projects = () => {
  useEffect(() => {
    AOS.init({ once: true, duration: 1000 });
  }, []);

  return (
    <div
      id="Projects"
      className="relative min-h-screen text-white py-20 px-[5%] sm:px-[8%] lg:px-[10%] overflow-hidden mt-16 sm:mt-20"
    >
      {/* Content */}
      <div className="relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block relative group">
            <h2
              className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7]"
              data-aos="zoom-in"
            >
              Featured Projects
            </h2>
          </div>
          <p
            className="mt-4 text-gray-400 max-w-2xl mx-auto text-base sm:text-lg flex items-center justify-center gap-2"
            data-aos="fade-up"
          >
            <Sparkles className="w-5 h-5 text-purple-400" />
            Building innovative solutions with cutting-edge technology
            <Sparkles className="w-5 h-5 text-purple-400" />
          </p>
        </div>

        {/* Projects Grid */}
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
