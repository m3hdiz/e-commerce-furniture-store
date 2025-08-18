import React from "react";
import { Master, Paypal, Visa } from "~/src/icons/CreditCards";

const cartItems = [
  {
    id: 1,
    photo: "porcelain",
    Product: "Porcelain Dinner Plate (27cm)",
    Price: 59,
    subtotal: 98,
    Quantity: 2,
  },
  {
    id: 2,
    photo: "julo",
    Product: "Ophelia Matte Natural  Vase",
    Price: 168,
    subtotal: 68,
    Quantity: 1,
  },
  {
    id: 3,
    photo: "valo",
    Product: "Porcelain Dinner Plate",
    Price: 70,
    subtotal: 70,
    Quantity: 1,
  },
];

function calculateCartTotals(items, shipping: number) {
  const subtotal = items.reduce(
    (sum, item) => sum + item.Price * item.Quantity,
    0
  );
  const total = subtotal + shipping;

  return {
    subtotal,
    shipping,
    total,
  };
}

const shipping = 15;
const totals = calculateCartTotals(cartItems, shipping);

console.log(calculateCartTotals(cartItems, shipping));
// { subtotal: 356, shipping: 15, total: 371 }

export default function PaymentSidebar() {
  return (
    <section className="flex flex-col gap-10">
      <div className="flex flex-col gap-8">
        <div className="flex justify-between">
          <p>Product</p>
          <p>Subtotal</p>
        </div>
        <div>
          {cartItems.map((item) => (
            <div className="flex justify-between" key={item.id}>
              <p>{item.Product}</p>
              <p>
                {new Intl.NumberFormat("en-US", {
                  style: "currency",
                  currency: "USD",
                }).format(item.Price)}
              </p>
            </div>
          ))}
        </div>
        <div>
          <div className="flex justify-between">
            <p>Subtotal</p>
            <p>
              {new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
              }).format(totals.subtotal)}
            </p>
          </div>
          <div className="flex justify-between">
            <p>Shipping</p>
            <p>
              {new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
              }).format(totals.shipping)}
            </p>
          </div>
        </div>
        <div className="flex justify-between">
          <p>Totals</p>
          <p>
            {new Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "USD",
            }).format(totals.total)}
          </p>
        </div>
      </div>

      <div className="px-12.5 py-10 bg-warmBlack text-neutral100 flex flex-col gap-y-10">
        <p className="text-Display-5 font-medium">Payment</p>
        <div className="flex justify-between">
          <div>
            <button className="text-Paragraph-Default font-medium">
              Credit card
            </button>
          </div>
          <div className="flex gap-2.5">
            <button>
              <Visa />
            </button>
            <button>
              <Master />
            </button>
          </div>
        </div>
        <div className="grid sm:grid-cols-2 gap-5">
          <input
            type="text"
            id="CardNumber"
            name="CardNumber"
            placeholder="Card number"
            className="col-span-full"
          />
          <input
            type="text"
            id="NameOnCard"
            name="NameOnCard"
            placeholder="Name on card"
            className="col-span-full"
          />
          <input
            type="text"
            id="ExpirationDate"
            name="ExpirationDate"
            placeholder="Expiration date  (MM/YY)"
            className="max-sm:col-span-full"
          />
          <input
            type="text"
            id="SecurityCode"
            name="SecurityCode"
            placeholder="Security code"
            className="max-sm:col-span-full"
          />
        </div>
        <button className="text-Paragraph-Default font-medium">
          <Paypal />
        </button>
        <button className="border border-neutral400">Place order</button>
      </div>
    </section>
  );
}
