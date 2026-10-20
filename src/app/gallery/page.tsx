export const revalidate = 0;
import MemoryGrid from "@/components/MemoryGrid";
import { getMemories } from "@/lib/data";

export const dynamic = "force-dynamic";

export default async function GalleryPage() {
  let memories = [];
  try {
    memories = await getMemories();
  } catch (e) {
    console.error(e);
  }

  return (
    <main className="min-h-screen py-12 px-4 max-w-6xl mx-auto">
      <h1 className="text-4xl font-serif text-[#2d2422] mb-8 text-center">Галерея воспоминаний</h1>
      <MemoryGrid initialMemories={memories} />
    </main>
  );
}
