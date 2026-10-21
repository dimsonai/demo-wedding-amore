export const revalidate = 0;

import Link from "next/link";
import { Camera, MapPin, Clock, ArrowRight, Heart, Gift, Mail, Car } from "lucide-react";
import * as CountdownModule from "@/components/Countdown";

const Countdown = (CountdownModule as any).default || (CountdownModule as any).Countdown;

export default async function HomePage() {
  return (
    <main className="min-h-screen pb-20">
      
      {/* Шапка */}
      <section className="relative pt-20 pb-16 px-4 overflow-hidden text-center">
        <div className="inline-block p-4 rounded-full bg-[#f4e8e1] mb-6 animate-pulse">
          <Heart className="w-8 h-8 text-[#c88a78] fill-[#c88a78]/20" />
        </div>
        <h1 className="text-5xl md:text-7xl font-serif text-gray-800 mb-4 tracking-tight">
          Анна & Дмитрий
        </h1>
        <p className="text-lg md:text-xl text-gray-500 uppercase tracking-widest font-medium mb-8">
          15 Июля 2027 <span className="mx-2">•</span> Балаклава, Крым
        </p>
        
        {/* Новый читаемый таймер */}
        {Countdown && <Countdown targetDate="2027-07-15T15:00:00" />}
      </section>

      {/* НОВЫЙ БЛОК: Пожелания по подаркам (Конверты) */}
      <section className="max-w-3xl mx-auto px-4 mb-20 text-center">
        <h2 className="text-3xl font-serif text-gray-800 mb-8 flex items-center justify-center gap-3">
          <Gift className="w-8 h-8 text-[#c88a78]" />
          Подарки
        </h2>
        <div className="bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-[#f4e8e1] relative overflow-hidden">
          <Mail className="w-12 h-12 text-[#c88a78] mx-auto mb-4 opacity-80" />
          <h3 className="text-xl font-bold text-gray-800 mb-3">Дорогие гости!</h3>
          <p className="text-gray-600 text-lg leading-relaxed font-medium">
            Главный подарок для нас — это ваше присутствие и искренние эмоции в наш особенный день. 
            Пожалуйста, не ломайте голову над материальными подарками: мы будем очень благодарны, 
            если ваш вклад в бюджет нашей молодой семьи <span className="text-[#c88a78] font-bold">поместится в конверт</span>.
          </p>
        </div>
      </section>

      {/* НОВЫЙ БЛОК: Локация, Карта и Трансфер */}
      <section className="max-w-5xl mx-auto px-4 mb-20">
        <h2 className="text-3xl font-serif text-gray-800 mb-8 flex items-center justify-center gap-3 text-center">
          <MapPin className="w-8 h-8 text-[#c88a78]" />
          Локация и Трансфер
        </h2>
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Инфо-блок */}
          <div className="flex-1 bg-[#fdfbf7] p-8 rounded-3xl border border-[#f4e8e1] shadow-sm flex flex-col justify-center">
            <h3 className="text-2xl font-serif font-bold text-gray-800 mb-4">Церемония и Банкет</h3>
            <p className="text-gray-600 mb-6 text-lg">
              Севастополь, Балаклава <br />
              <span className="font-bold text-gray-800">Историческая локация у крепости Чембало</span>
            </p>
            
            <div className="flex items-start gap-4 bg-white p-5 rounded-2xl border border-gray-100 shadow-sm">
              <Car className="w-8 h-8 text-[#c88a78] flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-gray-800 mb-1">Организованный трансфер</h4>
                <p className="text-sm text-gray-500">
                  Для вашего удобства будет подан микроавтобус из центра Севастополя. 
                  Сбор гостей на пл. Ушакова в 14:00.
                </p>
              </div>
            </div>
          </div>
          
          {/* Яндекс Карта (Чембало) */}
          <div className="flex-1 h-[350px] lg:h-auto rounded-3xl overflow-hidden border-4 border-white shadow-md relative bg-gray-200">
            <iframe 
              src="https://yandex.ru/map-widget/v1/?ll=33.599000%2C44.494000&z=15&pt=33.599000%2C44.494000~pm2rdm" 
              width="100%" 
              height="100%" 
              frameBorder="0" 
              className="absolute inset-0 w-full h-full object-cover"
              title="Карта Балаклава Чембало"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Дресс-код */}
      <section className="max-w-3xl mx-auto px-4 mb-20 text-center">
        <h2 className="text-3xl font-serif text-gray-800 mb-6">Дресс-код</h2>
        <p className="text-gray-600 mb-8">
          Будем признательны, если вы поддержите цветовую гамму нашего праздника
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          {["#E8DCC4", "#C88A78", "#A37A74", "#8B5A50", "#5C4033"].map((color, i) => (
            <div 
              key={i} 
              className="w-12 h-12 md:w-16 md:h-16 rounded-full shadow-inner border border-black/5 transition-transform hover:scale-110"
              style={{ backgroundColor: color }}
            />
          ))}
        </div>
      </section>

      {/* Переход в альбом */}
      <section className="text-center px-4">
        <Link 
          href="/gallery" 
          className="inline-flex items-center gap-2 bg-[#c88a78] text-white px-8 py-4 rounded-full font-medium text-lg hover:bg-[#b57765] transition-all transform hover:scale-105 shadow-lg"
        >
          <Camera className="w-5 h-5" />
          Смотреть фото гостей
          <ArrowRight className="w-5 h-5" />
        </Link>
      </section>
    </main>
  );
}
