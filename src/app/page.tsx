import Link from "next/link";
import Petalfall from "@/components/Snowfall";
import Countdown from "@/components/Countdown";
import { getMemories, getWishes } from "@/lib/data";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  let memories = [];
  let wishes = [];

  try {
    const [mRes, wRes] = await Promise.all([
      getMemories({ limit: 6 }),
      getWishes(),
    ]);
    memories = mRes || [];
    wishes = wRes || [];
  } catch (e) {
    console.error("Database connection error during page load:", e);
  }

  return (
    <main className="min-h-screen relative pb-20">
      <Petalfall />

      {/* ГЛАВНЫЙ СВАДЕБНЫЙ БАННЕР */}
      <section className="relative pt-20 pb-16 px-4 text-center max-w-4xl mx-auto animate-fade-in">
        <span className="text-xs uppercase tracking-[0.3em] text-[#a6553a] font-semibold bg-[#f4e8e1] px-4 py-1.5 rounded-full inline-block mb-4">
          Приглашение на свадьбу
        </span>
        
        <h1 className="text-5xl sm:text-7xl font-serif text-[#2d2422] mb-4 tracking-tight">
          Анна <span className="text-[#c88a78] font-sans font-light">&amp;</span> Дмитрий
        </h1>
        
        <p className="text-lg text-[#6e5852] max-w-lg mx-auto font-light mb-8 italic">
          «Мы будем счастливы разделить с вами самый главный день нашей жизни!»
        </p>

        <div className="flex flex-wrap justify-center gap-6 text-sm text-[#52413c] mb-10 border-y border-[#f0e2da] py-4 max-w-md mx-auto">
          <div>
            <span className="block font-bold text-[#c88a78]">ДАТА</span>
            15 Июля 2027
          </div>
          <div className="border-r border-[#f0e2da]" />
          <div>
            <span className="block font-bold text-[#c88a78]">ЛОКАЦИЯ</span>
            Балаклава, Крым
          </div>
        </div>

        <div className="mb-10">
          <p className="text-xs uppercase tracking-widest text-[#8c6f66] mb-3">До торжества осталось:</p>
          <Countdown targetDate="2027-07-15T15:00:00" />
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="#upload"
            className="bg-[#c88a78] hover:bg-[#b57763] text-white px-8 py-3.5 rounded-full font-medium shadow-lg hover:shadow-xl transition-all text-sm tracking-wide"
          >
            📸 Загрузить фото с банкета
          </a>
          <a
            href="#wishes"
            className="bg-white border border-[#e8d5cc] hover:bg-[#fcf7f4] text-[#a6553a] px-8 py-3.5 rounded-full font-medium transition-all text-sm"
          >
            💌 Оставить пожелание
          </a>
        </div>
      </section>

      {/* ДРЕСС-КОД */}
      <section className="max-w-3xl mx-auto px-4 my-12 text-center">
        <div className="bg-white p-8 rounded-2xl border border-[#f0e2da] shadow-sm">
          <h2 className="text-2xl font-serif text-[#2d2422] mb-3">Палитра дресс-кода</h2>
          <p className="text-sm text-[#7a645d] mb-6">Будем признательны, если при выборе нарядов вы придержитесь этих оттенков:</p>
          <div className="flex justify-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#E8D5CC] border border-black/5 shadow-inner" title="Пудровый" />
            <div className="w-10 h-10 rounded-full bg-[#C88A78] border border-black/5 shadow-inner" title="Терракот" />
            <div className="w-10 h-10 rounded-full bg-[#D4AF37] border border-black/5 shadow-inner" title="Золото" />
            <div className="w-10 h-10 rounded-full bg-[#F5E6D3] border border-black/5 shadow-inner" title="Шампань" />
            <div className="w-10 h-10 rounded-full bg-[#4A3B32] border border-black/5 shadow-inner" title="Шоколад" />
          </div>
        </div>
      </section>

      {/* ГАЛЕРЕЯ */}
      <section className="max-w-5xl mx-auto px-4 my-16">
        <div className="flex justify-between items-end mb-8 border-b border-[#f0e2da] pb-4">
          <div>
            <h2 className="text-3xl font-serif text-[#2d2422]">Живая фотолента</h2>
            <p className="text-sm text-[#8c6f66]">Фото и видео от наших любимых гостей</p>
          </div>
          <Link href="/gallery" className="text-sm font-medium text-[#c88a78] hover:underline">
            Смотреть все →
          </Link>
        </div>

        {memories.length === 0 ? (
          <div className="text-center py-12 bg-white rounded-2xl border border-dashed border-[#e8d5cc]">
            <p className="text-[#8c6f66]">Пока нет загруженных фото. Будьте первыми!</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {memories.map((m) => (
              <div key={m.id} className="polaroid-card">
                <img
                  src={m.filePath}
                  alt={m.caption || "Фото с торжества"}
                  className="w-full h-48 sm:h-64 object-cover rounded-sm mb-2"
                />
                {m.caption && <p className="text-xs text-[#52413c] italic truncate">{m.caption}</p>}
                {m.author && <p className="text-[10px] text-[#a6553a] font-semibold mt-1">От: {m.author}</p>}
              </div>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
