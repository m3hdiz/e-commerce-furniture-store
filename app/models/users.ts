import { prisma } from "../db.server";

export default async function Users() {
  const countries = await prisma.country.findMany({
    include: {
      states: true, // fetch related states
    },
  });
  return countries;
}
