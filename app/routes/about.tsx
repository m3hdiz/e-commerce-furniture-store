import HowWeWork from "../components/HowWeWork";
import type { Route } from "./+types/about";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "About Moon" },
    { name: "description", content: "since 1650" },
  ];
}

export default function about() {
  return (
    <>
      <HowWeWork />
    </>
  );
}
