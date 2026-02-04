import ProductPagination from "@/components/products/ProductPagination";
import ProductTable from "@/components/products/ProductsTable";
import Heading from "@/components/ui/Heading";
import { prisma } from "@/src/lib/prisma";

async function productCount(){
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

  const productsData =  getProducts(page, pageSize);
  const totalProductData =  productCount();
  const [products, totalProducts] = await Promise.all([productsData, totalProductData]);
  return (
    <>
      <Heading>Administrar Productos</Heading>
      <ProductTable products={products} />
      <ProductPagination page={page} />
    </>
  );
}
