import Search from "~/src/icons/search";
import LogoWithType from "../src/icons/LogoWithTypeHeader";
import Avatar from "~/src/icons/avatar";
import Heart from "~/src/icons/heart";
import ShoppingCart from "~/src/icons/Shopping cart";
import { NavLink } from "react-router";
import Menu from "~/src/icons/Menu";
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
import { Button } from "./ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "./ui/tabs";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "./ui/card";
import { Label } from "@radix-ui/react-label";
import { Input } from "./ui/input";

export default function NavBar() {
  return (
    <nav className="dark:bg-warmBlack">
      <div className="px-[11vw]">
        <section className="flex max-md:grid max-md:grid-cols-3 items-center justify-between h-20.5 max-w-[1110px] mx-auto ">
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost">
                  <Menu />
                </Button>
              </SheetTrigger>
              <SheetContent side="left">
                <SheetHeader>
                  <SheetTitle className="mx-auto">
                    <NavLink to="/">
                      <LogoWithType />
                    </NavLink>
                  </SheetTitle>
                  <SheetDescription>
                    Make changes to your profile here. Click save when
                    you&apos;re done.
                  </SheetDescription>
                </SheetHeader>
                <div className="grid flex-1 auto-rows-min gap-6 px-4">
                  <div className="grid gap-3"></div>
                  <div className="grid gap-3"></div>
                </div>
                <SheetFooter>
                  <SheetClose asChild>
                    <Button variant="outline">Close</Button>
                  </SheetClose>
                </SheetFooter>
              </SheetContent>
            </Sheet>
          </div>
          <div className="justify-self-center">
            <NavLink to="/">
              <LogoWithType />
            </NavLink>
          </div>
          <div className="max-md:hidden">
            <ul className="flex md:gap-8 lg:gap-15 text-Paragraph-Default">
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="shop">Shop</NavLink>
              </li>
              <li>
                <NavLink to="about">About</NavLink>
              </li>
              <li>
                <NavLink to="contact">Contact</NavLink>
              </li>
            </ul>
          </div>
          <div className="max-md:hidden">
            <ul className="flex items-center gap-6">
              <li>
                <Search />
              </li>
              <li>
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
                        Make changes to your profile here. Click save when
                        you&apos;re done.
                      </SheetDescription>
                    </SheetHeader>
                    <div className="flex w-full max-w-sm flex-col gap-6 px-3">
                      <Tabs defaultValue="Sign in">
                        <TabsList>
                          <TabsTrigger value="Sign in">Sign in</TabsTrigger>
                          <TabsTrigger value="Sign up">Sign up</TabsTrigger>
                        </TabsList>
                        <TabsContent value="Sign in">
                          <Card>
                            <CardHeader>
                              <CardTitle>Sign in</CardTitle>
                              <CardDescription>
                                You can Sign in to your account here. If you
                                don&apos;t have an account yet you can Sign up.
                              </CardDescription>
                            </CardHeader>
                            <CardContent className="grid gap-6">
                              <div className="grid gap-3">
                                <Label htmlFor="Username">Username</Label>
                                <Input
                                  id="Username"
                                  placeholder="Your Username"
                                />
                              </div>
                              <div className="grid gap-3">
                                <Label htmlFor="Password">Password</Label>
                                <Input
                                  id="Password"
                                  placeholder="Your Password"
                                />
                              </div>
                            </CardContent>
                            <CardFooter>
                              <Button variant="newOutline">Sign in</Button>
                            </CardFooter>
                          </Card>
                        </TabsContent>
                        <TabsContent value="Sign up">
                          <Card>
                            <CardHeader>
                              <CardTitle>Sign up</CardTitle>
                              <CardDescription>
                                Sign up a new account here. After submit,
                                you&apos;ll be logged in.
                              </CardDescription>
                            </CardHeader>
                            <CardContent className="grid gap-6">
                              <div className="grid gap-3">
                                <Label htmlFor="Username">Username</Label>
                                <Input id="Username" type="text" />
                              </div>
                              <div className="grid gap-3">
                                <Label htmlFor="Email">Email</Label>
                                <Input id="Email" type="email" />
                              </div>
                              <div className="grid gap-3">
                                <Label htmlFor="Password">Password</Label>
                                <Input id="Password" type="Password" />
                              </div>
                              <div className="grid gap-3">
                                <Label htmlFor="repeat Password">
                                  Repeat Password
                                </Label>
                                <Input
                                  id="repeat Password"
                                  type="repeat Password"
                                />
                              </div>
                            </CardContent>
                            <CardFooter>
                              <Button variant="newOutline">Submit</Button>
                            </CardFooter>
                          </Card>
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
              </li>
              <li>
                <NavLink to="favorites">
                  <Heart />
                </NavLink>
              </li>
              <li>
                <NavLink to="cart">
                  <ShoppingCart />
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="md:hidden justify-self-end">
            <NavLink to="cart">
              <ShoppingCart />
            </NavLink>
          </div>
        </section>
      </div>
    </nav>
  );
}
