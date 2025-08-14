import { prisma } from "../db.server";

export function SignUp() {
  return prisma.data.create({
    data: {
      title: "yellow",
      desc: "yes",
    },
  });
}
