import type { Route } from "./+types/home";
import Hero from "~/components/Hero";
import CustomerEmail from "~/components/CustomerEmail";
import HomePageHistory from "~/components/HomePageHistory";
import OurBlog from "~/components/OurBlog";
import SpecialOffer from "~/components/SpecialOffer";
import NewArrivals from "~/components/NewArrivals";
import BestSellers from "../components/BestSellers";
import HomePageMenu from "~/components/HomePageMenu";
import AllProducts from "~/models/AllPeoduct";
import { useLoaderData } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Moon" }, { name: "description", content: "since 1650" }];
}

export async function loader() {
  const Products = await AllProducts();
  return Products;
}

export default function Home() {
  const products = useLoaderData<typeof loader>();
  return (
    <>
      <Hero />
      <HomePageMenu />
      <SpecialOffer />
      <BestSellers products={products} />
      <HomePageHistory />
      <NewArrivals products={products} />
      <OurBlog />
      <CustomerEmail />
    </>
  );
}
