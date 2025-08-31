import { Outlet, redirect, useLoaderData } from "react-router";
import { getUserInfo, requireUserId } from "~/utils/sessions.server";
import type { Route } from "../+types/root";
import { addToCart, getOrCreateCart } from "~/models/AddToCart";

export async function loader({ request }: Route.LoaderArgs) {
  const userId = await requireUserId(request);
  const cart = await getOrCreateCart(userId);
  return { cart };
}

export async function action({ request }: Route.ActionArgs) {
  const { userId } = await getUserInfo(request);
  if (!userId) return redirect("/login");

  const formData = await request.formData();
  const productId = formData.get("productId") as string;
  const quantity = Number(formData.get("quantity"));

  await addToCart({ userId, productId, quantity });

  return redirect("/cart");
}

const Protected = () => {
  const data = useLoaderData<{ cart: any }>();
  return <Outlet context={{ cart: data.cart }} />;
};

export default Protected;
