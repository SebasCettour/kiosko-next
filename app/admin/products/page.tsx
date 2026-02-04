import ProductTable from "@/components/products/ProductsTable";
import Heading from "@/components/ui/Heading";
import { prisma } from "@/src/lib/prisma";

async function getProducts() {
  const products = await prisma.product.findMany({
    include: {
      category: true,
    },
  });
  return products;
}

export type ProductWithCategory = Awaited<ReturnType<typeof getProducts>>[number];  


export default async function ProductPage() {
  const products = await getProducts();
  return (
    <>
      <Heading>Administrar Productos</Heading>
      <ProductTable products={products} />
    </>
  );
}
