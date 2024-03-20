import { pgTable } from "drizzle-orm/pg-core/table";
import { serial, timestamp, varchar, text } from "drizzle-orm/pg-core";

export const articles = pgTable("articles", {
  id: serial("id").primaryKey(),
  title: varchar("title").unique().notNull(),
  text: varchar("text").notNull(),
  author: varchar("author").notNull(),
  authorImage: text("authorImage"),
  tags: text("tags").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

export const bookmarks = pgTable("bookmarks", {
  id: serial("id").primaryKey(),
  articleTitle: varchar("article_title").references(() => articles.title),
  username: varchar("username"),
  createdAt: timestamp("created_at").defaultNow(),
});

export const comments = pgTable("comments", {
  id: serial("id").primaryKey(),
  text: varchar("text").notNull(),
  articleTitle: varchar("article_title").references(() => articles.title),
  username: varchar("username"),
  createdAt: timestamp("created_at").defaultNow(),
});

export const likes = pgTable("likes", {
  id: serial("id").primaryKey(),
  articleTitle: varchar("article_title").references(() => articles.title),
  username: varchar("username"),
  createdAt: timestamp("created_at").defaultNow(),
});
