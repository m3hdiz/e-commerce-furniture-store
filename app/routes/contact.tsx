import GetInTouch from "~/components/GetInTouch";
import HeroContact from "~/components/HeroContact";
import type { Route } from "./+types/contact";
import map from "../src/map.svg";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Contact Us" },
    { name: "description", content: "since 1650" },
  ];
}

export default function contact() {
  return (
    <>
      <HeroContact />
      <GetInTouch />
      <section>
        <img className="m-auto" src={map} alt="" />
      </section>
    </>
  );
}
