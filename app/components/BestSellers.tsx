import ProductCard from "./ProductCard";

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
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur quam asperiores voluptas.",
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

const BestSellers = () => {
  return (
    <div className="py-10 px-5 md:py-20 md:px-[11vw]">
      <div className="max-w-[1110px] m-auto">
        <h2 className="font-semibold text-Heading-7 text-center uppercase pb-12">
          BEST SELLERS
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-2.5 md:gap-x-7.5 gap-y-10">
          {products.slice(0, 4).map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BestSellers;
