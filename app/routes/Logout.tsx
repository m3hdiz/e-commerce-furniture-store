import { logout } from "~/utils/sessions.server";
import type { ActionFunctionArgs } from "react-router";
import { useFetcher } from "react-router";
import { Button } from "~/components/ui/button";

export async function action({ request }: ActionFunctionArgs) {
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
