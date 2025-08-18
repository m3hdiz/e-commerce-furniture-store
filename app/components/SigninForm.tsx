import { Label } from "./ui/label";
import { useFetcher, type ActionFunctionArgs } from "react-router";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "./ui/card";

export default function SigninForm() {
  const SigninFetcher = useFetcher();

  return (
    <Card>
      <CardHeader>
        <CardTitle>Sign in</CardTitle>
        <CardDescription>
          You can Sign in to your account here. If you don&apos;t have an
          account yet you can Sign up.
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-6">
        <SigninFetcher.Form
          method="post"
          id="signin-form"
          className="grid gap-6"
        >
          <div className="grid gap-3">
            <Label htmlFor="username">Username</Label>
            <Input
              id="username"
              name="username"
              type="text"
              placeholder="Your Username"
              required
            />
          </div>
          <div className="grid gap-3">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              name="password"
              type="password"
              placeholder="Your Password"
              required
            />
          </div>
        </SigninFetcher.Form>
      </CardContent>
      <CardFooter>
        <Button
          type="submit"
          form="signin-form"
          variant="solid"
          className="w-full"
        >
          {SigninFetcher.state !== "idle" ? "Signing In..." : "Sign In"}
        </Button>
      </CardFooter>
    </Card>
  );
}
