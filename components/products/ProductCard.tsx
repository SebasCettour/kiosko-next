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
    <div className="flex flex-col h-full border bg-white rounded-xl shadow-md overflow-hidden min-w-0">
      <div className="flex items-center justify-center bg-gray-50 px-4 pt-4">
        <Image
          src={imagePath}
          alt={`Imagen producto ${product.name}`}
          width={480}
          height={360}
          className="object-contain h-44 md:h-52 w-full"
        />
      </div>
      <div className="p-4 md:p-6 flex flex-col flex-1 gap-3">
        <div className="flex-1">
          <h3 className="text-xl md:text-2xl font-bold leading-tight break-words">
            {product.name}
          </h3>
          <p className="mt-3 font-black text-3xl md:text-4xl text-amber-500">
            ${product.price.toFixed(2)}
          </p>
        </div>
        <AddProductButton product={product} />
      </div>
    </div>
  );
}
