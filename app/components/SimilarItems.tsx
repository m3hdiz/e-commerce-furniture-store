import ProductCard from "./ProductCar";

const SimilarItems = () => {
  return (
    <>
      <h2 className="font-bold text-4xl text-neutral-800">SIMILAR ITEMS</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 ">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </>
  );
};

export default SimilarItems;
