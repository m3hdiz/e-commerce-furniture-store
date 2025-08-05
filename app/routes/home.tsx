import type { Route } from "./+types/home";
import NavBar from "../components/navBar";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Moon" }, { name: "description", content: "since 1650" }];
}

export default function Home() {
  return (
    <>
      <NavBar />
    </>
  );
}
