import ProductCard from "./ProductCard";
import type { Product } from "../models/types";

interface BestSellersProps {
  products: Product[];
}

const BestSellers: React.FC<BestSellersProps> = ({ products }) => {
  return (
    <div className="py-10 px-5 md:py-20 md:px-[11vw]">
      <div className="max-w-[1110px] m-auto">
        <h2 className="font-semibold text-Heading-7 text-center uppercase pb-12">
          BEST SELLERS
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-2.5 md:gap-x-7.5 gap-y-10">
          {products &&
            products
              .slice(4, 12)
              .map((product) => <ProductCard key={product.id} {...product} />)}
        </div>
      </div>
    </div>
  );
};

export default BestSellers;
