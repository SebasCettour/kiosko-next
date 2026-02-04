import ProductTable from "@/components/products/ProductsTable";
import Heading from "@/components/ui/Heading";
import { prisma } from "@/src/lib/prisma";

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

  const products = await getProducts(page, pageSize);
  return (
    <>
      <Heading>Administrar Productos</Heading>
      <ProductTable products={products} />
    </>
  );
}
