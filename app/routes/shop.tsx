import type { Route } from "./+types/shop";
import SideBarFiltration from "~/components/SideBarFiltration";
import ProductPagination from "~/components/ProductPagination";
import { SignUp } from "~/models/signup.server";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Products" },
    { name: "description", content: "since 1650" },
  ];
}

export function action() {
  return SignUp();
}

export default function shop() {
  return (
    <>
      <div>breadcrumb</div>
      <div className="md:flex px-[11vw]">
        <SideBarFiltration />
        <ProductPagination />
      </div>
    </>
  );
}
