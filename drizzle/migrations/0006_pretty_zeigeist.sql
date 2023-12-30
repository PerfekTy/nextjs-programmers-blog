ALTER TABLE "articles" ALTER COLUMN "tags" SET DATA TYPE text[];--> statement-breakpoint
ALTER TABLE "articles" ADD CONSTRAINT "articles_title_unique" UNIQUE("title");