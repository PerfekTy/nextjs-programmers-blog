import { unstable_noStore as noStore } from "next/cache";
import { NextRequest } from "next/server";
import { db } from "@/db";

export const GET = async (req: NextRequest) => {
  noStore();
  if (req.method !== "GET") {
    return;
  }

  try {
    const title = req.nextUrl.pathname.split("/")[3];

    if (title) {
      const data = await db.query.articles.findMany({
        where: (articles, { eq }) =>
          eq(articles.title, title.replaceAll("%20", " ")),
      });

      return new Response(JSON.stringify(data), { status: 200 });
    }

    return new Response("Can't fetch article data", { status: 400 });
  } catch (e) {
    console.log(e);
    return new Response("Error occurred", { status: 500 });
  }
};
