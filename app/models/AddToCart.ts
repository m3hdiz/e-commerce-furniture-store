import { prisma } from "../utils/db.server";

export async function getOrCreateCart(userId: string) {
  let cart = await prisma.cart.findUnique({
    where: { userId },
    include: { cartItems: { include: { product: true } } },
  });

  if (!cart) {
    cart = await prisma.cart.create({
      data: { userId },
      include: { cartItems: { include: { product: true } } },
    });
  }

  return {
    ...cart,
    cartItems: cart.cartItems.map((item) => ({
      ...item,
      product: {
        ...item.product,
        price: Number(item.product.price),
        originalPrice: Number(item.product.originalPrice),
      },
    })),
  };
}

export async function addToCart({
  userId,
  productId,
  quantity,
  replace = false,
}: {
  userId: string;
  productId: string;
  quantity: number;
  replace?: boolean;
}) {
  const cart = await getOrCreateCart(userId);

  const existItem = await prisma.cartItem.findFirst({
    where: { cartId: cart.id, productId },
  });

  if (existItem) {
    await prisma.cartItem.update({
      where: { id: existItem.id },
      data: { quantity: replace ? quantity : existItem.quantity + quantity },
    });
  } else {
    await prisma.cartItem.create({
      data: { cartId: cart.id, productId, quantity },
    });
  }

  const updatedCart = await prisma.cart.findUnique({
    where: { id: cart.id },
    include: { cartItems: { include: { product: true } } },
  });

  return {
    ...updatedCart,
    cartItems: updatedCart?.cartItems.map((item) => ({
      ...item,
      product: {
        ...item.product,
        price: Number(item.product.price),
        originalPrice: Number(item.product.originalPrice),
      },
    })),
  };
}

export async function deleteCartItems(cartItemId: string) {
  const deleteItem = await prisma.cartItem.delete({
    where: { id: cartItemId },
  });
  return deleteItem;
}
