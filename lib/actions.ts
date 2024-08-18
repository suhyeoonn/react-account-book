"use server";

import { redirect } from "next/navigation";
import prisma from "./prisma";
import { revalidatePath } from "next/cache";

export const getCategoryList = async () => {
  return await prisma.category.findMany();
};

export const createCategory = async (formData: FormData) => {
  const name = formData.get("name");
  const type = formData.get("type");

  if (!name || !type) {
    throw new Error("create category error");
  }

  await prisma.category.create({
    data: {
      name,
      type: Number(type),
    },
  });
  revalidatePath("/category");
  redirect("/category");
};

export const deleteCategory = async (id: number) => {
  await prisma.category.delete({
    where: { id },
  });
  redirect("/category");
};
