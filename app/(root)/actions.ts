"use server";

import { desc } from "drizzle-orm";
import { revalidatePath } from "next/cache";

import { db } from "@/db";
import { articles } from "@/db/schema";

export const getArticlesAction = async () => {
  const data = await db.query.articles.findMany({
    orderBy: [desc(articles.createdAt)],
  });

  revalidatePath("/");

  return data;
};
