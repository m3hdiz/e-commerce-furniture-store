import Cart from "~/components/Cart";
import type { Route } from "./+types/Cart";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Cart" },
    { name: "description", content: "billing details" },
  ];
}

export default function cart() {
  return (
    <>
      <Cart />
    </>
  );
}
