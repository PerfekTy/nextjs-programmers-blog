import { db } from "@/db";
import { articles } from "@/db/schema";
import { SQL, arrayContains, asc, desc, ilike, or } from "drizzle-orm";
import { unstable_noStore as noStore } from "next/cache";

export const fetchSearchedArticles = async (
  searchQuery: string,
  sortMethod: SQL,
) => {
  return await db
    .select()
    .from(articles)
    .where(
      or(
        arrayContains(articles.tags, [searchQuery]),
        ilike(articles.title, `%${searchQuery}%`),
        ilike(articles.author, `%${searchQuery}%`),
      ),
    )
    .orderBy(sortMethod);
};

export const fetchArticles = async (
  searchQuery?: string,
  sortQuery?: string,
) => {
  noStore();
  try {
    if (searchQuery) {
      if (sortQuery && sortQuery === "desc") {
        return fetchSearchedArticles(searchQuery, desc(articles.createdAt));
      } else if (sortQuery && sortQuery === "asc") {
        return fetchSearchedArticles(searchQuery, asc(articles.createdAt));
      }
      return fetchSearchedArticles(searchQuery, desc(articles.createdAt));
    }

    if (sortQuery && sortQuery === "desc") {
      return await db.query.articles.findMany({
        orderBy: [desc(articles.createdAt)],
      });
    } else if (sortQuery && sortQuery === "asc") {
      return await db.query.articles.findMany({
        orderBy: [asc(articles.createdAt)],
      });
    }

    return await db.query.articles.findMany();
  } catch (error) {
    console.log(error, "data.ts");
    throw new Error("Database error.");
  }
};
