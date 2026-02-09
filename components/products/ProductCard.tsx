import { Product } from "@prisma/client";
import Image from "next/image";
import AddProductButton from "./AddProductButton";
import { getImagePath } from "@/src/utils";

type ProductCardProps = {
  product: Product;
};

export default function ProductCard({ product }: ProductCardProps) {
  const imagePath = getImagePath(product.imageUrl || "");

  return (
    <article
      className="
        flex
        flex-col
        h-full
        bg-white
        border
        border-gray-200
        rounded-lg
        overflow-hidden
        transition
        hover:shadow-lg
      "
    >
      {/* Imagen */}
      <div className="flex items-center justify-center bg-gray-50 h-40 md:h-48 px-4">
        <Image
          src={imagePath}
          alt={`Imagen producto ${product.name}`}
          width={480}
          height={360}
          className="object-contain max-h-full w-auto"
        />
      </div>

      {/* Contenido */}
      <div className="p-4 md:p-5 flex flex-col flex-1 gap-3">
        <div className="flex-1">
          <h3 className="text-base md:text-lg font-semibold leading-snug break-words">
            {product.name}
          </h3>

          <p className="mt-2 text-lg md:text-xl font-bold text-amber-500">
            ${product.price.toFixed(2)}
          </p>
        </div>

        <AddProductButton product={product} />
      </div>
    </article>
  );
}
