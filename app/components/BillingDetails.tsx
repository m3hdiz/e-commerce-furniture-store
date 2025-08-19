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

export default function BillingDetails() {
  const [country, setCountry] = React.useState("United States");

  const statesByCountry = {
    "United States": ["California", "Texas", "Florida", "New York", "Illinois"],
    Canada: ["Ontario", "Quebec", "British Columbia", "Alberta", "Manitoba"],
    "United Kingdom": [
      "England",
      "Scotland",
      "Wales",
      "Northern Ireland",
      "Isle of Man",
    ],
    Australia: [
      "New South Wales",
      "Victoria",
      "Queensland",
      "Western Australia",
      "South Australia",
    ],
    Germany: [
      "Bavaria",
      "Berlin",
      "Hamburg",
      "North Rhine-Westphalia",
      "Baden-Württemberg",
    ],
    France: [
      "Île-de-France",
      "Provence-Alpes-Côte d'Azur",
      "Nouvelle-Aquitaine",
      "Occitanie",
      "Grand Est",
    ],
    India: [
      "Maharashtra",
      "Karnataka",
      "Tamil Nadu",
      "Uttar Pradesh",
      "West Bengal",
    ],
    Japan: ["Tokyo", "Osaka", "Hokkaido", "Fukuoka", "Aichi"],
    China: ["Beijing", "Shanghai", "Guangdong", "Sichuan", "Zhejiang"],
    Brazil: ["São Paulo", "Rio de Janeiro", "Bahia", "Minas Gerais", "Paraná"],
  };

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
        <Select>
          <SelectTrigger>
            <SelectValue
              className="text-Display-2"
              placeholder="United States"
            />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="United States">United States</SelectItem>
              <SelectItem value="Canada">Canada</SelectItem>
              <SelectItem value="United Kingdom">United Kingdom</SelectItem>
              <SelectItem value="Australia">Australia</SelectItem>
              <SelectItem value="Germany">Germany</SelectItem>
              <SelectItem value="France">France</SelectItem>
              <SelectItem value="India">India</SelectItem>
              <SelectItem value="Japan">Japan</SelectItem>
              <SelectItem value="China">China</SelectItem>
              <SelectItem value="Brazil">Brazil</SelectItem>
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
              <SelectLabel>States</SelectLabel>
              <SelectItem value="United States">United States</SelectItem>
              <SelectItem value="Canada">Canada</SelectItem>
              <SelectItem value="United Kingdom">United Kingdom</SelectItem>
              <SelectItem value="Australia">Australia</SelectItem>
              <SelectItem value="Germany">Germany</SelectItem>
              <SelectItem value="France">France</SelectItem>
              <SelectItem value="India">India</SelectItem>
              <SelectItem value="Japan">Japan</SelectItem>
              <SelectItem value="China">China</SelectItem>
              <SelectItem value="Brazil">Brazil</SelectItem>
            </SelectGroup>
            <SelectGroup>
              <SelectLabel>States</SelectLabel>
              <SelectItem value="United States">United States</SelectItem>
              <SelectItem value="Canada">Canada</SelectItem>
              <SelectItem value="United Kingdom">United Kingdom</SelectItem>
              <SelectItem value="Australia">Australia</SelectItem>
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
        <button className="flex items-center border max-sm:justify-center">
          <ChevronLeft />
          Return to cart
        </button>
        <button>Continue to shipping</button>
      </div>
    </Form>
  );
}
