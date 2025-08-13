export function SignIn() {}

export function SignUp() {
  return prisma?.data.create({
    data: {
      title: "yellow",
      desc: "yes",
    },
  });
}
