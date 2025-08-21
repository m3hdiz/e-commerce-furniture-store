import { prisma } from "../db.server";

export function SignUp() {
  return prisma.users.create({
    data: {
      name: "yellow",
    },
  });
}
