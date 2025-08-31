import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import Trash from "~/src/icons/Trash";
import DeleteIcon from "~/src/icons/DeleteIcon";
import { CartBreadcrumb } from "./HeaderBreadcrumb";
import { Button } from "./ui/button";
import { NavLink } from "react-router";
import { Separator } from "./ui/separator";
import { Input } from "./ui/input";
import type { Product } from "~/models/types";
import { useState } from "react";

interface CartProps {
  cart?: {
    id: string;
    userId: string;
    cartItems: {
      id: string;
      productId: string;
      quantity: number;
      product: Product;
    }[];
  };
}

export default function CartComponent({ cart }: CartProps) {
  const [cartItems, setCartItems] = useState(cart?.cartItems ?? []);

  const handleIncrement = (id: string) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.min(item.quantity + 1, 20) }
          : item
      )
    );
  };

  const handleDecrement = (id: string) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(item.quantity - 1, 1) }
          : item
      )
    );
  };

  const handleDelete = async (cartItemId: string) => {
    try {
      setCartItems((items) => items.filter((item) => item.id !== cartItemId));
    } catch (error) {
      console.error(error);
      alert("Failed to delete cart item");
    }
  };

  if (!cart || cartItems.length === 0) {
    return (
      <div className="px-5 mt-5 mb-20 sm:px-[11vw]">
        <CartBreadcrumb />
        <p className="text-center m-auto flex justify-center items-center h-60">
          Cart is empty
        </p>
      </div>
    );
  }

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
                      <button
                        className="cursor-pointer"
                        onClick={() => handleDelete(item.id)}
                      >
                        <DeleteIcon />
                      </button>
                    </TableCell>
                    <TableCell className="h-35 w-30">
                      <img
                        src={item.product.imageUrl || item.product.name}
                        alt={item.product.name}
                      />
                    </TableCell>
                    <TableCell>{item.product.name}</TableCell>
                    <TableCell>
                      {new Intl.NumberFormat("en-US", {
                        style: "currency",
                        currency: "USD",
                      }).format(
                        item.product?.price
                          ? parseFloat(item.product.price.toString())
                          : 0
                      )}
                    </TableCell>
                    <TableCell>
                      <div className="border m-auto border-warmBlack dark:border-neutral600 h-12 w-32.5 flex items-center justify-between px-3">
                        <button
                          onClick={() => handleDecrement(item.id)}
                          disabled={item.quantity === 1}
                          className={`text-xl ${
                            item.quantity === 1
                              ? "opacity-50 cursor-not-allowed"
                              : "hover:text-lightBrown cursor-pointer"
                          }`}
                        >
                          −
                        </button>

                        <span className="text-Display-2 uppercase font-semibold">
                          {item.quantity}
                        </span>

                        <button
                          onClick={() => handleIncrement(item.id)}
                          disabled={item.quantity === 20}
                          className={`text-xl ${
                            item.quantity === 20
                              ? "opacity-50 cursor-not-allowed"
                              : "hover:text-lightBrown cursor-pointer"
                          }`}
                        >
                          +
                        </button>
                      </div>
                    </TableCell>
                    <TableCell className="text-lightBrown">
                      {new Intl.NumberFormat("en-US", {
                        style: "currency",
                        currency: "USD",
                      }).format(
                        Number(item.product?.price?.toString() ?? 0) *
                          Number(item.quantity ?? 1)
                      )}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
              <Separator />
            </Table>
          </div>

          {/* Mobile Cards */}
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="md:hidden grid grid-cols-2 gap-y-5 uppercase"
            >
              <div className="col-span-2">
                <button
                  className="cursor-pointer"
                  onClick={() => handleDelete(item.id)}
                >
                  <DeleteIcon />
                </button>
              </div>
              <div className="col-span-2 flex gap-5 items-center">
                <div className="h-35 w-30">
                  <img
                    src={item.product.imageUrl ?? "/placeholder-image.svg"}
                    alt={item.product.name ?? "Product image"}
                  />
                </div>
                <div>{item.product.name}</div>
              </div>
              <p>Price:</p>
              <div className="text-right">
                {new Intl.NumberFormat("en-US", {
                  style: "currency",
                  currency: "USD",
                }).format(item.product.price)}
              </div>
              <p>Quantity:</p>
              <div className="border border-warmBlack dark:border-neutral600 h-12 w-32.5 flex items-center justify-between px-3 justify-self-end">
                <button
                  onClick={() => handleDecrement(item.id)}
                  disabled={item.quantity === 1}
                  className={`text-xl ${
                    item.quantity === 1
                      ? "opacity-50 cursor-not-allowed"
                      : "hover:text-lightBrown cursor-pointer"
                  }`}
                >
                  −
                </button>

                <span className="text-Display-2 uppercase font-semibold">
                  {item.quantity}
                </span>

                <button
                  onClick={() => handleIncrement(item.id)}
                  disabled={item.quantity === 20}
                  className={`text-xl ${
                    item.quantity === 20
                      ? "opacity-50 cursor-not-allowed"
                      : "hover:text-lightBrown cursor-pointer"
                  }`}
                >
                  +
                </button>
              </div>
              <p>subtotal:</p>
              <div className="text-lightBrown text-right">
                {new Intl.NumberFormat("en-US", {
                  style: "currency",
                  currency: "USD",
                }).format(
                  Number(item.product?.price?.toString() ?? 0) *
                    Number(item.quantity ?? 1)
                )}
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
                <p className="text-right">{/* محاسبه subtotal */}</p>
                <p className="text-Display-3 font-medium">Cart totals</p>
                <p className="text-right">{/* محاسبه total */}</p>
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
