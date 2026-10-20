"use client";

import { useEffect, useState } from "react";

interface Petal {
  id: number;
  x: number;
  size: number;
  duration: number;
  delay: number;
  rotate: number;
  opacity: number;
}

export default function Petalfall() {
  const [petals, setPetals] = useState<Petal[]>([]);

  useEffect(() => {
    const items: Petal[] = Array.from({ length: 25 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      size: Math.random() * 12 + 10,
      duration: Math.random() * 8 + 7,
      delay: Math.random() * 5,
      rotate: Math.random() * 360,
      opacity: Math.random() * 0.5 + 0.4,
    }));
    setPetals(items);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
      {petals.map((p) => (
        <div
          key={p.id}
          className="absolute top-[-20px] transition-all"
          style={{
            left: `${p.x}%`,
            width: `${p.size}px`,
            height: `${p.size * 1.3}px`,
            opacity: p.opacity,
            animation: `fall ${p.duration}s linear infinite`,
            animationDelay: `${p.delay}s`,
          }}
        >
          <svg
            viewBox="0 0 24 24"
            fill="#E29D90"
            className="w-full h-full drop-shadow-sm"
            style={{ transform: `rotate(${p.rotate}deg)` }}
          >
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
        </div>
      ))}

      <style jsx>{`
        @keyframes fall {
          0% { transform: translateY(0) rotate(0deg) translateX(0); }
          50% { transform: translateY(50vh) rotate(180deg) translateX(25px); }
          100% { transform: translateY(105vh) rotate(360deg) translateX(-10px); }
        }
      `}</style>
    </div>
  );
}
