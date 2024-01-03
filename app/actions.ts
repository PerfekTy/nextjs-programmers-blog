"use server";

import { db } from "@/db";
import { articles, likes } from "@/db/schema";
import { desc, ilike } from "drizzle-orm";
import { arrayContains, or } from "drizzle-orm/sql/expressions/conditions";

import { Article } from "@/app/definitions";

import { revalidatePath } from "next/cache";

export type FormState = {
  searchedValue: string;
  data: Article[];
};

export async function searchDataAction(
  prevState: FormState,
  formData: FormData
) {
  const searchedValue = formData.get("searchedValue") as string;

  try {
    const data = await db
      .select()
      .from(articles)
      .where(
        or(
          arrayContains(articles.tags, [searchedValue]),
          ilike(articles.author, `%${searchedValue}%`),
          ilike(articles.title, `%${searchedValue}%`)
        )
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

export async function likeArticleAction(
  username: string,
  articleTitle: string
) {
  try {
    await db.insert(likes).values({ username, articleTitle });
    console.log("like triggered: ", username, articleTitle);
  } catch (e) {
    console.log(e);
  }
}
