import type { Route } from "./+types/Shop";
import SideBarFiltration from "~/components/SideBarFiltration";
import ProductPagination from "~/components/ProductPagination";
import { ShopBreadcrumb } from "~/components/HeaderBreadcrumb";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Products" },
    { name: "description", content: "since 1650" },
  ];
}

export default function Shop() {
  return (
    <div className="px-5 mt-5 mb-20 sm:px-[11vw]">
      <div className="flex flex-col gap-12.5 justify-center mx-auto max-w-[1110px]">
        <ShopBreadcrumb />
        <div className="md:flex gap-x-6">
          <SideBarFiltration />
          <ProductPagination />
        </div>
      </div>
    </div>
  );
}
