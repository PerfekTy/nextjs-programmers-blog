"use server";

import { db } from "@/db";
import { articles } from "@/db/schema";
import { currentUser } from "@clerk/nextjs";
import { revalidatePath } from "next/cache";

export type FormState = {
  title: string;
  tags: string | string[];
  text: string;
  errors: {
    tags: string | undefined;
    message: string | undefined;
  };
};

export async function createArticleAction(
  prevState: FormState,
  formData: FormData,
) {
  const user = await currentUser();

  if (!user) {
    throw new Error("You have to be signed in to add articles.");
  }

  const article = {
    title: formData.get("title") as string,
    tags: formData.get("tags") as string,
    text: formData.get("text") as string,
  };

  const tags = article.tags.split(",");

  try {
    await db.insert(articles).values({
      tags,
      author: user.username as string,
      title: article.title.replaceAll(" ", "-"),
      text: article.text as string,
      authorImage: user.imageUrl as string,
    });

    revalidatePath("/");
  } catch (error) {
    console.log(error, "create, actions.ts");
    throw new Error("Database error: cannot add the article.");
  }

  return {
    title: "",
    tags: "",
    text: "",
    errors: {
      tags: undefined,
      message: undefined,
    },
  };
}
