import type { Route } from "./+types/checkout";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Cart Checkout" },
    { name: "description", content: "billing details" },
  ];
}

export default function checkout() {
  return <></>;
}
