import { prisma } from "../utils/db.server";

export async function getOrCreateCart(userId: string) {
  let cart = await prisma.cart.findUnique({
    where: { userId },
    include: { cartItems: true },
  });
  if (!cart) {
    cart = await prisma.cart.create({
      data: { userId },
      include: { cartItems: true },
    });
  }
  return cart;
}

interface addToCartProps {
  userId: string;
  productId: string;
  quantity: number;
  replace?: boolean;
}

export async function addToCart({
  userId,
  productId,
  quantity,
  replace = false,
}: addToCartProps) {
  const cart = await getOrCreateCart(userId);
  const existItem = await prisma.cartItem.findFirst({
    where: {
      cartId: cart.id,
      productId,
    },
  });
  if (existItem) {
    const cartItem = await prisma.cartItem.update({
      where: { id: existItem.id },
      data: {
        quantity: replace ? quantity : existItem.quantity + quantity,
      },
    });
  } else {
    const cartItem = await prisma.cartItem.create({
      data: {
        cartId: cart.id,
        productId,
        quantity,
      },
    });
  }
  return prisma.cart.findUnique({
    where: { id: cart.id },
    include: { cartItems: true },
  });
}
