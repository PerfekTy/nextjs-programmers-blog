import { pgTable } from "drizzle-orm/pg-core/table";
import { serial, timestamp, varchar } from "drizzle-orm/pg-core";

export const articles = pgTable("articles", {
  id: serial("id").primaryKey(),
  title: varchar("title").notNull(),
  text: varchar("text").notNull(),
  author: varchar("author").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

export type Article = typeof articles.$inferSelect;
