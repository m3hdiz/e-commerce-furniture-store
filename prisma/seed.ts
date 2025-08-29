import { prisma } from "~/utils/db.server";

const StatesByCountry = {
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

async function main() {
  for (const [Country, States] of Object.entries(StatesByCountry)) {
    await prisma.country.create({
      data: {
        name: Country,
        states: {
          create: States.map((state) => ({ name: state })),
        },
      },
    });
  }
}

main();
