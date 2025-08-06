import ProductCard from "./ProductCard";

const NewArrivals = () => {
  return (
    <div className="px-[11vw] ">
      <h2 className="text-center font-bold text-lg sm:text-3xl text-neutral800 py-4 px-2 ">
        DISCOVER NEW ARRIVALS
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
};

export default NewArrivals;
