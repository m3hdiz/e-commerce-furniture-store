import type { Route } from "./+types/Login";
import { Form } from "react-router";

export async function action({ request }: Route.ActionArgs) {
  const formData = await request.formData();
}
export default function Login() {
  return;
  <Form method="post" className="mx-auto h-screen">
    <input type="text" name="email" placeholder="Email" className="w-full" />
  </Form>;
}
