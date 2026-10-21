"use client";
import { useState, useEffect } from "react";

export const Countdown = ({ targetDate }: { targetDate: string }) => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const target = new Date(targetDate).getTime();
    
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = target - now;

      if (difference <= 0) {
        clearInterval(interval);
        return;
      }

      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  if (!isMounted) return null; // Защита от мигания при загрузке

  return (
    <div className="flex justify-center gap-3 md:gap-6 mt-6">
      {[
        { label: "Дней", value: timeLeft.days },
        { label: "Часов", value: timeLeft.hours },
        { label: "Минут", value: timeLeft.minutes },
        { label: "Секунд", value: timeLeft.seconds },
      ].map((item, i) => (
        <div key={i} className="flex flex-col items-center">
          <div className="bg-white border-2 border-[#f4e8e1] w-14 h-14 md:w-20 md:h-20 rounded-2xl flex items-center justify-center shadow-md mb-2 transform hover:scale-105 transition-transform">
            <span className="text-2xl md:text-4xl font-serif font-black text-gray-800">
              {item.value}
            </span>
          </div>
          <span className="text-[10px] md:text-xs text-gray-600 uppercase tracking-widest font-bold">
            {item.label}
          </span>
        </div>
      ))}
    </div>
  );
};
