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
import { Link } from "react-router";

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
                      <img src={item.photo} alt={item.Product} className="" />
                    </TableCell>
                    <TableCell>{item.Product}</TableCell>
                    <TableCell>
                      {new Intl.NumberFormat("en-US", {
                        style: "currency",
                        currency: "USD",
                      }).format(item.Price)}
                    </TableCell>
                    <TableCell>{item.Quantity}</TableCell>
                    <TableCell className="text-lightBrown">
                      {new Intl.NumberFormat("en-US", {
                        style: "currency",
                        currency: "USD",
                      }).format(item.subtotal)}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="md:hidden grid grid-cols-2 gap-y-5 py-7.5 uppercase"
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
              <div className="text-right">{item.Quantity}</div>
              <p>subtotal:</p>
              <div className="text-lightBrown text-right">
                {new Intl.NumberFormat("en-US", {
                  style: "currency",
                  currency: "USD",
                }).format(item.subtotal)}
              </div>
            </div>
          ))}
          <div className="flex flex-col gap-2.5 md:flex-row md:justify-between">
            <div className="flex gap-2.5 max-md:hidden">
              <input type="text" />
              <button>Apply Coupon</button>
            </div>
            <input className="md:hidden" type="text" />
            <button className="md:hidden">Apply Coupon</button>
            <button className="">Update cart</button>
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
              <Link to="/checkout">
                <Button
                  variant="newOutline"
                  className="w-full h-12 border-neutral400"
                >
                  Proceed to checkout
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
