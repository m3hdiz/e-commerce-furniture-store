import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";

import Image from "../src/assets/Image.svg";

const ProductCard = () => {
  return (
    <div>
      <Card className="border-none shadow-none !py-0 !px-0 !gap-0 min-h-[500px] ">
        <CardHeader className="!px-1 !py-2">
          <img
            src={Image}
            alt="Small Ecru Ceramic Compote"
            className="w-full"
          ></img>
          <CardTitle className="font-semibold text-sm text-warmBlack">
            Small Ecru Ceramic Compote
          </CardTitle>
          <CardContent className="px-0 font-semibold text-sm text-warmBlack ">
            $49.00
          </CardContent>
          <CardDescription className="text-sm text-neutral600 mt-2">
            Lorem ipsum dolor sit amet conse bolli tetur adipiscing elit.
          </CardDescription>
        </CardHeader>
        <CardFooter className="my-auto mx-0 py-4 px-2">
          <CardAction className="py-4 px-2 border font-semibold text-xs text-neutral800 w-full text-center  border-neutral800">
            Add To Cart
          </CardAction>
        </CardFooter>
      </Card>
    </div>
  );
};

export default ProductCard;
