import * as React from "react";
import ProductCard from "./ProductCard";
import SortBy from "./SortBy";
import { Button } from "./ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

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

function useItemsPerPage() {
  const [itemsPerPage, setItemsPerPage] = React.useState(8); // default for SSR (mobile)

  React.useEffect(() => {
    const checkScreen = () => {
      if (window.matchMedia("(min-width: 768px)").matches) {
        setItemsPerPage(9); // md and up
      } else {
        setItemsPerPage(8); // mobile
      }
    };

    checkScreen(); // run on mount
    window.addEventListener("resize", checkScreen);

    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  return itemsPerPage;
}

export default function ProductPagination() {
  const [currentPage, setCurrentPage] = React.useState(1);
  const itemsPerPage = useItemsPerPage();

  // Calculate indexes
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  // Slice products for current page
  const currentItems = products.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(products.length / itemsPerPage);

  return (
    <div className="md:w-3/4">
      <div className="flex items-center gap-2 sm:text-sm text-xs justify-end mb-1">
        <p className="-mt-20 md:mt-0">Sort by:</p>
        <SortBy />
      </div>
      {/* Products grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-x-2.5 md:gap-x-7.5 gap-y-10">
        {currentItems.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
      {/* Pagination controls */}
      <div className="flex justify-end items-center gap-2 mt-10">
        <Button
          variant="ghost"
          disabled={currentPage === 1}
          onClick={() => setCurrentPage((prev) => prev - 1)}
        >
          <ChevronLeft />
        </Button>

        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentPage(index + 1)}
            className={`size-9 ${
              currentPage === index + 1
                ? "bg-warmBlack text-background dark:text-foreground"
                : "bg-background hover:ring"
            }`}
          >
            {index + 1}
          </button>
        ))}

        <Button
          variant="ghost"
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage((prev) => prev + 1)}
        >
          <ChevronRight />
        </Button>
      </div>
    </div>
  );
}
