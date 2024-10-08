"use server";

import { redirect } from "next/navigation";
import prisma from "./prisma";
import { revalidatePath } from "next/cache";
import { Category, FormTransaction } from "./types";

export const getCategoryList = async (): Promise<Category[]> => {
  return await prisma.category.findMany();
};

export const createCategory = async (formData: FormData) => {
  const name = formData.get("name") as string;
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

export const addTransaction = async (formData: FormData) => {
  const transaction: FormTransaction = {
    date: new Date(formData.get("date") as string),
    type: Number(formData.get("type")),
    categoryId: Number(formData.get("categoryId")),
    amount: parseInt((formData.get("amount") as string).replace(/,/g, "")),
    content: formData.get("content") as string,
  };
  await prisma.transaction.create({ data: transaction });

  redirect("/");
};

export const fetchTransaction = async (id: string) => {
  try {
    const data = await prisma.transaction.findFirst({
      where: {
        id: BigInt(id),
      },
    });

    if (!data) {
      throw new Error("fetchTransaction Error ");
    }

    return data;
  } catch (err) {
    console.error(err);
  }
};

export const patchTransaction = async (id: string, formData: FormData) => {
  const transaction: FormTransaction = {
    date: new Date(formData.get("date") as string),
    type: Number(formData.get("type")),
    categoryId: Number(formData.get("categoryId")),
    amount: parseInt((formData.get("amount") as string).replace(/,/g, "")),
    content: formData.get("content") as string,
  };

  try {
    await prisma.transaction.update({
      where: {
        id: BigInt(id),
      },
      data: { ...transaction },
    });
  } catch (err) {
    console.error(err);
  }

  redirect("/");
};
