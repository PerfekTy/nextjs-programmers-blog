import { db } from "@/db";
import { articles } from "@/db/schema";

export const joinArrays = (...arrays: any[][]): any[] => {
  return arrays.reduce((acc, currentArray) => acc.concat(currentArray), []);
};

const getAllTags = async () => {
  return db.select({ tags: articles.tags }).from(articles);
};

const getTopTags = async () => {
  try {
    const allTags: any[] = await getAllTags();
    const arrOfTags = joinArrays(...allTags.map((article) => article.tags));

    const tagCounts: { [tag: string]: number } = {};

    arrOfTags.forEach((tag) => {
      const tagName = String(tag).toLowerCase();
      tagCounts[tagName] = (tagCounts[tagName] || 0) + 1;
    });

    const tagsWithCounts = Object.keys(tagCounts).map((tag) => ({
      tag,
      count: tagCounts[tag],
    }));

    tagsWithCounts.sort((a, b) => b.count - a.count);

    return tagsWithCounts.slice(0, 10);
  } catch (error) {
    console.error("Error fetching or processing tags:", error);
    throw error;
  }
};
export const GET = async (req: Request) => {
  if (req.method === "GET") {
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
