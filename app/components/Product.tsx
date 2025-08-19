import thumb from "../src/marin-blue-salad-plate.svg";
import A from "../src/image 142.svg";
import B from "../src/image 143.svg";
import C from "../src/image 144.svg";
import D from "../src/image 146.svg";
import E from "../src/image 147.svg";
import React from "react";
import Heart from "~/src/icons/heart";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import {
  Facebook,
  Instagram,
  LinkedIn,
  Twitter,
} from "~/src/icons/SocialIcons";
import { ProductBreadcrumb } from "./HeaderBreadcrumb";

export default function Product() {
  const product = {
    id: 1,
    title: "Marin White Dinner Plate",
    price: 35,
    originalPrice: 50,
    color: [
      { name: "Blue", code: "#A1B8BE" },
      { name: "White", code: "#FFFFFF" },
      { name: "Orange", code: "#C88242" },
      { name: "Black", code: "#212F39" },
      { name: "Pink", code: "#DCB9A8" },
      { name: "Green", code: "#A7B2A3" },
    ],
    rating: 4,
    reviews: 1256,
    stock: "in stock",
    quantity: 1,
    thumbnail: thumb,
    photos: [A, B, C, D, E],
  };
  const [selectedColor, setSelectedColor] = React.useState<string>(
    product.color[0].name
  );

  const [quantity, setQuantity] = React.useState(1);

  let quantityAlert = "";

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
    <div className="px-5 py-5 sm:px-[11vw]">
      <section className="flex flex-col gap-10 max-w-[1110px] m-auto">
        <ProductBreadcrumb title={product.title} />
        <div className="grid md:grid-cols-2 gap-y-10 md:gap-x-15">
          <div className="flex flex-col gap-8 max-w-[516px]">
            <img src={product.thumbnail} alt={product.title} />
            <div className="flex gap-1 h-25 overflow-x-auto">
              {product.photos.map((photo, index) => (
                <img key={index} src={photo} alt="" />
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-12 pt-2.5 pb-7.5">
            <div className="flex flex-col gap-5">
              <p className="text-Display-5 font-semibold uppercase">
                {product.title}
              </p>
              <div className="flex gap-10">
                <div className="flex gap-4 text-Paragraph-Medium">
                  <p className="text-lightBrown">
                    {Array(5)
                      .fill()
                      .map((_, i) => (
                        <span key={i}>{i < product.rating ? "★" : "☆"}</span>
                      ))}
                  </p>
                  <p>({product.reviews} Reviews)</p>
                </div>
                <div className="text-Paragraph-Medium">
                  Stock:{" "}
                  <span className="text-lightBrown">{product.stock}</span>
                </div>
              </div>
              <div className="flex gap-4 text-Display-6">
                <p>
                  {new Intl.NumberFormat("en-US", {
                    style: "currency",
                    currency: "USD",
                    minimumFractionDigits: 0,
                    maximumFractionDigits: 0,
                  }).format(product.price)}
                </p>
                <p className="text-neutral400 dark:text-neutral600">
                  {new Intl.NumberFormat("en-US", {
                    style: "currency",
                    currency: "USD",
                    minimumFractionDigits: 0,
                    maximumFractionDigits: 0,
                  }).format(product.originalPrice)}
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div>Color: {selectedColor}</div>
              <div className="flex items-center gap-1">
                {product.color.map((color, index) => (
                  <div
                    key={index}
                    className={`cursor-pointer p-1 ${selectedColor === color.name ? "border-2 border-warmBlack dark:border-neutral600" : ""}`}
                    onClick={() => setSelectedColor(color.name)}
                  >
                    <div
                      key={index}
                      style={{
                        backgroundColor: color.code,
                        width: "36px",
                        height: "36px",
                        border: "1px solid #D1D5DB",
                      }}
                    ></div>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-2.5">
              <div className="flex items-center gap-2.5">
                <div className="border border-warmBlack dark:border-neutral600 h-12 w-40 flex items-center justify-between px-3">
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
                    {quantity}
                  </span>

                  <button
                    onClick={handleIncrement}
                    disabled={quantity === 20}
                    className={`text-xl ${quantity === 20 ? "opacity-50 cursor-not-allowed" : "hover:text-lightBrown cursor-pointer"}`}
                  >
                    +
                  </button>
                </div>
                <button className="h-12 w-full border text-Display-2 uppercase font-semibold">
                  ADD TO CART
                </button>
              </div>
              <div className="flex items-center gap-2.5">
                <button className="border border-warmBlack dark:border-neutral600 text-Display-2 uppercase font-semibold h-12 w-full flex items-center justify-center px-3">
                  buy now
                </button>
                <button className="border border-warmBlack dark:border-neutral600 text-Display-2 uppercase font-semibold h-12 w-12 flex items-center justify-center">
                  <Heart />
                </button>
              </div>
              {quantity === 20 && (
                <p className="text-red-500 animate-bounce text-sm">
                  Maximum value is 20!
                </p>
              )}
            </div>
            <div className="flex flex-col gap-4">
              <div className="text-Display-3 font-semibold">Share this:</div>
              <div className="flex items-center gap-4">
                {" "}
                {/* share should work */}
                <Facebook />
                <Twitter />
                <Instagram />
                <LinkedIn />
              </div>
            </div>

            <div>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>Details</AccordionTrigger>
                  <AccordionContent className="flex flex-col gap-4 text-balance">
                    <p>
                      Our flagship product combines cutting-edge technology with
                      sleek design. Built with premium materials, it offers
                      unparalleled performance and reliability.
                    </p>
                    <p>
                      Key features include advanced processing capabilities, and
                      an intuitive user interface designed for both beginners
                      and experts.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>Dimensions</AccordionTrigger>
                  <AccordionContent className="flex flex-col gap-4 text-balance">
                    <p>
                      We offer worldwide shipping through trusted courier
                      partners. Standard delivery takes 3-5 business days, while
                      express shipping ensures delivery within 1-2 business
                      days.
                    </p>
                    <p>
                      All orders are carefully packaged and fully insured. Track
                      your shipment in real-time through our dedicated tracking
                      portal.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>Reviews</AccordionTrigger>
                  <AccordionContent className="flex flex-col gap-4 text-balance">
                    <p>
                      We stand behind our products with a comprehensive 30-day
                      return policy. If you&apos;re not completely satisfied,
                      simply return the item in its original condition.
                    </p>
                    <p>
                      Our hassle-free return process includes free return
                      shipping and full refunds processed within 48 hours of
                      receiving the returned item.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
