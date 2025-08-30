import GetInTouch from "~/components/GetInTouch";
import HeroContact from "~/components/HeroContact";
import type { Route } from "./+types/Contact";
import Map from "~/components/Map";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Contact Us" },
    { name: "description", content: "since 1650" },
  ];
}

export default function Contact() {
  return (
    <>
      <HeroContact />
      <GetInTouch />
      <Map />
    </>
  );
}
