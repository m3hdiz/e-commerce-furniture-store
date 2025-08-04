import type { Route } from "./+types/cart";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Cart" },
    { name: "description", content: "billing details" },
  ];
}

export default function cart() {
  return <></>;
}
