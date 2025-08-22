import { prisma } from "../app/db.server";

// const StatesByCountry = {
//   "United States": ["California", "Texas", "Florida", "New York", "Illinois"],
//   Canada: ["Ontario", "Quebec", "British Columbia", "Alberta", "Manitoba"],
//   "United Kingdom": [
//     "England",
//     "Scotland",
//     "Wales",
//     "Northern Ireland",
//     "Isle of Man",
//   ],
//   Australia: [
//     "New South Wales",
//     "Victoria",
//     "Queensland",
//     "Western Australia",
//     "South Australia",
//   ],
//   Germany: [
//     "Bavaria",
//     "Berlin",
//     "Hamburg",
//     "North Rhine-Westphalia",
//     "Baden-Württemberg",
//   ],
//   France: [
//     "Île-de-France",
//     "Provence-Alpes-Côte d'Azur",
//     "Nouvelle-Aquitaine",
//     "Occitanie",
//     "Grand Est",
//   ],
//   India: [
//     "Maharashtra",
//     "Karnataka",
//     "Tamil Nadu",
//     "Uttar Pradesh",
//     "West Bengal",
//   ],
//   Japan: ["Tokyo", "Osaka", "Hokkaido", "Fukuoka", "Aichi"],
//   China: ["Beijing", "Shanghai", "Guangdong", "Sichuan", "Zhejiang"],
//   Brazil: ["São Paulo", "Rio de Janeiro", "Bahia", "Minas Gerais", "Paraná"],
// };

async function main() {
  // for (const [Country, States] of Object.entries(StatesByCountry)) {
  //   await prisma.country.create({
  //     data: {
  //       name: Country,
  //       states: {
  //         create: States.map((state) => ({ name: state })),
  //       },
  //     },
  //   });
  // }
  // const usersData = [
  //   { name: "Zahra", email: "zahra@example.com" },
  //   { name: "Ali", email: "ali@example.com" },
  // ];

  // for (const user of usersData) {
  //   await prisma.user.create({
  //     data: user,
  //   });
  // }
  const categories = [
    // { name: "Dinnerware" },
    { name: "Ceramic" },
    { name: "Furniture" },
    { name: " Decor Art" },
    { name: " Gifts Sets" },
  ];
  const categoryRecords = [];
  for (const cat of categories) {
    const category = await prisma.category.create({ data: cat });
    categoryRecords.push(category);
  }
  const colors = ["Pink", "Blue", "Green"];
  const colorRecords = [];
  for (const name of colors) {
    const color = await prisma.color.create({ data: { name } });
    colorRecords.push(color);
  }
  const productsData = [
    {
      name: "Modern",
      description: "راحت و شیک",
      price: 1200,
      category: categoryRecords[0],
      colors: [colorRecords[0], colorRecords[1]],
    },
    {
      name: "Wooden Table",
      description: "دست‌ساز",
      price: 800,
      category: categoryRecords[1],
      colors: [colorRecords[2]],
    },
    {
      name: "Comfortable",
      description: "راحت",
      price: 300,
      category: categoryRecords[2],
      colors: [colorRecords[0], colorRecords[1]],
    },
  ];
  for (const product of productsData) {
    await prisma.product.create({
      data: {
        name: product.name,
        description: product.description,
        price: product.price,
        category: { connect: { id: product.category.id } },
        colors: {
          create: product.colors.map((c) => ({
            color: { connect: { id: c.id } },
          })),
        },
      },
    });
  }
}

main()
  .catch((e) => console.error(e))
  .finally(async () => await prisma.$disconnect());
