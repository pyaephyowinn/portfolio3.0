"use client";

import { useEffect, useState } from "react";

interface Particle {
  id: number;
  left: number;
  delay: number;
  duration: number;
  size: number;
}

const FACTION_COLORS: Record<string, string> = {
  hero: "radial-gradient(ellipse at 50% 80%, hsl(270 30% 12%) 0%, hsl(270 20% 6%) 50%, #0a0a0a 100%)",
  about: "radial-gradient(ellipse at 50% 80%, hsl(220 35% 14%) 0%, hsl(220 25% 7%) 50%, #0a0a0a 100%)",
  projects: "radial-gradient(ellipse at 50% 80%, hsl(10 30% 12%) 0%, hsl(10 20% 6%) 50%, #0a0a0a 100%)",
  skills: "radial-gradient(ellipse at 50% 80%, hsl(170 30% 10%) 0%, hsl(170 20% 5%) 50%, #0a0a0a 100%)",
  contact: "radial-gradient(ellipse at 50% 80%, hsl(270 30% 12%) 0%, hsl(270 20% 6%) 50%, #0a0a0a 100%)",
};

export default function BackgroundAtmosphere({ activeTab }: { activeTab: string }) {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const generated: Particle[] = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 8,
      duration: 6 + Math.random() * 8,
      size: 1 + Math.random() * 3,
    }));
    setParticles(generated);
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <div
        className="absolute inset-0 transition-all duration-1000 ease-in-out"
        style={{ background: FACTION_COLORS[activeTab] || FACTION_COLORS.hero }}
      />
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute rounded-full"
          style={{
            left: `${p.left}%`,
            bottom: "-10px",
            width: `${p.size}px`,
            height: `${p.size}px`,
            background: "radial-gradient(circle, hsl(45 100% 70% / 0.8), hsl(45 100% 50% / 0.2))",
            boxShadow: `0 0 ${p.size * 2}px hsl(45 100% 60% / 0.4)`,
            animation: `particle-float ${p.duration}s linear infinite`,
            animationDelay: `${p.delay}s`,
          }}
        />
      ))}
    </div>
  );
}
