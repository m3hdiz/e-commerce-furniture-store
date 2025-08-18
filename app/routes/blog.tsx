import ArticlesPagination from "~/components/ArticlesPagination";
import type { Route } from "./+types/blog";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Moon Blog" },
    { name: "description", content: "since 1650" },
  ];
}

export default function blog() {
  return (
    <>
      <ArticlesPagination />
    </>
  );
}
