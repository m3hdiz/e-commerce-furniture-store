import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "About Moon" },
    { name: "description", content: "since 1650" },
  ];
}

export default function about() {
  return <></>;
}
