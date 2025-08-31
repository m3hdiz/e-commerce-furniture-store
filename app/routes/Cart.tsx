import type { Route } from "./+types/Cart";
import { useOutletContext } from "react-router";
import type { Product } from "~/models/types";
import CartComponent from "~/components/CartComponent";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Cart" },
    { name: "description", content: "billing details" },
  ];
}

export interface CartItem {
  id: string;
  cartId: string;
  productId: string;
  quantity: number;
  product: Product;
}

export interface Cart {
  id: string;
  userId: string;
  cartItems: CartItem[];
}

export default function Cart() {
  const context = useOutletContext<{ cart: Cart } | undefined>();

  if (!context || !context.cart) return <p>Loading cart...</p>;

  return <CartComponent cart={context.cart} />;
}
