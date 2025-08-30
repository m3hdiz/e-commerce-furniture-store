import { prisma } from "../utils/db.server";

export default async function GetProduct(id: string) {
  const data = await prisma.product.findUnique({
    where: { id },
    include: {
      Review: true,
      ProductColor: true,
    },
  });

  if (!data) return null;

  return {
    ...data,
    price: data.price.toNumber(),
    originalPrice: data.originalPrice.toNumber(),
  };
}
