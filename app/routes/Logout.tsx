import { logout } from "~/utils/sessions.server";
import { useFetcher } from "react-router";
import { Button } from "~/components/ui/button";
import type { Route } from "../+types/root";

export async function action({ request }: Route.ActionArgs) {
  return logout(request);
}

export default function Logout() {
  const fetcher = useFetcher();

  return (
    <fetcher.Form method="post" action="/logout">
      <Button type="submit" variant="newOutline" className="w-full">
        Logout
      </Button>
    </fetcher.Form>
  );
}
