import React, { useState, useEffect } from "react";

const CinematicBackground = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      {/* Cinematic Background Effects */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        {/* Animated 3D Grid */}
        <div className="absolute inset-0 cinematic-grid opacity-20"></div>
        
        {/* Floating Particles */}
        <div className="absolute inset-0">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-purple-400 rounded-full animate-float-particle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${15 + Math.random() * 10}s`,
                opacity: Math.random() * 0.5 + 0.2,
              }}
            />
          ))}
        </div>
        
        {/* Floating Abstract Shapes */}
        <div 
          className="absolute inset-0"
          style={{
            transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)`,
            transition: 'transform 0.3s ease-out',
          }}
        >
          <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-purple-600/10 to-transparent rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-32 left-20 w-80 h-80 bg-gradient-to-br from-blue-600/10 to-transparent rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
        </div>
        
        {/* Pulsing Neon Lights */}
        <div className="absolute top-0 left-1/4 w-2 h-full bg-gradient-to-b from-transparent via-purple-500/30 to-transparent animate-neon-pulse"></div>
        <div className="absolute top-0 right-1/3 w-2 h-full bg-gradient-to-b from-transparent via-blue-500/30 to-transparent animate-neon-pulse" style={{ animationDelay: '1s' }}></div>
        
        {/* Ambient Light Bloom */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-purple-600/5 via-transparent to-transparent animate-bloom"></div>
        
        {/* Parallax Floating Elements */}
        <div 
          className="absolute inset-0"
          style={{
            transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
            transition: 'transform 0.2s ease-out',
          }}
        >
          <div className="absolute top-40 left-10 w-3 h-3 border border-purple-500/40 rotate-45 animate-drift-1"></div>
          <div className="absolute top-60 right-40 w-4 h-4 border border-blue-500/40 rounded-full animate-drift-2"></div>
          <div className="absolute bottom-40 left-1/3 w-2 h-2 bg-purple-500/30 rotate-45 animate-drift-3"></div>
          <div className="absolute top-1/3 right-20 w-3 h-3 border border-pink-500/40 animate-drift-1"></div>
        </div>
      </div>

      {/* Cinematic Animations */}
      <style jsx>{`
        .cinematic-grid {
          background-image: 
            linear-gradient(rgba(99, 102, 241, 0.15) 2px, transparent 2px),
            linear-gradient(90deg, rgba(99, 102, 241, 0.15) 2px, transparent 2px);
          background-size: 50px 50px;
          animation: grid-move 20s linear infinite;
          transform: perspective(500px) rotateX(60deg);
          transform-origin: center center;
        }
        
        @keyframes grid-move {
          0% { background-position: 0 0; }
          100% { background-position: 50px 50px; }
        }
        
        @keyframes float-particle {
          0% { transform: translateY(0) translateX(0); opacity: 0; }
          10% { opacity: 0.5; }
          90% { opacity: 0.5; }
          100% { transform: translateY(-100vh) translateX(50px); opacity: 0; }
        }
        
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.2; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(1.1); }
        }
        
        @keyframes neon-pulse {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.6; }
        }
        
        @keyframes bloom {
          0%, 100% { opacity: 0.3; transform: translate(-50%, -50%) scale(1); }
          50% { opacity: 0.5; transform: translate(-50%, -50%) scale(1.2); }
        }
        
        @keyframes drift-1 {
          0%, 100% { transform: translateY(0) translateX(0) rotate(0deg); }
          33% { transform: translateY(-30px) translateX(20px) rotate(120deg); }
          66% { transform: translateY(-15px) translateX(-20px) rotate(240deg); }
        }
        
        @keyframes drift-2 {
          0%, 100% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(-40px) translateX(-30px); }
        }
        
        @keyframes drift-3 {
          0%, 100% { transform: translateY(0) translateX(0) rotate(45deg); }
          33% { transform: translateY(25px) translateX(-25px) rotate(165deg); }
          66% { transform: translateY(-20px) translateX(30px) rotate(285deg); }
        }
        
        .animate-float-particle {
          animation: float-particle linear infinite;
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 8s ease-in-out infinite;
        }
        
        .animate-neon-pulse {
          animation: neon-pulse 3s ease-in-out infinite;
        }
        
        .animate-bloom {
          animation: bloom 6s ease-in-out infinite;
        }
        
        .animate-drift-1 {
          animation: drift-1 15s ease-in-out infinite;
        }
        
        .animate-drift-2 {
          animation: drift-2 12s ease-in-out infinite;
        }
        
        .animate-drift-3 {
          animation: drift-3 18s ease-in-out infinite;
        }
        
        .bg-gradient-radial {
          background: radial-gradient(circle, var(--tw-gradient-stops));
        }
      `}</style>
    </>
  );
};

export default CinematicBackground;
