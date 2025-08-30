import CartComponent from "~/components/CartComponent";
import type { Route } from "./+types/Cart";
import { useOutletContext } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Cart" },
    { name: "description", content: "billing details" },
  ];
}

export default function cart() {
  const { cartItems } = useOutletContext<{ cartItems: any }>();
  return (
    <>
      <CartComponent cartItems={cartItems} />
    </>
  );
}
