import { Label } from "./ui/label";
import { useFetcher } from "react-router";
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

export default function SignupForm() {
  const SignupFetcher = useFetcher();

  return (
    <Card className="gap-6 my-3">
      <CardHeader>
        <CardTitle className="flex flex-col gap-2">Sign up</CardTitle>
        <CardDescription>
          Sign up a new account here. After submit, you&apos;ll be logged in.
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-6">
        <SignupFetcher.Form
          method="post"
          action="/login"
          id="signup-form"
          className="grid gap-6"
        >
          {/* <div className="grid gap-3">
            <Label htmlFor="username-reg">Username</Label>
            <Input
              id="username"
              name="username"
              type="text"
              placeholder="Your Username"
            />
          </div> */}
          <div className="grid gap-3">
            <Label htmlFor="email-reg">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="Your Email"
              required
            />
          </div>
          <div className="grid gap-3">
            <Label htmlFor="password-reg">Password</Label>
            <Input
              id="password-reg"
              name="password"
              type="password"
              placeholder="Your Password"
              required
            />
          </div>
          {/* <div className="grid gap-3">
            <Label htmlFor="confirm-password">Confirm Password</Label>
            <Input
              id="confirm-password"
              name="confirm-password"
              type="password"
              placeholder="Confirm Your Password"
            />
          </div> */}
        </SignupFetcher.Form>
      </CardContent>
      <CardFooter>
        <Button
          type="submit"
          name="action"
          value="register"
          form="signup-form"
          variant="solid"
          className="w-full"
        >
          {SignupFetcher.state !== "idle" ? "Signing Up..." : "Sign Up"}
        </Button>
      </CardFooter>
    </Card>
  );
}
