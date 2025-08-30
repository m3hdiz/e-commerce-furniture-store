import MeetOurTeam from "~/components/MeetOurTeam";
import AboutMoon from "~/components/AboutMoon";
import HowWeWork from "../components/HowWeWork";
import AboutPageHistory from "~/components/aboutPageHistory";
import type { Route } from "./+types/About";
import CustomerEmail from "~/components/CustomerEmail";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "About Moon" },
    { name: "description", content: "since 1650" },
  ];
}

export default function about() {
  return (
    <>
      <AboutMoon />
      <AboutPageHistory />
      <HowWeWork />
      <MeetOurTeam />
      <CustomerEmail />
    </>
  );
}
