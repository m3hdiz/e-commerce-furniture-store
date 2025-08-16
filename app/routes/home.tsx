import type { Route } from "./+types/Home";
import Product from "../components/Product";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Moon" }, { name: "description", content: "since 1650" }];
}

export default function Home() {
  return (
    <>
      <Product />
    </>
  );
}
