import { db } from "@/db";
import { articles } from "@/db/schema";
import { unstable_noStore as noStore } from "next/cache";

export const GET = async (req: Request) => {
  if (req.method === "GET") {
    noStore();
    try {
      const result = await db
        .select({ tags: articles.tags })
        .from(articles)
        .limit(15);

      return new Response(JSON.stringify(result), { status: 200 });
    } catch (e) {
      return new Response("An error occurred", { status: 400 });
    }
  } else {
    return new Response("Only GET is permitted", { status: 405 });
  }
};
