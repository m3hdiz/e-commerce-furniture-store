import PaymentSidebar from "~/components/PaymentSidebar";
import type { Route } from "./+types/Checkout";
import { CheckoutBreadcrumb } from "~/components/HeaderBreadcrumb";
import { Outlet } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Cart Checkout" },
    { name: "description", content: "billing details" },
  ];
}

export default function checkout() {
  return (
    <div className="p-5 pb-20 sm:px-[11vw]">
      <section className="flex flex-col gap-12.5 max-w-[1110px] m-auto">
        <CheckoutBreadcrumb />
        <div>
          <p className="mb-10">Billing Details</p>
          <div className="lg:flex gap-x-14 gap-y-15 justify-between w-full">
            <div className="lg:flex-1">
              <Outlet />
            </div>
            <div className="lg:w-104 lg:flex-initial">
              <PaymentSidebar />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
