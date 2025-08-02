"use server"

import { PrismaClient } from "@/generated/prisma";

export async function newEmail(email: string) {
  const prisma = new PrismaClient();

  const newEmailPromotional = await prisma.promotional_email.create({
    data: {
      email: email,
    },
  });
}

