import { articles, bookmarks, comments, likes, users } from "@/db/schema";

export type ArticleReactionT = {
  article: Omit<
    Article,
    "id" | "title" | "text" | "createdAt" | "updatedAt" | "tags" | "author"
  >;
};

export type Article = typeof articles.$inferSelect;
export type User = typeof users.$inferInsert;
export type Bookmark = typeof bookmarks.$inferInsert;
export type Comment = typeof comments.$inferInsert;
export type Like = typeof likes.$inferInsert;
