"use server";

import { db } from "@/db";
import { Article, articles } from "@/db/schema";
import { ilike } from "drizzle-orm";
import { or } from "drizzle-orm/sql/expressions/conditions";
import { revalidatePath } from "next/cache";

export type FormState = {
  searchedValue: string;
  errors: {
    message: string | undefined;
  };
  data: Article[] | undefined;
};

export async function searchDataAction(
  prevState: FormState,
  formData: FormData,
) {
  const searchedValue = formData.get("searchedValue") as string;

  if (searchedValue.length < 3) {
    return {
      ...prevState,
      errors: {
        message: "Type min 3 characters to search something...",
      },
    };
  }

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
      );

    revalidatePath("/");

    return {
      searchedValue: "",
      errors: {
        message: undefined,
      },
      data,
    };
  } catch (e) {
    console.log(e);
  }

  return {
    searchedValue: "",
    errors: {
      message: undefined,
    },
    data: undefined,
  };
}
