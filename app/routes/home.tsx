import NewArrivals from "~/components/NewArrivals";
import BestSellers from "../components/BestSellers";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Moon" }, { name: "description", content: "since 1650" }];
}

export default function Home() {
  return (
    <>
      <BestSellers />
      <NewArrivals />
    </>
  );
}
