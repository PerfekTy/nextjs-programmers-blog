"use server";

import { db } from "@/db";
import { articles } from "@/db/schema";
import { currentUser } from "@clerk/nextjs";
import { revalidatePath } from "next/cache";
import type { Article } from "../utils/definitions";

type OmmitedArticle = Omit<
  Article,
  "id" | "createdAt" | "updatedAt" | "author" | "authorImage"
>;

export async function createArticleAction(data: OmmitedArticle) {
  const user = await currentUser();

  if (!user) {
    throw new Error("You have to be signed in to add articles.");
  }

  try {
    await db.insert(articles).values({
      title: data.title as string,
      text: data.text as string,
      tags: data.tags as string,
      author: user.username as string,
      authorImage: user.imageUrl as string,
    });

    revalidatePath("/");
  } catch (error) {
    console.log(error, "create, actions.ts");
    throw new Error("Database error: cannot add the article.");
  }
}
