import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Подключаем свадебные шрифты
const playfair = Playfair_Display({ subsets: ["cyrillic"], variable: "--font-serif" });
const inter = Inter({ subsets: ["cyrillic"], variable: "--font-sans" });

// НАЗВАНИЕ В БРАУЗЕРЕ
export const metadata: Metadata = {
  title: "День свадьбы | Анна & Дмитрий",
  description: "Интерактивный свадебный альбом и книга пожеланий",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru" className={`${playfair.variable} ${inter.variable}`}>
      <body className="font-sans bg-[var(--background)] text-[var(--foreground)] flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-grow">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
