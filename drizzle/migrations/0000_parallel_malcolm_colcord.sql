CREATE TABLE IF NOT EXISTS "todos" (
	"id" bigint PRIMARY KEY NOT NULL,
	"text" text NOT NULL,
	"completed" boolean NOT NULL
);
