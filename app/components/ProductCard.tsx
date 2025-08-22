import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";

import Image from "../src/assets/Image.svg";
import { Button } from "./ui/button";

const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam saepe sed quam.",
    price: 199.99,
  },
  {
    id: 2,
    name: "Gaming Mouse",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam consequatur fugit ad quo numquam atque.",
    price: 49.99,
  },
  {
    id: 3,
    name: "Mechanical Keyboard",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur quam asperiores voluptas voluptate rem illo id quos atque quia soluta. ",
    price: 89.99,
  },
  {
    id: 4,
    name: "Smartwatch",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing. ",
    price: 149.99,
  },
  {
    id: 5,
    name: "Bluetooth Speaker",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam saepe sed quam.",
    price: 79.99,
  },
  {
    id: 6,
    name: "4K Monitor",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. In alias laboriosam cupiditate magni?",
    price: 329.99,
  },
  {
    id: 7,
    name: "Laptop Stand",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, doloremque ad.",
    price: 39.99,
  },
  {
    id: 8,
    name: "External SSD",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam saepe sed quam.",
    price: 159.99,
  },
  {
    id: 9,
    name: "Webcam",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam saepe sed quam.",
    price: 59.99,
  },
  {
    id: 10,
    name: "Wireless Charger",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam saepe sed quam.",
    price: 29.99,
  },
];

const ProductCard = () => {
  return (
    <>
      {products.slice(0, 8).map((product) => (
        <Card key={product.id} className="h-[500px] md:h-[530px]">
          <CardHeader>
            <img
              src={Image}
              alt="Small Ecru Ceramic Compote"
              className="w-full"
            ></img>
          </CardHeader>
          <CardTitle className="font-semibold text-Display-2 uppercase">
            {product.name} <br /> {product.price}
          </CardTitle>
          <CardDescription className="text-sm">{product.desc}</CardDescription>
          <CardFooter className="mt-auto">
            <CardAction className="w-full">
              <Button className="w-full" variant="newOutline">
                Add To Cart
              </Button>
            </CardAction>
          </CardFooter>
        </Card>
      ))}
    </>
  );
};

export default ProductCard;
