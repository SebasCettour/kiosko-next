import { Category } from "@prisma/client";
import Image from "next/image";

type CategoryIconProps = {
  category: Category;
};

export default function CategoryIcon({ category }: CategoryIconProps) {
  return (
    <div
      className={`
    flex items-center 
    gap-4 
    w-full 
    border-t 
    border-gray-200
    p-3
    last-of-type:border-b
    `}
    >
      <div className="relative size-16">
        <Image
          src={`/icon_${category.slug}.svg`}
          alt={`Imagen de la categoría: ${category.name}`}
          fill
        />
      </div>
      <p className="text-lg font-medium text-gray-700">{category.name}</p>
    </div>
  );
}
