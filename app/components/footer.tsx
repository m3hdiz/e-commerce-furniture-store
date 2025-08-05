import LogoWithType from "~/src/icons/Logo";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import ArrowRight from "~/src/icons/ArrowRight";

export default function Footer() {
  return (
    <footer className="bg-warmBlack">
      <div className="px-[11vw]">
        <section className="grid grid-cols-111 h-79.5 max-w-[1110px] m-auto">
          <div className="col-start-9 col-span-39 pr-20">
            <div className="pb-6 pt-12">
              <LogoWithType />
            </div>
            <div className="text-Paragraph-Default text-neutral300">
              Lorem ipsum dolor sit amet consectetur adipiscing elit aliquam
              mauris sed ma
            </div>
            <Button
              variant="footer"
              size="footer"
              className="text-background dark:text-foreground mt-8"
            >
              Get started
              <ArrowRight />
            </Button>
          </div>
          <Separator orientation="vertical" />
          <div className="col-start-54 col-span-49 grid grid-cols-3 pt-14.5 ">
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
        <section className="flex items-center justify-center space-x-1 text-Display-3 p-8">
          <div className="text-neutral400">Copyright © 2023 Moon</div>
          <Separator orientation="vertical" />
          <div className="text-neutral500">All Rights Reserved</div>
          <Separator orientation="vertical" />
          <div className="underline text-neutral600">Terms and Conditions</div>
          <Separator orientation="vertical" />
          <div className="underline text-neutral600">Privacy Policy</div>
        </section>
      </div>
    </footer>
  );
}
