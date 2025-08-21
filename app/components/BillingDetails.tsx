import { Form } from "react-router";
import React from "react";
import { ChevronLeft } from "lucide-react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Button } from "./ui/button";

type Countries = {
  id: number;
  name: string;
  states: State[];
};

type State = {
  id: number;
  name: string;
};

type BillingDetailsProps = {
  countries: Countries[];
};

export default function BillingDetails({ countries }: BillingDetailsProps) {
  const [selectedCountry, setSelectedCountry] =
    React.useState<Countries | null>(null);

  return (
    <Form className="grid sm:grid-cols-2 sm:gap-x-5 gap-y-7.5 max-lg:mb-15">
      <div className="flex flex-col gap-2">
        <Label htmlFor="FirstName">First Name *</Label>
        <Input
          type="text"
          id="FirstName"
          name="FirstName"
          placeholder="Samatha"
        />
      </div>
      <div className="flex flex-col gap-2">
        <Label htmlFor="LastName">Last Name *</Label>
        <Input
          type="text"
          id="LastName"
          name="LastName"
          placeholder="Clarken"
        />
      </div>
      <div className="flex flex-col gap-2">
        <Label htmlFor="Company">Company</Label>
        <Input type="text" id="Company" name="Company" placeholder="Moon" />
      </div>
      <div className="flex flex-col gap-2">
        <Label htmlFor="CountryRegion">Country / Region *</Label>
        <Select
          onValueChange={(value) => {
            const country = countries.find((c) => c.name === value) || null;
            setSelectedCountry(country);
          }}
        >
          <SelectTrigger>
            <SelectValue
              className="text-Display-2"
              placeholder="United States"
            />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {countries?.map((country) => (
                <SelectItem key={country.id} value={country.name}>
                  {country.name}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <div className="sm:col-span-2 flex flex-col gap-2">
        <Label htmlFor="Address">Street address *</Label>
        <Input type="text" id="Address" name="Address" placeholder="Address" />
      </div>
      <div className="flex flex-col gap-2">
        <Label htmlFor="TownCity">Town / City *</Label>
        <Input type="text" id="TownCity" name="TownCity" placeholder="City" />
      </div>
      <div className="flex flex-col gap-2">
        <Label htmlFor="State">State *</Label>
        <Select>
          <SelectTrigger>
            <SelectValue className="text-Display-2" placeholder="State" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {selectedCountry && (
                <SelectLabel>{selectedCountry.name}</SelectLabel>
              )}
              {selectedCountry?.states.map((state) => (
                <SelectItem key={state.id} value={state.name}>
                  {state.name}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <div className="flex flex-col gap-2">
        <Label htmlFor="ZIPCode">ZIP Code</Label>
        <Input type="text" id="ZIPCode" name="ZIPCode" placeholder="ZIP Code" />
      </div>
      <div className="flex flex-col gap-2">
        <Label htmlFor="Phone">Phone *</Label>
        <Input
          type="tel"
          id="Phone"
          name="Phone"
          placeholder="(123) 456 - 7890"
        />
      </div>
      <div className="sm:col-span-2 flex flex-col gap-2">
        <Label htmlFor="email">Email</Label>
        <Input
          type="email"
          id="email"
          name="email"
          placeholder="example@youremail.com"
        />
      </div>
      <div className="sm:col-span-2 flex flex-col gap-2">
        <Label htmlFor="OrderNotes">Order notes</Label>
        <textarea
          id="OrderNotes"
          name="OrderNotes"
          placeholder="Type your message here..."
        />
      </div>
      <div className="sm:col-span-full flex max-sm:flex-col justify-between h-12">
        <Button
          variant="newOutline"
          className="flex items-center border-none max-sm:justify-center h-full md:w-1/4 hover:text-lightBrown hover:bg-background"
        >
          <ChevronLeft />
          Return to cart
        </Button>
        <Button variant="solid" className="h-full md:w-1/2">
          Continue to shipping
        </Button>
      </div>
    </Form>
  );
}
