import type { Route } from "./+types/Home";
import Hero from "~/components/Hero";
import CustomerEmail from "~/components/CustomerEmail";
import HomePageHistory from "~/components/HomePageHistory";
import OurBlog from "~/components/OurBlog";
import SpecialOffer from "~/components/SpecialOffer";
import NewArrivals from "~/components/NewArrivals";
import BestSellers from "../components/BestSellers";
import HomePageMenu from "~/components/HomePageMenu";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Moon" }, { name: "description", content: "since 1650" }];
}

export default function Home() {
  return (
    <>
      <Hero />
      <HomePageMenu />
      <SpecialOffer />
      <BestSellers />
      <HomePageHistory />
      <NewArrivals />
      <OurBlog />
      <CustomerEmail />
    </>
  );
}
