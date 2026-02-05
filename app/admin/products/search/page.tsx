import ProductSearchForm from "@/components/products/ProductSearchForm";
import ProductTable from "@/components/products/ProductsTable";
import Heading from "@/components/ui/Heading";
import { prisma } from "@/src/lib/prisma";

async function searchProducts(searchTerm: string) {
  const products = await prisma.product.findMany({
    where: {
      name: {
        contains: searchTerm,
        mode: "insensitive",
      },
    },
    include: {
      category: true,
    },
  });
  return products;
}

export default async function SearchPage({
  searchParams,
}: {
  searchParams: { search: string };
}) {
  const products = await searchProducts(searchParams.search || "");
  return (
    <>
      <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-end mb-6">
        <div className="flex w-full lg:w-auto"></div>
        <div className="w-full lg:w-auto">
          <ProductSearchForm />
        </div>
      </div>
      <Heading>Resultado de búsqueda: {searchParams.search}</Heading>
      {products.length ? (
        <ProductTable products={products} />
      ) : (
        <p className="text-center text-gray-600">
          No se encontraron productos.
        </p>
      )}
    </>
  );
}
