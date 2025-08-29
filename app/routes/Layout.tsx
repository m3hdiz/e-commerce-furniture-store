import NavBar from "~/components/NavBar";
import Footer from "~/components/Footer";
import { Outlet, useLoaderData } from "react-router";
import { getUserInfo } from "~/utils/sessions.server";
import type { Route } from "../+types/root";

export async function loader({ request }: Route.LoaderArgs) {
  const { userId, fullName } = await getUserInfo(request);
  return { userId, fullName };
}

export default function Layout() {
  const { userId, fullName } = useLoaderData<typeof loader>();
  return (
    <>
      <NavBar userId={userId} fullName={fullName} />
      <Outlet />
      <Footer />
    </>
  );
}
