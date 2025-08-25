import bcrypt from "bcryptjs";
import { prisma } from "~/db.server";
import { createUserSession } from "~/sessions.server";

export async function register(email: string, password: string) {
  const hashedPassword = await bcrypt.hash(password, 10);
  return prisma.user.create({
    data: {
      email,
      password: hashedPassword,
      updatedAt: new Date(), // required
    },
  });
}

export async function login(email: string, password: string) {
  const user = await prisma.user.findUnique({ where: { email } });
  if (!user) return null;
  const isValid = await bcrypt.compare(password, user.password);
  if (!isValid) return null;
  return user;
}

export async function handleAuth(
  request: Request,
  { redirectTo }: { redirectTo: string }
) {
  const form = await request.formData();
  const email = form.get("email") as string;
  const password = form.get("password") as string;
  const action = form.get("action");

  if (action === "register") {
    const user = await register(email, password);
    return createUserSession(user.id, redirectTo);
  }

  if (action === "login") {
    const user = await login(email, password);
    if (!user) return null;
    return createUserSession(user.id, redirectTo);
  }
}
