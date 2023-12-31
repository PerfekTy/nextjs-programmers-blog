import { pgTable } from "drizzle-orm/pg-core/table";
import { serial, timestamp, varchar, text, uuid } from "drizzle-orm/pg-core";

export const users = pgTable("users", {
  id: uuid("id").primaryKey(),
  name: varchar("name").notNull(),
  username: varchar("username").notNull().unique(),
  email: varchar("email").notNull().unique(),
});

export const articles = pgTable("articles", {
  id: serial("id").primaryKey(),
  title: varchar("title").unique().notNull(),
  text: varchar("text").notNull(),
  author: varchar("author").notNull(),
  tags: text("tags").array().notNull(),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

export const bookmarks = pgTable("bookmarks", {
  id: serial("id").primaryKey(),
  articleTitle: varchar("article_title").references(() => articles.title),
  username: varchar("user_id").references(() => users.username),
  createdAt: timestamp("created_at").defaultNow(),
});

export const comments = pgTable("comments", {
  id: serial("id").primaryKey(),
  text: varchar("text").notNull(),
  articleTitle: varchar("article_title").references(() => articles.title),
  username: varchar("user_id").references(() => users.username),
  createdAt: timestamp("created_at").defaultNow(),
});

export const likes = pgTable("likes", {
  id: serial("id").primaryKey(),
  articleTitle: varchar("article_title").references(() => articles.title),
  username: varchar("user_id").references(() => users.username),
  createdAt: timestamp("created_at").defaultNow(),
});
