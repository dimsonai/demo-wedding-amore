export default function Footer() {
  return (
    <footer className="w-full bg-[#f4e8e1] border-t border-[#f0e2da] py-12 mt-10">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h3 className="font-serif text-3xl text-[#a6553a] mb-3">Анна & Дмитрий</h3>
        <p className="text-[#8c6f66] mb-6 italic font-light">
          «Спасибо, что разделили этот счастливый день вместе с нами!»
        </p>
        <div className="flex justify-center items-center gap-4 mb-6">
          <div className="h-[1px] w-12 bg-[#c88a78]/30"></div>
          <span className="text-[#c88a78]">💍</span>
          <div className="h-[1px] w-12 bg-[#c88a78]/30"></div>
        </div>
        <p className="text-xs text-[#b57763] uppercase tracking-widest">
          © 2027 День свадьбы. Создано с любовью.
        </p>
      </div>
    </footer>
  );
}
