import { articles, bookmarks, comments, likes } from "@/db/schema";

export type Article = typeof articles.$inferSelect;
export type Bookmark = typeof bookmarks.$inferInsert;
export type Comment = typeof comments.$inferInsert;
export type Like = typeof likes.$inferInsert;
