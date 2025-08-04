import { Button } from "~/components/ui/button";
import type { Route } from "./+types/about";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "About Moon" },
    { name: "description", content: "since 1650" },
  ];
}

export default function about() {
  return <></>;
}
