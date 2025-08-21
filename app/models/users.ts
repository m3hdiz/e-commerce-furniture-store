import { prisma } from "../db.server";

export default function Users() {
  const countries = prisma.country.findMany({
    include: {
      states: true, // fetch related states
    },
  });
  return countries;
}
