import { Product } from "~/components/Product";
import SimilarItems from "~/components/SimilarItems";
import GetProduct from "~/models/GetProduct";
import type { Route } from "./+types/ProductPage";
import AllProducts from "~/models/AllPeoducts";

export async function loader({ params }: Route.LoaderArgs) {
  const { id } = params;

  if (!id) {
    return { error: "no item found." };
  }

  const data = await GetProduct(id);
  const similar = await AllProducts(); // fetch related products

  return { data, similar };
}

export default function ProductPage({ loaderData }: Route.ComponentProps) {
  if (!loaderData) {
    return <div>Loading...</div>;
  }

  if ("error" in loaderData) {
    return <div>Error: {loaderData.error}</div>;
  }
  // ✅ loaderData is now narrowed to the product type

  return (
    <div>
      <Product product={loaderData.data!} />
      <SimilarItems products={loaderData.similar} />
    </div>
  );
}
