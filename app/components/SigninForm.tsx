import { useActionData, useFetcher } from "react-router";
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
import { useState } from "react";

export default function SigninForm() {
  const SigninFetcher = useFetcher();
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
        <CardTitle className="flex flex-col gap-2">Sign in</CardTitle>
        <CardDescription>
          You can Sign in to your account here. If you don&apos;t have an
          account yet you can Sign up.
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-6">
        <SigninFetcher.Form
          method="post"
          action="/login"
          id="signin-form"
          className="grid gap-6"
        >
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
        </SigninFetcher.Form>
      </CardContent>
      <CardFooter>
        <Button
          type="submit"
          name="action"
          value="login"
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
