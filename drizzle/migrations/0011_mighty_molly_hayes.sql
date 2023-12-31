ALTER TABLE "bookmarks" RENAME COLUMN "article_id" TO "article_title";--> statement-breakpoint
ALTER TABLE "comments" RENAME COLUMN "article_id" TO "article_title";--> statement-breakpoint
ALTER TABLE "likes" RENAME COLUMN "article_id" TO "article_title";--> statement-breakpoint
ALTER TABLE "bookmarks" DROP CONSTRAINT "bookmarks_article_id_articles_title_fk";
--> statement-breakpoint
ALTER TABLE "comments" DROP CONSTRAINT "comments_article_id_articles_title_fk";
--> statement-breakpoint
ALTER TABLE "likes" DROP CONSTRAINT "likes_article_id_articles_title_fk";
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "bookmarks" ADD CONSTRAINT "bookmarks_article_title_articles_title_fk" FOREIGN KEY ("article_title") REFERENCES "articles"("title") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "comments" ADD CONSTRAINT "comments_article_title_articles_title_fk" FOREIGN KEY ("article_title") REFERENCES "articles"("title") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "likes" ADD CONSTRAINT "likes_article_title_articles_title_fk" FOREIGN KEY ("article_title") REFERENCES "articles"("title") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
