import { Outlet } from "react-router";
import { requireUserId } from "~/utils/sessions.server";
import type { Route } from "../+types/root";

export async function loader({ request }: Route.LoaderArgs) {
  return await requireUserId(request);
}

const Protected = () => {
  return <Outlet />;
};

export default Protected;
