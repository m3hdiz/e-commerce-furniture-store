import type { Route } from "./+types/contact";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Contact Us" },
    { name: "description", content: "since 1650" },
  ];
}

export default function contact() {
  return <></>;
}
