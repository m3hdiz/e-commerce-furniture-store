import { prisma } from "../db.server";

export default async function AllProducts() {
  const data = await prisma.product.findMany();
  const formatted = data.map((p) => ({
    ...p,
    price: p.price.toNumber(),
    originalPrice: p.originalPrice.toNumber(),
  }));
  return formatted;
}
