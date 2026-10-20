"use client";

import Link from "next/link";
import { Heart, Home, Image as ImageIcon } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-[#fdfbf7]/90 border-b border-[#f0e2da] shadow-sm">
      <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
        
        {/* ЛОГОТИП */}
        <Link href="/" className="flex items-center gap-2 group">
          <Heart className="w-5 h-5 text-[#c88a78] group-hover:text-[#a6553a] transition-colors" />
          <span className="font-serif text-2xl text-[#2d2422] tracking-wide">
            День свадьбы
          </span>
        </Link>

        {/* ССЫЛКИ МЕНЮ */}
        <nav className="hidden sm:flex items-center gap-8">
          <Link href="/" className="text-sm font-medium text-[#6e5852] hover:text-[#c88a78] transition-colors flex items-center gap-1.5">
            <Home className="w-4 h-4" /> Главная
          </Link>
          <Link href="/gallery" className="text-sm font-medium text-[#6e5852] hover:text-[#c88a78] transition-colors flex items-center gap-1.5">
            <ImageIcon className="w-4 h-4" /> Галерея
          </Link>
          <Link href="/wishes" className="text-sm font-medium text-[#6e5852] hover:text-[#c88a78] transition-colors flex items-center gap-1.5">
            <Heart className="w-4 h-4" /> Пожелания
          </Link>
        </nav>

        {/* Мобильное меню (простые иконки) */}
        <nav className="flex sm:hidden items-center gap-5">
          <Link href="/" className="text-[#c88a78] hover:text-[#a6553a]"><Home className="w-5 h-5" /></Link>
          <Link href="/gallery" className="text-[#c88a78] hover:text-[#a6553a]"><ImageIcon className="w-5 h-5" /></Link>
          <Link href="/wishes" className="text-[#c88a78] hover:text-[#a6553a]"><Heart className="w-5 h-5" /></Link>
        </nav>

      </div>
    </header>
  );
}
