"use client";

import { useState } from "react";
import Link from "next/link";
import { Heart, QrCode, X, Download, Sparkles, Image, MessageCircle, Home } from "lucide-react";

export const Navbar = () => {
  const [isQrOpen, setIsQrOpen] = useState(false);
  const siteUrl = "https://demo-wedding-amore.netlify.app";
  const qrImageUrl = `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encodeURIComponent(siteUrl)}&color=c88a78`;
  const highResQrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=1000x1000&data=${encodeURIComponent(siteUrl)}&color=c88a78`;

  return (
    <>
      <header className="sticky top-0 z-40 backdrop-blur-md bg-[#fdfbf7]/80 border-b border-[#f4e8e1] transition-all">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          
          {/* Логотип */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-9 h-9 rounded-full bg-[#f4e8e1] flex items-center justify-center group-hover:scale-105 transition-transform">
              <Heart className="w-5 h-5 text-[#c88a78] fill-[#c88a78]/30" />
            </div>
            <span className="font-serif text-lg sm:text-xl text-gray-800 tracking-wide font-medium">
              Анна & Дмитрий
            </span>
          </Link>

          {/* Навигация */}
          <nav className="flex items-center gap-1 sm:gap-4">
            <Link
              href="/"
              className="px-3 py-1.5 text-xs sm:text-sm text-gray-700 hover:text-[#c88a78] font-medium rounded-full hover:bg-[#f4e8e1]/50 transition-colors flex items-center gap-1.5"
            >
              <Home className="w-4 h-4 hidden sm:inline" />
              Главная
            </Link>
            <Link
              href="/gallery"
              className="px-3 py-1.5 text-xs sm:text-sm text-gray-700 hover:text-[#c88a78] font-medium rounded-full hover:bg-[#f4e8e1]/50 transition-colors flex items-center gap-1.5"
            >
              <Image className="w-4 h-4 hidden sm:inline" />
              Галерея
            </Link>
            <Link
              href="/wishes"
              className="px-3 py-1.5 text-xs sm:text-sm text-gray-700 hover:text-[#c88a78] font-medium rounded-full hover:bg-[#f4e8e1]/50 transition-colors flex items-center gap-1.5"
            >
              <MessageCircle className="w-4 h-4 hidden sm:inline" />
              Пожелания
            </Link>

            {/* Кнопка открытия QR-кода */}
            <button
              onClick={() => setIsQrOpen(true)}
              className="ml-2 px-3 py-1.5 text-xs sm:text-sm bg-[#c88a78] text-white font-medium rounded-full hover:bg-[#b57765] transition-all shadow-sm flex items-center gap-1.5 hover:scale-105"
            >
              <QrCode className="w-4 h-4" />
              <span>QR-код</span>
            </button>
          </nav>

        </div>
      </header>

      {/* Модальное окно с QR-кодом */}
      {isQrOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-fade-in">
          <div className="bg-[#fdfbf7] rounded-3xl p-6 sm:p-8 max-w-sm w-full border border-[#f4e8e1] shadow-2xl text-center relative">
            
            {/* Кнопка закрытия */}
            <button
              onClick={() => setIsQrOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 w-8 h-8 rounded-full bg-stone-100 flex items-center justify-center transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Иконка и заголовок */}
            <div className="w-12 h-12 rounded-full bg-[#f4e8e1] flex items-center justify-center mx-auto mb-3">
              <Sparkles className="w-6 h-6 text-[#c88a78]" />
            </div>

            <h3 className="font-serif text-2xl text-gray-800 mb-1">
              QR-код торжества
            </h3>
            <p className="text-xs text-gray-500 mb-6">
              Наведите камеру смартфона, чтобы войти в интерактивный альбом
            </p>

            {/* Картинка QR-кода */}
            <div className="bg-white p-4 rounded-2xl shadow-inner border border-stone-200 inline-block mb-6">
              <img
                src={qrImageUrl}
                alt="QR Code свадьбы"
                className="w-48 h-48 mx-auto"
              />
            </div>

            {/* Кнопки действий */}
            <div className="space-y-2">
              <a
                href={highResQrUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 bg-[#c88a78] text-white text-xs font-semibold rounded-xl hover:bg-[#b57765] transition-colors flex items-center justify-center gap-2 shadow-sm"
              >
                <Download className="w-4 h-4" />
                Скачать для печати (HD качество)
              </a>

              <button
                onClick={() => setIsQrOpen(false)}
                className="w-full py-2 text-xs text-gray-500 hover:text-gray-800 transition-colors"
              >
                Закрыть
              </button>
            </div>

          </div>
        </div>
      )}
    </>
  );
};
