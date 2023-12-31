ALTER TABLE "bookmarks" DROP CONSTRAINT "bookmarks_article_id_articles_id_fk";
--> statement-breakpoint
ALTER TABLE "comments" DROP CONSTRAINT "comments_article_id_articles_id_fk";
--> statement-breakpoint
ALTER TABLE "likes" DROP CONSTRAINT "likes_article_id_articles_id_fk";
--> statement-breakpoint
ALTER TABLE "bookmarks" ALTER COLUMN "article_id" SET DATA TYPE varchar;--> statement-breakpoint
ALTER TABLE "bookmarks" ALTER COLUMN "article_id" DROP NOT NULL;--> statement-breakpoint
ALTER TABLE "comments" ALTER COLUMN "article_id" SET DATA TYPE varchar;--> statement-breakpoint
ALTER TABLE "comments" ALTER COLUMN "article_id" DROP NOT NULL;--> statement-breakpoint
ALTER TABLE "likes" ALTER COLUMN "article_id" SET DATA TYPE varchar;--> statement-breakpoint
ALTER TABLE "likes" ALTER COLUMN "article_id" DROP NOT NULL;--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "bookmarks" ADD CONSTRAINT "bookmarks_article_id_articles_title_fk" FOREIGN KEY ("article_id") REFERENCES "articles"("title") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "comments" ADD CONSTRAINT "comments_article_id_articles_title_fk" FOREIGN KEY ("article_id") REFERENCES "articles"("title") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "likes" ADD CONSTRAINT "likes_article_id_articles_title_fk" FOREIGN KEY ("article_id") REFERENCES "articles"("title") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
