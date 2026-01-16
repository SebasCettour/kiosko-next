import { prisma } from "@/src/lib/prisma";

async function getProducts(category: string) {
  const products = await prisma.product.findMany({
    where: {
      category: {
        slug: category,
      },
    },
  });
  return products;
}
export default function OrderPage({
  params,
}: {
  params: { category: string };
}) {
  return <div>OrderPage</div>;
}
