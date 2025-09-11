import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "../components/ui/tabs";
import SigninForm from "~/components/SigninForm";
import SignupForm from "~/components/SignupForm";
import { handleSignin, handleSignup } from "~/utils/auth.server";

export async function action({ request }: { request: Request }) {
  const url = new URL(request.url);
  const redirectTo = url.searchParams.get("redirectTo") ?? "/";

  const formData = await request.formData();
  const actionType = formData.get("action");

  if (actionType === "register") {
    return handleSignup(formData, redirectTo);
  }

  if (actionType === "login") {
    return handleSignin(formData, redirectTo);
  }

  return { error: "Invalid action" };
}
export default function Login() {
  return (
    <div className="flex w-lg flex-col gap-6 p-3 m-auto my-20">
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
