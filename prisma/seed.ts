import { prisma } from "../app/db.server";

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
  // const categories = [
  //   { name: "Dinnerware" },
  //   { name: "Ceramic" },
  //   { name: "Furniture" },
  //   { name: "Decor Art" },
  //   { name: "Gifts Sets" },
  // ];
  // const categoryRecords = [];
  // for (const cat of categories) {
  //   const category = await prisma.category.create({ data: cat });
  //   categoryRecords.push(category);
  // }
  // const colors = ["Pink", "Blue", "Green", "Black", "White", "Orange"];
  // const colorRecords = [];
  // for (const name of colors) {
  //   const color = await prisma.color.create({ data: { name } });
  //   colorRecords.push(color);
  // }
  // const productsData = [
  //   {
  //     name: "Small Ecru Ceramic Compote",
  //     description:
  //       "Lorem ipsum dolor sit amet conse bolli tetur adipiscing elit.",
  //     price: 49.0,
  //     categoryId: categoryRecords[0].id,
  //     colorIds: [colorRecords[0].id, colorRecords[4].id, colorRecords[5].id],
  //     image:
  //       "https://iqlxniqzdzagjmjijgrn.supabase.co/storage/v1/object/public/product-images/mercer-grey-bowl.png",
  //   },
  //   {
  //     name: 'Warrick White Vase 14"',
  //     description:
  //       "Lorem ipsum dolor sit amet conse bolli tetur adipiscing elit tortor eu.",
  //     price: 49.0,
  //     categoryId: categoryRecords[1].id,
  //     colorIds: [colorRecords[4].id],
  //     image:
  //       "https://iqlxniqzdzagjmjijgrn.supabase.co/storage/v1/object/public/product-images/holden-vase.png",
  //   },
  //   {
  //     name: "Porcelain Dinner Plate",
  //     description: "Lorem ipsum dolor sit amet conse bolli tetur .",
  //     price: 30.0,
  //     categoryId: categoryRecords[0].id,
  //     colorIds: [colorRecords[0].id, colorRecords[1].id],
  //     image:
  //       "https://iqlxniqzdzagjmjijgrn.supabase.co/storage/v1/object/public/product-images/e327c66bdd7299132da8f4531c54cda7.png",
  //   },
  //   {
  //     name: "Warrick White Vase 20",
  //     description:
  //       "Lorem ipsum dolor sit amet conse bolli tetur adipiscing elit tortor eu.",
  //     price: 60.0,
  //     categoryId: categoryRecords[4].id,
  //     colorIds: [colorRecords[5].id, colorRecords[4].id],
  //     image:
  //       "https://iqlxniqzdzagjmjijgrn.supabase.co/storage/v1/object/public/product-images/WarrickVase20inWhiteAVSSS22.png",
  //   },
  //   {
  //     name: "Rounded Dual handled Vase",
  //     description:
  //       "Lorem ipsum dolor sit amet conse bolli tetur adipiscing elit tortor eu.",
  //     price: 70.0,
  //     categoryId: categoryRecords[3].id,
  //     colorIds: [colorRecords[0].id, colorRecords[1].id, colorRecords[3].id],
  //     image:
  //       "https://iqlxniqzdzagjmjijgrn.supabase.co/storage/v1/object/public/product-images/OpheliaVase17inWhiteAVSSS22.png",
  //   },
  //   {
  //     name: "Marin White Dinner Plate",
  //     description: "Lorem ipsum dolor sit amet conse .",
  //     price: 39.0,
  //     categoryId: categoryRecords[0].id,
  //     colorIds: [colorRecords[2].id, colorRecords[4].id],
  //     image:
  //       "https://iqlxniqzdzagjmjijgrn.supabase.co/storage/v1/object/public/product-images/marin-blue-salad-plate%20(1).png",
  //   },
  //   {
  //     name: "Tall Cream Ceramic Vase",
  //     description:
  //       "Lorem ipsum dolor sit amet conse bolli tetur adipiscing elit.",
  //     price: 40.0,
  //     categoryId: categoryRecords[1].id,
  //     colorIds: [colorRecords[0].id, colorRecords[1].id, colorRecords[5].id],
  //     image:
  //       "https://iqlxniqzdzagjmjijgrn.supabase.co/storage/v1/object/public/product-images/alura-cream-tall-vase.png",
  //   },
  //   {
  //     name: "Luana Bowl",
  //     description:
  //       "Lorem ipsum dolor sit amet conse bolli tetur adipiscing elit tortor eu.",
  //     price: 30.0,
  //     categoryId: categoryRecords[4].id,
  //     colorIds: [colorRecords[3].id, colorRecords[2].id],
  //     image:
  //       "https://iqlxniqzdzagjmjijgrn.supabase.co/storage/v1/object/public/product-images/mercer-low-bowl.png",
  //   },
  //   {
  //     name: "Porcelain Dinner Plate",
  //     description:
  //       "Lorem ipsum dolor sit amet conse bolli tetur adipiscing elit tortor eu.",
  //     price: 50.0,
  //     categoryId: categoryRecords[0].id,
  //     colorIds: [colorRecords[5].id, colorRecords[1].id],
  //     image:
  //       "https://iqlxniqzdzagjmjijgrn.supabase.co/storage/v1/object/public/product-images/julo-blue-salad-plate%20(1).png",
  //   },
  //   {
  //     name: "Luana Bowl",
  //     description: "Lorem ipsum dolor sit amet conse.",
  //     price: 29.0,
  //     categoryId: categoryRecords[2].id,
  //     colorIds: [
  //       colorRecords[0].id,
  //       colorRecords[1].id,
  //       colorRecords[2].id,
  //       colorRecords[3].id,
  //       colorRecords[4].id,
  //     ],
  //     image:
  //       "https://iqlxniqzdzagjmjijgrn.supabase.co/storage/v1/object/public/product-images/mercer-black-rim-bowl%20(1).png",
  //   },
  //   {
  //     name: "Ophelia Matte Natural Vase",
  //     description: "Lorem ipsum dolor sit amet conse bolli tetur.",
  //     price: 69.0,
  //     categoryId: categoryRecords[3].id,
  //     colorIds: [colorRecords[3].id, colorRecords[4].id],
  //     image:
  //       "https://iqlxniqzdzagjmjijgrn.supabase.co/storage/v1/object/public/product-images/valo-matte-white-vase%20(1).png",
  //   },
  //   {
  //     name: "Porcelain Dinner Plate",
  //     description:
  //       "Lorem ipsum dolor sit amet conse bolli tetur adipiscing elit tortor eu.",
  //     price: 35.0,
  //     categoryId: categoryRecords[0].id,
  //     colorIds: [colorRecords[2].id, colorRecords[4].id],
  //     image:
  //       "https://iqlxniqzdzagjmjijgrn.supabase.co/storage/v1/object/public/product-images/c4335f5f330dbeec64ad59bf6a0b4fd4.png",
  //   },
  // ];
  // for (const product of productsData) {
  //   await prisma.product.create({
  //     data: {
  //       name: product.name,
  //       description: product.description,
  //       price: product.price,
  //       image: product.image,
  //       category: { connect: { id: product.categoryId } },
  //       colors: {
  //         create: product.colorIds.map((id) => ({
  //           color: { connect: { id } },
  //         })),
  //       },
  //     },
  //   });
  // }
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
