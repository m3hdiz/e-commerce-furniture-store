import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import Trash from "~/src/icons/Trash";
import porcelain from "~/src/porcelain-dinner-plate.svg";
import julo from "~/src/julo-blue-salad-plate.svg";
import valo from "~/src/valo-matte-white-vase.svg";
import DeleteIcon from "~/src/icons/DeleteIcon";
import { CartBreadcrumb } from "./HeaderBreadcrumb";
import { Button } from "./ui/button";
import { NavLink } from "react-router";
import React from "react";
import { Separator } from "./ui/separator";
import { Input } from "./ui/input";

const cartItems = [
  {
    id: 1,
    photo: porcelain,
    Product: "Porcelain Dinner Plate (27cm)",
    Price: 59,
    subtotal: 98,
    Quantity: 2,
  },
  {
    id: 2,
    photo: julo,
    Product: "Ophelia Matte Natural  Vase",
    Price: 168,
    subtotal: 68,
    Quantity: 1,
  },
  {
    id: 3,
    photo: valo,
    Product: "Porcelain Dinner Plate",
    Price: 70,
    subtotal: 70,
    Quantity: 1,
  },
];

function calculateCartTotals(items, taxRatePercent: Number) {
  const subtotal = items.reduce(
    (sum, item) => sum + item.Price * item.Quantity,
    0
  );
  const tax = subtotal * (taxRatePercent / 100);
  const total = subtotal + tax;

  return {
    subtotal,
    tax,
    total,
  };
}

const taxRate = 8; // for example, 8% tax
const totals = calculateCartTotals(cartItems, taxRate);

