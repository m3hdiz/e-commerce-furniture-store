import { Tabs, TabsList, TabsTrigger, TabsContent } from "@radix-ui/react-tabs";
import type { ActionFunctionArgs } from "react-router";
import SigninForm from "~/components/SigninForm";
import SignupForm from "~/components/SignupForm";
import { handleAuth } from "~/utils/auth.server";

export async function action({ request }: ActionFunctionArgs) {
  const url = new URL(request.url);
  const redirectTo = url.searchParams.get("redirectTo") ?? "/";
  const result = await handleAuth(request, { redirectTo });
  if (!result) return { errors: "Invalid login", status: 400 };
  return result;
}

export default function Login() {
  return (
    <div className="flex w-full max-w-lg flex-col gap-6 p-3 m-auto">
      <Tabs defaultValue="Sign in">
        <TabsList>
          <TabsTrigger value="Sign in">Sign in</TabsTrigger>
          <TabsTrigger value="Sign up">Sign up</TabsTrigger>
        </TabsList>
        <TabsContent value="Sign in">
          <SigninForm />
        </TabsContent>
        <TabsContent value="Sign up">
          <SignupForm />
        </TabsContent>
      </Tabs>
    </div>
  );
}
