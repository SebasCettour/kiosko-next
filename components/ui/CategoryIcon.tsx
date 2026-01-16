"use client";
import { Category } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";
import {useParams} from "next/navigation"

type CategoryIconProps = {
  category: Category;
};

export default function CategoryIcon({ category }: CategoryIconProps) {
  const params = useParams();
  const isActive = params.category === category.slug;
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
        ${isActive ? 'bg-amber-500 bg-opacity-10 border-amber-500' : 'hover:bg-gray-50 cursor-pointer'}
      `}
    >
      <div className="relative size-16">
        <Image
          src={`/icon_${category.slug}.svg`}
          alt={`Imagen de la categoría: ${category.name}`}
          fill
        />
      </div>
      <Link
        href={`/order/${category.slug}`}
        className="text-lg font-medium text-gray-700"
      >
        {category.name}
      </Link>
    </div>
  );
}
