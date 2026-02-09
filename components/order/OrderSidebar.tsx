"use server";
import { prisma } from "@/src/lib/prisma";
import CategoryIcon from "../ui/CategoryIcon";
import Logo from "../ui/Logo";

async function getCategories() {
  return prisma.category.findMany();
}

export default async function OrderSidebar() {
  const categories = await getCategories();

  return (
    <aside
      className="
        w-full
        h-full
        bg-white
        flex
        flex-col
      "
    >
      {/* Logo */}
      <div className="p-4 border-b border-gray-100">
        <Logo />
      </div>

      <h2 className="text-lg md:text-xl font-extrabold text-amber-600 text-center py-4">
        Categorías
      </h2>

      {/* Navegación */}
      <nav className="flex-1 overflow-y-auto px-2 pb-4 flex flex-col gap-2">
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
