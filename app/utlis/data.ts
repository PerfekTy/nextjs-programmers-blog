import { db } from "@/db";
import { articles } from "@/db/schema";
import { arrayContains, asc, desc, ilike, or } from "drizzle-orm";

export const fetchFilteredArticles = async (query: string) => {
  try {
    return await db
      .select()
      .from(articles)
      .where(
        or(
          arrayContains(articles.tags, [query]),
          ilike(articles.title, `%${query}%`),
          ilike(articles.author, `%${query}%`)
        )
      )
      .orderBy(desc(articles.createdAt));
  } catch (error) {
    console.log(error, "data.ts");
    throw new Error("Database error.");
  }
};

export const fetchSortedArticles = async (query: string) => {
  try {
    if (query === "desc") {
      return await db.select().from(articles).orderBy(desc(articles.createdAt));
    }

    if (query === "asc") {
      return await db.select().from(articles).orderBy(asc(articles.createdAt));
    }
  } catch (error) {
    console.log(error, "data.ts");
    throw new Error("Database error.");
  }
};
