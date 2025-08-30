import type { Route } from "./+types/Home";
import Hero from "~/components/Hero";
import CustomerEmail from "~/components/CustomerEmail";
import HomePageHistory from "~/components/HomePageHistory";
import OurBlog from "~/components/OurBlog";
import SpecialOffer from "~/components/SpecialOffer";
import NewArrivals from "~/components/NewArrivals";
import BestSellers from "../components/BestSellers";
import HomePageMenu from "~/components/HomePageMenu";
import AllProducts from "~/models/AllPeoducts";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Moon" }, { name: "description", content: "since 1650" }];
}

export async function loader() {
  const Products = await AllProducts();
  return Products;
}

export default function Home({ loaderData }: Route.ComponentProps) {
  return (
    <>
      <Hero />
      <HomePageMenu />
      <SpecialOffer />
      <BestSellers products={loaderData} />
      <HomePageHistory />
      <NewArrivals products={loaderData} />
      <OurBlog />
      <CustomerEmail />
    </>
  );
}
