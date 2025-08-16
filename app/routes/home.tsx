import type { Route } from "./+types/Home";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Moon" }, { name: "description", content: "since 1650" }];
}

export default function Home() {
  return <></>;
}
