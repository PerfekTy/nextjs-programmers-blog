import { db } from "@/db";
import { articles } from "@/db/schema";
import { unstable_noStore as noStore } from "next/cache";

const getTopTags = async () => {
  const tagCounts: { [tag: string]: number } = {};
  const tags = await db.select().from(articles);

  tags.forEach((item) => {
    item.tags.forEach((tag) => {
      const tagName = String(tag).toLowerCase();
      tagCounts[tagName] = (tagCounts[tagName] || 0) + 1;
    });
  });

  const tagsWithCounts = Object.keys(tagCounts).map((tag) => ({
    tag,
    count: tagCounts[tag],
  }));

  tagsWithCounts.sort((a, b) => b.count - a.count);

  return tagsWithCounts.slice(0, 10);
};

export const GET = async (req: Request) => {
  if (req.method === "GET") {
    noStore();
    try {
      const result = await getTopTags();

      return new Response(JSON.stringify(result), { status: 200 });
    } catch (e) {
      return new Response("An error occurred", { status: 400 });
    }
  } else {
    return new Response("Only GET is permitted", { status: 405 });
  }
};
