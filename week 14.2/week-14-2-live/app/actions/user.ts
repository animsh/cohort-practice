"use server";

import prisma from "@/db";

export async function signupUserAction(username: string, password: string) {
  try {
    const result = await prisma.user.create({
      data: {
        password: password,
        username: username,
      },
    });
    return true;
  } catch {
    return false;
  }
}

export async function getUserDetails() {
  try {
    const result = await prisma.user.findMany();
    return result[0];
  } catch {
    return null;
  }
}
