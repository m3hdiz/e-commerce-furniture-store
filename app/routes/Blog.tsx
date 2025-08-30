import SliderBlog from "~/components/SliderBlog";
import type { Route } from "./+types/Blog";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Moon Blog" },
    { name: "description", content: "since 1650" },
  ];
}

export default function blog() {
  return (
    <>
      <SliderBlog />
    </>
  );
}
