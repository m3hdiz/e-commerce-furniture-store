import { useFetcher } from "react-router";
import { Button } from "./ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "./ui/card";
import TextField from "./TextField";
import { useActionData } from "react-router";
import { useState } from "react";

export default function SignupForm() {
  const SignupFetcher = useFetcher();
  const actionData = useActionData();
  const [formData, setFormData] = useState({
    email: actionData?.fields?.email || "",
    name: actionData?.fields?.name || "",
    password: actionData?.fields?.password || "",
    confirmPassword: actionData?.fields?.confirmPassword || "",
  });
  const handleChangeInput = (
    event: React.ChangeEvent<HTMLInputElement>,
    field: string
  ) => {
    setFormData((form) => ({ ...form, [field]: event.target.value }));
  };

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
          <TextField
            htmlFor="username-reg"
            id="username"
            name="username"
            type="text"
            placeholder="Your Username"
            label="Username"
            value={formData.name}
            onChange={(e) => handleChangeInput(e, "name")}
          />
          <TextField
            htmlFor="email-reg"
            id="email"
            name="email"
            type="email"
            placeholder="Your Email"
            label="Email"
            value={formData.email}
            onChange={(e) => handleChangeInput(e, "email")}
            required
          />
          <TextField
            htmlFor="password-reg"
            id="password"
            name="password"
            type="password"
            placeholder="Your Password"
            label="Password"
            value={formData.password}
            onChange={(e) => handleChangeInput(e, "password")}
            required
          />
          <TextField
            htmlFor="confirm-password"
            id="confirm-password"
            name="confirmPassword"
            type="password"
            placeholder="Confirm Your Password"
            label="Confirm Password"
            value={formData.confirmPassword}
            onChange={(e) => handleChangeInput(e, "confirmPassword")}
          />
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
