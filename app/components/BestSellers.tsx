import ProductCard from "./ProductCard";

const BestSellers = () => {
  return (
    <div className="px-[11vw] ">
      <h2 className="text-center font-bold text-3xl text-neutral800 py-4 px-2">
        BEST SELLERS
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
};

export default BestSellers;
