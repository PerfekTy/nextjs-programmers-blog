import { db } from "@/db";
import { articles } from "@/db/schema";
import { SQL, arrayContains, asc, desc, ilike, or } from "drizzle-orm";
import { unstable_noStore as noStore } from "next/cache";
import { Article } from "./definitions";

export const fetchSearchedArticles = async (
  searchQuery: string,
  sortMethod: SQL,
  offset: number,
) => {
  return await db
    .select()
    .from(articles)
    .where(
      or(
        ilike(articles.tags, `%${searchQuery}%`),
        ilike(articles.title, `%${searchQuery}%`),
        ilike(articles.author, `%${searchQuery}%`),
      ),
    )
    .orderBy(sortMethod)
    .limit(4)
    .offset(offset);
};

export const fetchArticles = async ({
  searchQuery,
  sortQuery,
  page = 1,
}: {
  searchQuery?: string;
  sortQuery?: string;
  page?: number;
}): Promise<Article[]> => {
  noStore();
  try {
    const offset = (page - 1) * 4;

    if (searchQuery) {
      if (sortQuery && sortQuery === "asc") {
        return fetchSearchedArticles(
          searchQuery,
          asc(articles.createdAt),
          offset,
        );
      } else if (sortQuery === "desc") {
        return fetchSearchedArticles(
          searchQuery,
          desc(articles.createdAt),
          offset,
        );
      }

      return fetchSearchedArticles(
        searchQuery,
        desc(articles.createdAt),
        offset,
      );
    }

    if (sortQuery && sortQuery === "asc") {
      return await db
        .select()
        .from(articles)
        .orderBy(asc(articles.createdAt))
        .limit(4)
        .offset(offset);
    } else if (sortQuery === "desc") {
      return await db
        .select()
        .from(articles)
        .orderBy(desc(articles.createdAt))
        .limit(4)
        .offset(offset);
    }

    return await db.query.articles.findMany({ limit: 4, offset });
  } catch (error) {
    console.log(error, "data.ts");
    throw new Error("Database error.");
  }
};
