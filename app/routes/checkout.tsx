import PaymentSidebar from "~/components/PaymentSidebar";
import type { Route } from "./+types/checkout";
import BillingDetails from "~/components/BillingDetails";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Cart Checkout" },
    { name: "description", content: "billing details" },
  ];
}

export default function checkout() {
  return (
    <div className="p-5 sm:px-[11vw]">
      <section className="flex flex-col gap-10 max-w-[1110px] m-auto">
        <div>breadcrumb</div>
        <div>
          <p>Billing Details</p>
          <div className="sm:flex justify-between w-full">
            <div className="sm:basis-159.5">
              <BillingDetails />
            </div>
            <div className="sm:basis-104">
              <PaymentSidebar />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
