import {prisma} from "@/src/lib/prisma";

async function getCategories() {
  return await prisma.category.findMany({});
  
}

export default async function OrderSidebar() {

  const categories = await getCategories();
  console.log(categories);
  return (
    <div className="flex flex-col gap-6">
      <div className="text-2xl font-bold text-gray-800 mb-4 tracking-tight">
        Menú
      </div>
    </div>
  );
}
