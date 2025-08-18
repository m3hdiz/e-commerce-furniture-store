import Hero from "~/components/Hero";
import CustomerEmail from "~/components/CustomerEmail";
import HomePageHistory from "~/components/HomePageHistory";
import Menu from "~/components/Menu";
import OurBlog from "~/components/OurBlog";
import SpecialOffer from "~/components/SpecialOffer";
import NewArrivals from "~/components/NewArrivals";
import BestSellers from "../components/BestSellers";

import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Moon" }, { name: "description", content: "since 1650" }];
}

export default function Home() {
  return (
    <>
      <Hero />
      <CustomerEmail />
      <HomePageHistory />
      <Menu />
      <SpecialOffer />
      <OurBlog />
      <BestSellers />
      <NewArrivals />
    </>
  );
}
