import { Product } from "@prisma/client";
import Image from "next/image";
import AddProductButton from "./AddProductButton";

type ProductCardProps = {
  product: Product;
};

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="flex flex-col h-full border bg-white rounded-lg shadow overflow-hidden">
      <div className="flex-1 flex items-center justify-center bg-gray-50">
        <Image
          src={`/products/${product.imageUrl}.jpg`}
          alt={`Imagen producto ${product.name}`}
          width={400}
          height={300}
          className="object-contain h-48 w-full"
        />
      </div>
      <div className="p-5 flex flex-col flex-1 justify-between">
        <div>
          <h3 className="text-2xl font-bold">{product.name}</h3>
          <p className="mt-5 font-black text-4xl text-amber-500">
            ${product.price.toFixed(2)}
          </p>
        </div>
        <AddProductButton product={product} />
      </div>
    </div>
  );
}
