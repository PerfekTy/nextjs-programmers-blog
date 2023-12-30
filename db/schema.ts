import { pgTable } from "drizzle-orm/pg-core/table";
import { serial, timestamp, varchar, text, integer } from "drizzle-orm/pg-core";

export const articles = pgTable("articles", {
  id: serial("id").primaryKey(),
  title: varchar("title").unique().notNull(),
  text: varchar("text").notNull(),
  author: varchar("author").notNull(),
  tags: text("tags").array().notNull(),
  // REACTIONS NOW STATIC TODO: TO CHANGE
  likes: integer("likes"),
  comments: integer("comments"),
  bookmarks: integer("bookmarks"),
  // REACTIONS NOW STATIC TODO: TO CHANGE
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

export type Article = typeof articles.$inferSelect;
