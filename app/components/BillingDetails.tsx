import { Form } from "react-router";
import React from "react";
import { ChevronLeft } from "lucide-react";

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
        <label htmlFor="FirstName">First Name *</label>
        <input
          type="text"
          id="FirstName"
          name="FirstName"
          placeholder="Samatha"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="LastName">Last Name *</label>
        <input
          type="text"
          id="LastName"
          name="LastName"
          placeholder="Clarken"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="Company">Company</label>
        <input type="text" id="Company" name="Company" placeholder="Moon" />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="CountryRegion">Country / Region *</label>
        <select
          id="CountryRegion"
          name="CountryRegion"
          value={country}
          defaultValue=""
          onChange={(e) => setCountry(e.target.value)}
          className="border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="" disabled hidden>
            United States
          </option>
          {Object.keys(statesByCountry).map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </div>
      <div className="sm:col-span-2 flex flex-col gap-2">
        <label htmlFor="Address">Street address *</label>
        <input type="text" id="Address" name="Address" placeholder="Address" />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="TownCity">Town / City *</label>
        <input type="text" id="TownCity" name="TownCity" placeholder="City" />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="State">State *</label>
        <select
          id="State"
          name="State"
          defaultValue=""
          className="border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="" disabled hidden>
            State
          </option>
          {statesByCountry[country].map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="ZIPCode">ZIP Code</label>
        <input type="text" id="ZIPCode" name="ZIPCode" placeholder="ZIP Code" />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="Phone">Phone *</label>
        <input
          type="tel"
          id="Phone"
          name="Phone"
          placeholder="(123) 456 - 7890"
        />
      </div>
      <div className="sm:col-span-2 flex flex-col gap-2">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="example@youremail.com"
        />
      </div>
      <div className="sm:col-span-2 flex flex-col gap-2">
        <label htmlFor="OrderNotes">Order notes</label>
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
