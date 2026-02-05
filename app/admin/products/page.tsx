import ProductPagination from "@/components/products/ProductPagination";
import ProductSearchForm from "@/components/products/ProductSearchForm";
import ProductTable from "@/components/products/ProductsTable";
import Heading from "@/components/ui/Heading";
import { prisma } from "@/src/lib/prisma";
import Link from "next/link";

async function productCount() {
  return await prisma.product.count();
}

async function getProducts(page: number, pageSize: number) {
  const skip = (page - 1) * pageSize;
  const products = await prisma.product.findMany({
    take: pageSize,
    skip: skip,
    include: {
      category: true,
    },
  });
  return products;
}

export type ProductWithCategory = Awaited<
  ReturnType<typeof getProducts>
>[number];

export default async function ProductPage(searchParams: {
  searchParams: { page: string };
}) {
  const page = +searchParams.searchParams.page || 1;
  const pageSize = 10;

  const productsData = getProducts(page, pageSize);
  const totalProductData = productCount();
  const [products, totalProducts] = await Promise.all([
    productsData,
    totalProductData,
  ]);
  const totalPages = Math.ceil(totalProducts / pageSize);
  return (
    <>
      <Heading>Administrar Productos</Heading>
      <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between mb-6">
        <div className="flex w-full lg:w-auto">
          <Link
            className="inline-flex items-center justify-center px-6 py-2 bg-amber-400 text-white font-semibold rounded-lg shadow hover:bg-amber-500 transition-colors duration-150 text-base lg:text-sm min-w-[160px]"
            href="/admin/products/new"
          >
            <svg
              className="mr-2 w-5 h-5 hidden sm:inline"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
            </svg>
            Crear Producto
          </Link>
        </div>
        <div className="w-full lg:w-auto">
          <ProductSearchForm />
        </div>
      </div>
      <ProductTable products={products} />
      <ProductPagination page={page} totalPages={totalPages} />
    </>
  );
}
