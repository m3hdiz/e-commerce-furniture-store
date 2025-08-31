import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";
import type { Product } from "../models/types";
import { Link, useFetcher } from "react-router";

export default function ProductCard(product: Product) {
  const CartFetcher = useFetcher();
  return (
    <Card key={product.id} className="md:h-130">
      <CardHeader>
        <Link to={`/item/${product.id}`}>
          <img
            src={product.imageUrl!}
            alt="Small Ecru Ceramic Compote"
            className="w-full"
          ></img>
        </Link>
      </CardHeader>
      <CardTitle className="font-semibold text-Display-2 uppercase py-6">
        {product.name} <br /> {product.price}
      </CardTitle>
      <CardDescription className="text-sm">
        {product.description}
      </CardDescription>
      <CardFooter className="mt-auto">
        <CardAction className="w-full">
          <CartFetcher.Form method="post" action="/cart">
            <input type="hidden" name="productId" value={product.id} />
            <input type="hidden" name="quantity" value={1} />
            <Button className="w-full mt-2" variant="newOutline">
              Add To Cart
            </Button>
          </CartFetcher.Form>
        </CardAction>
      </CardFooter>
    </Card>
  );
}
