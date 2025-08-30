import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import ArrowRight from "~/src/icons/ArrowRight";
import LogoWithTypeFooter from "~/src/icons/LogoWithTypeFooter";

export default function Footer() {
  return (
    <footer className="bg-warmBlack">
      <div className="px-[11vw]">
        <section className="grid grid-cols-111 md:h-79.5 max-w-[1110px] m-auto">
          <div className="col-span-full md:col-start-9 md:col-span-39 md:pr-20">
            <div className="pb-6 pt-8 md:pt-12">
              <LogoWithTypeFooter />
            </div>
            <div className="text-Paragraph-Default text-neutral300 pb-8">
              Lorem ipsum dolor sit amet consectetur adipiscing elit aliquam
              mauris sed ma
            </div>
            <Button
              variant="footer"
              size="footer"
              className="text-background dark:text-foreground max-md:mb-7.5"
            >
              Get started
              <ArrowRight />
            </Button>
          </div>
          <Separator className="max-md:hidden" orientation="vertical" />
          <Separator className="md:hidden col-span-full" />
          <div className="col-span-full md:col-start-54 md:col-span-49 grid grid-cols-2 max-md:gap-y-12 md:grid-cols-3 max-md:py-7.5 md:pt-14.5 ">
            <div>
              <p className="text-Display-3 uppercase font-semibold text-neutral100 pb-8">
                About us
              </p>
              <ul className="flex h-36.5 flex-col justify-between text-neutral300 text-Paragraph-Default font-extralight">
                <li>Mission</li>
                <li>Our team</li>
                <li>Awards</li>
                <li>Testimonials</li>
                <li>Privacy policy</li>
              </ul>
            </div>
            <div>
              <p className="text-Display-3 uppercase font-semibold text-neutral100 pb-8">
                Services
              </p>
              <ul className="flex h-36.5 flex-col justify-between text-neutral300 text-Paragraph-Default font-extralight">
                <li>Web design</li>
                <li>Web development</li>
                <li>Mobile design</li>
                <li>UI/UX design</li>
                <li>Branding design</li>
              </ul>
            </div>
            <div>
              <p className="text-Display-3 uppercase font-semibold text-neutral100 pb-8">
                Portfolio
              </p>
              <ul className="flex h-36.5 flex-col justify-between text-neutral300 text-Paragraph-Default font-extralight">
                <li>Corporate websites</li>
                <li>E-commerce</li>
                <li>Mobile apps</li>
                <li>Landing pages</li>
                <li>UI/UX projects</li>
              </ul>
            </div>
          </div>
        </section>
        <Separator />
        <section className="flex max-md:flex-col h-32 md:h-21.5 items-center justify-center space-x-1 text-Display-3">
          <div className="text-neutral500">Copyright © 2023 Moon</div>
          <Separator className="max-h-5 max-md:hidden" orientation="vertical" />
          <div className="text-neutral500">All Rights Reserved</div>
          <Separator className="max-h-5 max-md:hidden" orientation="vertical" />
          <div className="underline text-neutral600 max-md:hidden">
            Terms and Conditions
          </div>
          <Separator
            className="max-h-5  max-md:hidden"
            orientation="vertical"
          />
          <div className="underline text-neutral600 max-md:hidden">
            Privacy Policy
          </div>
          <div className="flex space-x-1 md:hidden">
            <div className="underline text-neutral600">
              Terms and Conditions
            </div>
            <Separator className="max-h-5" orientation="vertical" />
            <div className="underline text-neutral600">Privacy Policy</div>
          </div>
        </section>
      </div>
    </footer>
  );
}
