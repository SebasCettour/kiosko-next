"use server";
import { prisma } from "@/src/lib/prisma";
import CategoryIcon from "../ui/CategoryIcon";

async function getCategories() {
  return await prisma.category.findMany({});
}

export default async function OrderSidebar() {
  const categories = await getCategories();
  return (
    <aside className="md:w-72 md:h-screen bg-white rounded-xl shadow-lg p-0 flex flex-col">
      <h2 className="text-xl font-extrabold text-amber-600 mb-6 text-center tracking-wide mt-0 pt-6">
        Categorías
      </h2>
      <nav className="flex-1 overflow-y-auto flex flex-col gap-2">
        {categories.map((category, idx) => (
          <div key={category.id}>
            <CategoryIcon category={category} />
            {idx < categories.length - 1 && (
              <hr className="my-2 border-gray-200" />
            )}
          </div>
        ))}
      </nav>
    </aside>
  );
}
