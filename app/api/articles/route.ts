import { db } from "@/db";
import { asc, desc } from "drizzle-orm";
import { articles } from "@/db/schema";

const getArticles = async (sortBy: string) => {
  switch (sortBy) {
    case "asc":
      return await db.query.articles.findMany({
        orderBy: [asc(articles.createdAt)],
      });

    case "desc":
      return await db.query.articles.findMany({
        orderBy: [desc(articles.createdAt)],
      });
  }
};

export const handler = async (req: Request) => {
  if (req.method === "POST") {
    try {
      const { latest, oldest } = await req.json();

      if (latest && typeof latest === "string") {
        const data = await getArticles(latest);
        return new Response(JSON.stringify(data), { status: 200 });
      }

      if (oldest && typeof oldest === "string") {
        const data = await getArticles(oldest);
        return new Response(JSON.stringify(data), { status: 200 });
      }
    } catch (e) {
      return new Response("An error occurred", { status: 400 });
    }
  }

  if (req.method === "GET") {
    try {
      const data = await db.query.articles.findMany({
        orderBy: [desc(articles.createdAt)],
      });
      return new Response(JSON.stringify(data), { status: 200 });
    } catch (e) {
      return new Response("An error occurred", { status: 400 });
    }
  }
};

export { handler as POST, handler as GET };
