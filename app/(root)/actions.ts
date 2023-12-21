"use server";

import { db } from "@/db";
import { Article, articles } from "@/db/schema";
import { desc, ilike } from "drizzle-orm";
import { or } from "drizzle-orm/sql/expressions/conditions";
import { revalidatePath } from "next/cache";

export type FormState = {
  searchedValue: string;
  data: [] | Article[];
};

export async function searchDataAction(
  prevState: FormState,
  formData: FormData,
) {
  const searchedValue = formData.get("searchedValue") as string;

  try {
    const data = await db
      .select()
      .from(articles)
      .where(
        or(
          ilike(articles.author, `%${searchedValue}%`),
          ilike(articles.tags, `%${searchedValue}%`),
          ilike(articles.title, `%${searchedValue}%`),
        ),
      )
      .orderBy(desc(articles.createdAt));

    revalidatePath("/");

    return {
      searchedValue: "",
      data,
    };
  } catch (e) {
    console.log(e);
  }

  return {
    searchedValue: "",
    data: [],
  };
}
