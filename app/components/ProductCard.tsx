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

type product = {
  id: number;
  name: string;
  desc: string;
  price: number;
};

const ProductCard = (product: product) => {
  return (
    <Card key={product.id} className="md:h-130">
      <CardHeader>
        <img
          src={Image}
          alt="Small Ecru Ceramic Compote"
          className="w-full"
        ></img>
      </CardHeader>
      <CardTitle className="font-semibold text-Display-2 uppercase py-6">
        {product.name} <br /> {product.price}
      </CardTitle>
      <CardDescription className="text-sm">{product.desc}</CardDescription>
      <CardFooter className="mt-auto">
        <CardAction className="w-full">
          <Button className="w-full mt-2" variant="newOutline">
            Add To Cart
          </Button>
        </CardAction>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
