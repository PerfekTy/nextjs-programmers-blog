import { Article } from "@/db/schema";

export type ArticleReactionT = {
  article: Omit<
    Article,
    "id" | "title" | "text" | "createdAt" | "updatedAt" | "tags" | "author"
  >;
};
