import { prisma } from "../app/utils/db.server";

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
  const categories = [
    { name: "Dinnerware" },
    { name: "Ceramic" },
    { name: "Furniture" },
    { name: "Decor Art" },
    { name: "Gifts Sets" },
  ];
  const categoryRecords = [];
  for (const cat of categories) {
    const category = await prisma.category.create({ data: cat });
    categoryRecords.push(category);
  }
  const colors = ["Pink", "Blue", "Green", "Black", "White", "Orange"];
  const colorRecords = [];
  for (const name of colors) {
    const color = await prisma.color.create({ data: { name } });
    colorRecords.push(color);
  }
  const productsData = [
    {
      name: "Small Ecru Ceramic Compote",
      description:
        "A small, elegant ceramic compote, perfect for serving fruits or desserts",
      price: 49.0,
      originalPrice: 59.0,
      discountPercent: 15,
      stock: 5,
      rating: 4.2,
      categoryId: categoryRecords[0].id,
      colorIds: [colorRecords[0].id, colorRecords[4].id, colorRecords[5].id],
      imageUrl:
        "https://iqlxniqzdzagjmjijgrn.supabase.co/storage/v1/object/public/product-images/mercer-grey-bowl.png",
    },
    {
      name: 'Warrick White Vase 14"',
      description:
        "Classic white ceramic vase ideal for flowers or as a decorative accent.",
      price: 49.0,
      originalPrice: 55.0,
      discountPercent: 10,
      stock: 3,
      rating: 4.5,
      categoryId: categoryRecords[1].id,
      colorIds: [colorRecords[4].id],
      imageUrl:
        "https://iqlxniqzdzagjmjijgrn.supabase.co/storage/v1/object/public/product-images/holden-vase.png",
    },
    {
      name: "Porcelain Dinner Plate",
      description:
        "Elegant porcelain dinner plate suitable for everyday meals or special occasions.",
      price: 30.0,
      originalPrice: 35.0,
      discountPercent: 5,
      stock: 8,
      rating: 3.8,
      categoryId: categoryRecords[0].id,
      colorIds: [colorRecords[0].id, colorRecords[1].id],
      imageUrl:
        "https://iqlxniqzdzagjmjijgrn.supabase.co/storage/v1/object/public/product-images/e327c66bdd7299132da8f4531c54cda7.png",
    },
    {
      name: "Warrick White Vase 20",
      description:
        "Tall white vase, perfect for modern living room decoration.",
      price: 60.0,
      originalPrice: 70.0,
      discountPercent: 15,
      stock: 2,
      rating: 4.7,
      categoryId: categoryRecords[1].id,
      colorIds: [colorRecords[5].id, colorRecords[4].id],
      imageUrl:
        "https://iqlxniqzdzagjmjijgrn.supabase.co/storage/v1/object/public/product-images/WarrickVase20inWhiteAVSSS22.png",
    },
    {
      name: "Rounded Dual handled Vase",
      description:
        "Decorative vase with dual handles, great for floral arrangements or home décor.",
      price: 70.0,
      originalPrice: 85.0,
      discountPercent: 18,
      stock: 4,
      rating: 4.3,
      categoryId: categoryRecords[3].id,
      colorIds: [colorRecords[0].id, colorRecords[1].id, colorRecords[3].id],
      imageUrl:
        "https://iqlxniqzdzagjmjijgrn.supabase.co/storage/v1/object/public/product-images/OpheliaVase17inWhiteAVSSS22.png",
    },
    {
      name: "Marin White Dinner Plate",
      description: "White ceramic plate, perfect for salads and main courses.",
      price: 39.0,
      originalPrice: 45.0,
      discountPercent: 13,
      stock: 6,
      rating: 3.9,
      categoryId: categoryRecords[0].id,
      colorIds: [colorRecords[2].id, colorRecords[4].id],
      imageUrl:
        "https://iqlxniqzdzagjmjijgrn.supabase.co/storage/v1/object/public/product-images/marin-blue-salad-plate%20(1).png",
    },
    {
      name: "Tall Cream Ceramic Vase",
      description:
        "Cream-colored tall ceramic vase suitable for living rooms or offices.",
      price: 40.0,
      originalPrice: 50.0,
      discountPercent: 20,
      stock: 3,
      rating: 4.0,
      categoryId: categoryRecords[1].id,
      colorIds: [colorRecords[0].id, colorRecords[1].id, colorRecords[5].id],
      imageUrl:
        "https://iqlxniqzdzagjmjijgrn.supabase.co/storage/v1/object/public/product-images/alura-cream-tall-vase.png",
    },
    {
      name: "Luana Bowl",
      description:
        "Versatile ceramic bowl ideal for soups, cereals, or decoration.",
      price: 30.0,
      originalPrice: 38.0,
      discountPercent: 10,
      stock: 7,
      rating: 4.1,
      categoryId: categoryRecords[0].id,
      colorIds: [colorRecords[3].id, colorRecords[2].id],
      imageUrl:
        "https://iqlxniqzdzagjmjijgrn.supabase.co/storage/v1/object/public/product-images/mercer-low-bowl.png",
    },
    {
      name: "Porcelain Elegant Plate",
      description:
        "Durable porcelain plate, perfect for both daily and special meals.",
      price: 50.0,
      originalPrice: 60.0,
      discountPercent: 17,
      stock: 5,
      rating: 4.4,
      categoryId: categoryRecords[0].id,
      colorIds: [colorRecords[5].id, colorRecords[1].id],
      imageUrl:
        "https://iqlxniqzdzagjmjijgrn.supabase.co/storage/v1/object/public/product-images/julo-blue-salad-plate%20(1).png",
    },
    {
      name: "Luana Deep Bowl",
      description: "Lorem ipsum dolor sit amet conse.",
      price: 29.0,
      originalPrice: 34.0,
      discountPercent: 12,
      stock: 6,
      rating: 3.7,
      categoryId: categoryRecords[0].id,
      colorIds: [
        colorRecords[0].id,
        colorRecords[1].id,
        colorRecords[2].id,
        colorRecords[3].id,
        colorRecords[4].id,
      ],
      imageUrl:
        "https://iqlxniqzdzagjmjijgrn.supabase.co/storage/v1/object/public/product-images/mercer-black-rim-bowl%20(1).png",
    },
    {
      name: "Ophelia Matte Natural Vase",
      description: "Lorem ipsum dolor sit amet conse bolli tetur.",
      price: 69.0,
      originalPrice: 80.0,
      discountPercent: 14,
      stock: 3,
      rating: 4.6,
      categoryId: categoryRecords[3].id,
      colorIds: [colorRecords[3].id, colorRecords[4].id],
      imageUrl:
        "https://iqlxniqzdzagjmjijgrn.supabase.co/storage/v1/object/public/product-images/valo-matte-white-vase%20(1).png",
    },
    {
      name: "Porcelain Elegant Dinner Plate",
      description:
        "Lorem ipsum dolor sit amet conse bolli tetur adipiscing elit tortor eu.",
      price: 35.0,
      originalPrice: 40.0,
      discountPercent: 12,
      stock: 6,
      rating: 3.9,
      categoryId: categoryRecords[0].id,
      colorIds: [colorRecords[2].id, colorRecords[4].id],
      imageUrl:
        "https://iqlxniqzdzagjmjijgrn.supabase.co/storage/v1/object/public/product-images/c4335f5f330dbeec64ad59bf6a0b4fd4.png",
    },
    {
      name: "Ceramic Lotus Bowl",
      description: "A delicate bowl perfect for decorative or dining purposes.",
      price: 42.0,
      originalPrice: 50.0,
      discountPercent: 16,
      stock: 5,
      rating: 4.2,
      categoryId: categoryRecords[1].id,
      colorIds: [colorRecords[2].id],
      imageUrl:
        "https://iqlxniqzdzagjmjijgrn.supabase.co/storage/v1/object/public/product-images/CeramicLotusBowl.png",
    },
    {
      name: "Rustic Wooden Stool",
      description: "Handcrafted stool made of high-quality wood.",
      price: 85.0,
      originalPrice: 100.0,
      discountPercent: 15,
      stock: 3,
      rating: 4.5,
      categoryId: categoryRecords[2].id,
      colorIds: [colorRecords[3].id],
      imageUrl:
        "https://iqlxniqzdzagjmjijgrn.supabase.co/storage/v1/object/public/product-images/RusticWoodenStool.png",
    },
    {
      name: "Sunset Dinner Plate",
      description: "Bright orange ceramic plate to elevate your dining table.",
      price: 33.0,
      originalPrice: 40.0,
      discountPercent: 18,
      stock: 6,
      rating: 4.0,
      categoryId: categoryRecords[0].id,
      colorIds: [colorRecords[5].id],
      imageUrl:
        "https://iqlxniqzdzagjmjijgrn.supabase.co/storage/v1/object/public/product-images/SunsetDinnerPlate.png",
    },
    {
      name: "Pink Blossom Vase",
      description: "Decorative vase with a subtle pink hue for home interiors.",
      price: 50.0,
      originalPrice: 60.0,
      discountPercent: 17,
      stock: 4,
      rating: 4.3,
      categoryId: categoryRecords[3].id,
      colorIds: [colorRecords[0].id],
      imageUrl:
        "https://iqlxniqzdzagjmjijgrn.supabase.co/storage/v1/object/public/product-images/PinkBlossomVase.png",
    },
    {
      name: "Green Herb Planter",
      description: "Small ceramic planter for herbs and succulents.",
      price: 28.0,
      originalPrice: 32.0,
      discountPercent: 12,
      stock: 8,
      rating: 4.1,
      categoryId: categoryRecords[1].id,
      colorIds: [colorRecords[2].id],
      imageUrl:
        "https://iqlxniqzdzagjmjijgrn.supabase.co/storage/v1/object/public/product-images/GreenHerbPlanter.png",
    },
    {
      name: "Blue Lagoon Dinner Bowl",
      description: "Deep blue ceramic bowl perfect for soups and cereals.",
      price: 36.0,
      originalPrice: 42.0,
      discountPercent: 14,
      stock: 5,
      rating: 4.2,
      categoryId: categoryRecords[0].id,
      colorIds: [colorRecords[1].id],
      imageUrl:
        "https://iqlxniqzdzagjmjijgrn.supabase.co/storage/v1/object/public/product-images/BlueLagoonDinnerBowl.png",
    },
    {
      name: "White Minimalist Mug",
      description: "Simple and elegant mug for daily use.",
      price: 18.0,
      originalPrice: 22.0,
      discountPercent: 18,
      stock: 10,
      rating: 4.0,
      categoryId: categoryRecords[0].id,
      colorIds: [colorRecords[4].id],
      imageUrl:
        "https://iqlxniqzdzagjmjijgrn.supabase.co/storage/v1/object/public/product-images/WhiteMinimalistMug.png",
    },
    {
      name: "Orange Sunset Vase",
      description: "Bright orange decorative vase for living room or office.",
      price: 46.0,
      originalPrice: 55.0,
      discountPercent: 16,
      stock: 4,
      rating: 4.1,
      categoryId: categoryRecords[3].id,
      colorIds: [colorRecords[5].id],
      imageUrl:
        "https://iqlxniqzdzagjmjijgrn.supabase.co/storage/v1/object/public/product-images/OrangeSunsetVase.png",
    },
    {
      name: "Black Marble Side Table",
      description: "Stylish side table with marble top for modern interiors.",
      price: 150.0,
      originalPrice: 180.0,
      discountPercent: 17,
      stock: 2,
      rating: 4.6,
      categoryId: categoryRecords[2].id,
      colorIds: [colorRecords[3].id],
      imageUrl:
        "https://iqlxniqzdzagjmjijgrn.supabase.co/storage/v1/object/public/product-images/BlackMarbleSideTable.png",
    },
    {
      name: "Gift Set: Ceramic Teacups",
      description: "Perfect set of 4 teacups for gifting.",
      price: 60.0,
      originalPrice: 70.0,
      discountPercent: 14,
      stock: 6,
      rating: 4.4,
      categoryId: categoryRecords[4].id,
      colorIds: [colorRecords[1].id, colorRecords[4].id],
      imageUrl:
        "https://iqlxniqzdzagjmjijgrn.supabase.co/storage/v1/object/public/product-images/GiftSetCeramicTeacups.png",
    },
    {
      name: "Ceramic Harmony Bowl Set",
      description:
        "Set of 3 small bowls in complementary colors, perfect for desserts.",
      price: 55.0,
      originalPrice: 65.0,
      discountPercent: 15,
      stock: 6,
      rating: 4.3,
      categoryId: categoryRecords[1].id,
      colorIds: [colorRecords[0].id, colorRecords[2].id, colorRecords[4].id],
      imageUrl:
        "https://iqlxniqzdzagjmjijgrn.supabase.co/storage/v1/object/public/product-images/CeramicHarmonyBowlSet.png",
    },
    {
      name: "Rustic Oak Coffee Table",
      description:
        "Sturdy oak coffee table suitable for living room or office.",
      price: 220.0,
      originalPrice: 250.0,
      discountPercent: 12,
      stock: 3,
      rating: 4.5,
      categoryId: categoryRecords[2].id,
      colorIds: [colorRecords[3].id, colorRecords[4].id],
      imageUrl:
        "https://iqlxniqzdzagjmjijgrn.supabase.co/storage/v1/object/public/product-images/RusticOakCoffeeTable.png",
    },
    {
      name: "Sunset Ceramic Plate Trio",
      description: "Three vibrant orange plates perfect for summer dining.",
      price: 48.0,
      originalPrice: 60.0,
      discountPercent: 20,
      stock: 5,
      rating: 4.2,
      categoryId: categoryRecords[0].id,
      colorIds: [colorRecords[5].id, colorRecords[1].id],
      imageUrl:
        "https://iqlxniqzdzagjmjijgrn.supabase.co/storage/v1/object/public/product-images/SunsetCeramicPlateTrio.png",
    },
    {
      name: "Blush Pink Wall Art",
      description: "Decorative canvas painting to brighten up your room.",
      price: 75.0,
      originalPrice: 90.0,
      discountPercent: 17,
      stock: 4,
      rating: 4.4,
      categoryId: categoryRecords[3].id,
      colorIds: [colorRecords[0].id, colorRecords[1].id],
      imageUrl:
        "https://iqlxniqzdzagjmjijgrn.supabase.co/storage/v1/object/public/product-images/BlushPinkWallArt.png",
    },
    {
      name: "Green Meadow Ceramic Planter",
      description: "Decorative planter for succulents or small plants.",
      price: 30.0,
      originalPrice: 36.0,
      discountPercent: 16,
      stock: 7,
      rating: 4.1,
      categoryId: categoryRecords[1].id,
      colorIds: [colorRecords[2].id, colorRecords[4].id],
      imageUrl:
        "https://iqlxniqzdzagjmjijgrn.supabase.co/storage/v1/object/public/product-images/GreenMeadowCeramicPlanter.png",
    },
    {
      name: "Blue Serenity Vase Set",
      description: "Set of 2 decorative vases in calming blue shades.",
      price: 65.0,
      originalPrice: 78.0,
      discountPercent: 17,
      stock: 5,
      rating: 4.3,
      categoryId: categoryRecords[3].id,
      colorIds: [colorRecords[1].id, colorRecords[4].id],
      imageUrl:
        "https://iqlxniqzdzagjmjijgrn.supabase.co/storage/v1/object/public/product-images/BlueSerenityVaseSet.png",
    },
    {
      name: "White & Black Ceramic Teacup Duo",
      description: "Minimalist ceramic teacup set, perfect for gifting.",
      price: 38.0,
      originalPrice: 45.0,
      discountPercent: 15,
      stock: 6,
      rating: 4.2,
      categoryId: categoryRecords[4].id,
      colorIds: [colorRecords[3].id, colorRecords[4].id],
      imageUrl:
        "https://iqlxniqzdzagjmjijgrn.supabase.co/storage/v1/object/public/product-images/White&BlackCeramicTeacupDuo.png",
    },
    {
      name: "Orange Glow Ceramic Bowl",
      description: "Large ceramic bowl with bright orange finish.",
      price: 52.0,
      originalPrice: 60.0,
      discountPercent: 13,
      stock: 5,
      rating: 4.0,
      categoryId: categoryRecords[0].id,
      colorIds: [colorRecords[5].id, colorRecords[0].id],
      imageUrl:
        "https://iqlxniqzdzagjmjijgrn.supabase.co/storage/v1/object/public/product-images/OrangeGlowCeramicBowl.png",
    },
    {
      name: "Green & Blue Decorative Plate",
      description: "Hand-painted plate for table decoration or wall hanging.",
      price: 44.0,
      originalPrice: 52.0,
      discountPercent: 15,
      stock: 4,
      rating: 4.1,
      categoryId: categoryRecords[3].id,
      colorIds: [colorRecords[2].id, colorRecords[1].id],
      imageUrl:
        "https://iqlxniqzdzagjmjijgrn.supabase.co/storage/v1/object/public/product-images/Green&BlueDecorativePlate.png",
    },
    {
      name: "Gift Set: Mini Ceramic Bowls",
      description:
        "Set of 5 mini bowls in assorted colors, perfect for gifting.",
      price: 58.0,
      originalPrice: 70.0,
      discountPercent: 17,
      stock: 5,
      rating: 4.4,
      categoryId: categoryRecords[4].id,
      colorIds: [colorRecords[0].id, colorRecords[1].id, colorRecords[2].id],
      imageUrl:
        "https://iqlxniqzdzagjmjijgrn.supabase.co/storage/v1/object/public/product-images/GiftSetMiniCeramicBowls.png",
    },
  ];

  for (const product of productsData) {
    await prisma.product.create({
      data: {
        name: product.name,
        description: product.description,
        price: product.price,
        originalPrice: product.originalPrice,
        discountPercent: product.discountPercent,
        imageUrl: product.imageUrl,
        stock: product.stock,
        rating: product.rating,
        category: { connect: { id: product.categoryId } },
        colors: {
          create: product.colorIds.map((id) => ({
            color: { connect: { id } },
          })),
        },
      },
    });
  }
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
