export const revalidate = 0;
import WishesView from "@/components/WishesView";
import { getWishes } from "@/lib/data";

import dynamic from "next/dynamic"
export default async function WishesPage() {
  let wishes = [];
  try {
    wishes = await getWishes();
  } catch (e) {
    console.error(e);
  }

  return (
    <main className="min-h-screen py-12 px-4 max-w-4xl mx-auto">
      <h1 className="text-4xl font-serif text-[#2d2422] mb-8 text-center">Книга пожеланий</h1>
      <WishesView initialWishes={wishes} />
    </main>
  );
}
