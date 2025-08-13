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

export default function SigningTab() {
  return (
    <>
      <Sheet>
        <SheetTrigger asChild>
          <Button size="avatar" variant="avatar">
            <Avatar />
          </Button>
        </SheetTrigger>
        <SheetContent side="right">
          <SheetHeader>
            <SheetTitle className="mx-auto">
              <NavLink to="/">
                <LogoWithType />
              </NavLink>
            </SheetTitle>
            <SheetDescription>
              Make changes to your profile here. Click save when you&apos;re
              done.
            </SheetDescription>
          </SheetHeader>
          <div className="flex w-full max-w-sm flex-col gap-6 px-3">
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
          <SheetFooter>
            <SheetClose asChild>
              <Button variant="newOutline">Close</Button>
            </SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </>
  );
}
