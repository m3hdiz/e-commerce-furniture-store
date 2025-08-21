import { prisma } from "../db.server";

export default async function Countries() {
  const data = await prisma.country.findMany({
    include: {
      states: true, // fetch related states
    },
  });
  return data;
}
