import SimilarItems from "~/components/SimilarItems";
import type { Route } from "./+types/shop";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Products" },
    { name: "description", content: "since 1650" },
  ];
}

export default function shop() {
  return <></>;
}
