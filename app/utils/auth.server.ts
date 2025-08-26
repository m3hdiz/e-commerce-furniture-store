import bcrypt from "bcryptjs";
import { prisma } from "../utils/db.server";
import { createUserSession } from "./sessions.server";

export async function handleSignup(formData: FormData, redirectTo: string) {
  const username = formData.get("username")?.toString();
  const email = formData.get("email")?.toString();
  const password = formData.get("password")?.toString();
  const confirmPassword = formData.get("confirmPassword")?.toString();

  if (!username || !email || !password || password !== confirmPassword) {
    return { error: "Invalid input" };
  }

  const existingUser = await prisma.user.findUnique({
    where: { email },
  });

  if (existingUser) {
    return { error: "این کاربر از قبل وجود دارد" };
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const [firstName, lastName] = username.split(" ");
  const user = await prisma.user.create({
    data: {
      firstName,
      lastName,
      email,
      password: hashedPassword,
    },
  });

  return createUserSession(user.id, redirectTo);
}

export async function handleSignin(formData: FormData, redirectTo: string) {
  const email = formData.get("email")?.toString();
  const password = formData.get("password")?.toString();

  if (!email || !password) return { error: "Invalid input" };

  const user = await prisma.user.findUnique({ where: { email } });
  if (!user) return { error: "User not found" };

  const isValid = await bcrypt.compare(password, user.password);
  if (!isValid) return { error: "Incorrect password" };

  return createUserSession(user.id, redirectTo);
}
