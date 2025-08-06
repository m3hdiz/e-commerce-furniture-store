import { Hero } from "~/components/Hero";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Moon" }, { name: "description", content: "since 1650" }];
}

export default function Home() {
  return <>
  <Hero />
  </>;
}
