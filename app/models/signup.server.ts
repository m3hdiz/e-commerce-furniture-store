import { prisma } from "../utils/db.server";

export function SignUp() {
  return prisma.data.create({
    data: {
      title: "yellow",
      desc: "yes",
    },
  });
}
