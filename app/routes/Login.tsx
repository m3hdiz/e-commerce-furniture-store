import { Tabs, TabsList, TabsTrigger, TabsContent } from "@radix-ui/react-tabs";
import type { ActionFunctionArgs } from "react-router";
import SigninForm from "~/components/SigninForm";
import SignupForm from "~/components/SignupForm";
import { handleSignin, handleSignup } from "~/utils/auth.server";

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  const actionType = formData.get("action");

  if (actionType === "login") return handleSignin(formData);
  if (actionType === "register") return handleSignup(formData);

  return { error: "Invalid action" };
}

export default function Login() {
  return (
    <div className="flex w-full max-w-lg flex-col gap-6 p-3 m-auto">
      <Tabs defaultValue="Sign in">
        <TabsList className="flex gap-5">
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
