import Avatar from "~/src/icons/avatar";
import SigninForm from "./SigninForm";
import SignupForm from "./SignupForm";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetFooter,
  SheetClose,
} from "./ui/sheet";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "./ui/tabs";
import { Button } from "./ui/button";
import { NavLink } from "react-router";
import LogoWithType from "~/src/icons/LogoWithTypeHeader";
import Logout from "~/routes/Logout";
import Hello from "../src/assets/gifts/hello.gif";

type SigningTabProps = {
  userId: string | null;
  fullName: string | null;
};

export default function SigningTab({ userId, fullName }: SigningTabProps) {
  return (
    <>
      <Sheet>
        <SheetTrigger asChild>
          <Button size="avatar" variant="avatar">
            <Avatar />
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="overflow-y-auto">
          <SheetHeader>
            <SheetTitle className="mx-auto">
              <NavLink to="/">
                <LogoWithType />
              </NavLink>
            </SheetTitle>
            {!userId ? (
              <SheetDescription>
                Make changes to your profile here. Click save when you&apos;re
                done.
              </SheetDescription>
            ) : (
              <SheetDescription>
                You can manage your profile or logout below.
              </SheetDescription>
            )}
          </SheetHeader>
          <div className="flex w-full max-w-sm flex-col gap-6 px-3">
            {!userId ? (
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
            ) : (
              <>
                <h2 className="text-Display-7 font-bold text-center">
                  Welcome back, {fullName}!
                </h2>
                <div className="flex justify-center mt-4">
                  <img
                    src={Hello}
                    alt="hello"
                    className="h-64 rounded-lg shadow-md"
                  />
                </div>
                <Logout />
              </>
            )}
          </div>
          {!userId ? (
            <SheetFooter>
              <SheetClose asChild>
                <Button variant="newOutline">Close</Button>
              </SheetClose>
            </SheetFooter>
          ) : null}
        </SheetContent>
      </Sheet>
    </>
  );
}
