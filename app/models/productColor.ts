import { prisma } from "../utils/db.server";

export async function getProductWithColors() {
  const productWithColors = await prisma.product.findUnique({
    where: { id: "3b10f8a2-fa5d-497a-af82-b7b332802662" },
    include: {
      colors: {
        include: { color: true },
      },
    },
  });

  if (!productWithColors) {
    return null;
  }

  return productWithColors;
}