export default function Cart() {
  const [quantity, setQuantity] = React.useState(1);

  const handleIncrement = () => {
    if (quantity < 20) {
      setQuantity(quantity + 1);
    }
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="px-5 mt-5 mb-20 sm:px-[11vw]">
      <section className="flex flex-col gap-12.5 justify-center mx-auto max-w-[1110px]">
        <CartBreadcrumb />
        <div className="space-y-10 space-x-0">
          <p className="text-Display-6 font-medium">
            Cart ({cartItems.length} item)
          </p>
          <div>
            <Table className="max-md:hidden">
              <TableHeader className="bg-warmBlack">
                <TableRow>
                  <TableHead className="flex justify-center">
                    <button className="cursor-pointer">
                      <Trash />
                    </button>
                  </TableHead>
                  <TableHead className="text-center w-[100px] text-background dark:text-foreground">
                    photo
                  </TableHead>
                  <TableHead className="text-center text-background dark:text-foreground">
                    Product
                  </TableHead>
                  <TableHead className="text-center text-background dark:text-foreground">
                    price
                  </TableHead>
                  <TableHead className="text-center text-background dark:text-foreground">
                    quantity
                  </TableHead>
                  <TableHead className="text-center text-background dark:text-foreground">
                    subtotal
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {cartItems.map((item) => (
                  <TableRow key={item.id}>
                    <TableCell>
                      <button className="cursor-pointer">
                        <DeleteIcon />
                      </button>
                    </TableCell>
                    <TableCell className="h-35 w-30">
                      <img src={item.photo} alt={item.Product} />
                    </TableCell>
                    <TableCell>{item.Product}</TableCell>
                    <TableCell>
                      {new Intl.NumberFormat("en-US", {
                        style: "currency",
                        currency: "USD",
                      }).format(item.Price)}
                    </TableCell>
                    <TableCell>
                      <div className="border m-auto border-warmBlack dark:border-neutral600 h-12 w-32.5 flex items-center justify-between px-3">
                        <button
                          onClick={handleDecrement}
                          disabled={quantity === 1}
                          className={`text-xl ${
                            quantity === 1
                              ? "opacity-50 cursor-not-allowed"
                              : "hover:text-lightBrown cursor-pointer"
                          }`}
                        >
                          −
                        </button>

                        <span className="text-Display-2 uppercase font-semibold">
                          {item.Quantity}
                        </span>

                        <button
                          onClick={handleIncrement}
                          disabled={quantity === 20}
                          className={`text-xl ${quantity === 20 ? "opacity-50 cursor-not-allowed" : "hover:text-lightBrown cursor-pointer"}`}
                        >
                          +
                        </button>
                      </div>
                    </TableCell>
                    <TableCell className="text-lightBrown">
                      {new Intl.NumberFormat("en-US", {
                        style: "currency",
                        currency: "USD",
                      }).format(item.subtotal)}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
              <Separator />
            </Table>
          </div>
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="md:hidden grid grid-cols-2 gap-y-5 uppercase"
            >
              <div className="col-span-2">
                <button className="cursor-pointer">
                  <DeleteIcon />
                </button>
              </div>
              <div className="col-span-2 flex gap-5 items-center">
                <div className="h-35 w-30">
                  <img src={item.photo} alt={item.Product} className="" />
                </div>
                <div>{item.Product}</div>
              </div>
              <p>Price:</p>
              <div className="text-right">
                {new Intl.NumberFormat("en-US", {
                  style: "currency",
                  currency: "USD",
                }).format(item.Price)}
              </div>
              <p>Quantity:</p>
              <div className="border border-warmBlack dark:border-neutral600 h-12 w-32.5 flex items-center justify-between px-3 justify-self-end">
                <button
                  onClick={handleDecrement}
                  disabled={quantity === 1}
                  className={`text-xl ${
                    quantity === 1
                      ? "opacity-50 cursor-not-allowed"
                      : "hover:text-lightBrown cursor-pointer"
                  }`}
                >
                  −
                </button>

                <span className="text-Display-2 uppercase font-semibold">
                  {item.Quantity}
                </span>

                <button
                  onClick={handleIncrement}
                  disabled={quantity === 20}
                  className={`text-xl ${quantity === 20 ? "opacity-50 cursor-not-allowed" : "hover:text-lightBrown cursor-pointer"}`}
                >
                  +
                </button>
              </div>
              <p>subtotal:</p>
              <div className="text-lightBrown text-right">
                {new Intl.NumberFormat("en-US", {
                  style: "currency",
                  currency: "USD",
                }).format(item.subtotal)}
              </div>
              <Separator className="bg-foreground col-span-2" />
            </div>
          ))}
          <div className="flex flex-col gap-2.5 md:flex-row md:justify-between md:h-12">
            <div className="flex gap-2.5 max-md:hidden w-[382px]">
              <Input
                placeholder="Coupon code"
                type="text"
                className="w-[206px] h-full"
              />
              <Button variant="solid" className="h-full">
                Apply Coupon
              </Button>
            </div>
            <Input
              placeholder="Coupon code"
              className="md:hidden"
              type="text"
            />
            <Button variant="solid" className="md:hidden w-full h-full">
              Apply Coupon
            </Button>
            <Button variant="solid" className="h-full w-55">
              Update cart
            </Button>
          </div>
          <div className="md:grid md:grid-cols-2">
            <div className="px-12.5 py-10 bg-warmBlack text-neutral100 flex flex-col gap-y-10 md:col-start-2">
              <p className="text-Display-5 font-medium">Cart totals</p>
              <div className="grid grid-cols-2">
                <p className="text-Display-3 font-medium">Subtotal</p>
                <p className="text-right">
                  {new Intl.NumberFormat("en-US", {
                    style: "currency",
                    currency: "USD",
                  }).format(totals.subtotal)}
                </p>
                <p className="text-Display-3 font-medium">Cart totals</p>
                <p className="text-right">
                  {new Intl.NumberFormat("en-US", {
                    style: "currency",
                    currency: "USD",
                  }).format(totals.total)}
                </p>
              </div>
              <NavLink to="/checkout" prefetch="intent">
                {({ isPending }) => (
                  <Button
                    variant="newOutline"
                    className="w-full h-12 border-neutral400"
                  >
                    {isPending
                      ? "Proceeding to checkout..."
                      : "Proceed to checkout"}
                  </Button>
                )}
              </NavLink>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
