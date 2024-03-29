"use client";

import { useRouter } from "next/navigation";
import { useMemo } from "react";
import formatDistanceToNow from "date-fns/esm/formatDistanceToNow";

import { Avatar } from "@/components/ui/avatar";
import { montserrat } from "@/app/utils/fonts";

import { Article } from "@/app/utils/definitions";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

export const ArticleItem = ({ article }: { article: Article }) => {
  const { push } = useRouter();

  const createdAt = useMemo(() => {
    if (!article.createdAt) {
      return;
    }

    return new Date(article.createdAt).toLocaleString("en-US", {
      month: "long",
      day: "2-digit",
    });
  }, [article.createdAt]);

  const formatDistanceCreatedAt = useMemo(() => {
    if (!article.createdAt) {
      return;
    }

    return formatDistanceToNow(new Date(article.createdAt), {
      addSuffix: true,
      includeSeconds: true,
    });
  }, [article.createdAt]);

  return (
    <div
      className="m-3 cursor-pointer rounded-lg shadow"
      onClick={() => push(`/article/${article.author}/${article.title}`)}
    >
      <div className="rounded-lg border bg-white dark:border-none dark:bg-sidebar">
        <div className="flex items-center">
          <div className="flex items-center gap-3 px-5 py-3">
            <Avatar
              src={article.authorImage ? article.authorImage : ""}
              onClick={(e) => {
                e.stopPropagation();
                push(`/article/${article.author}`);
              }}
            />
            <div>
              <p
                className="w-fit cursor-pointer hover:bg-button_active2 hover:dark:bg-button_active"
                onClick={(e) => {
                  e.stopPropagation();
                  push(`/article/${article.author}`);
                }}
              >
                {article.author}
              </p>
              <p className="text-sm text-muted-foreground">
                {createdAt} ({formatDistanceCreatedAt})
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-3 px-16 pb-3">
          <h1 className="text-3xl font-bold hover:text-button_active hover:dark:text-button_text">
            {article.title.replaceAll("-", " ")}
          </h1>
          <span className="flex gap-3 text-sm text-muted-foreground">
            {article.tags.split(",").map((tag) => (
              <p key={tag}>#{tag.trim()}</p>
            ))}
          </span>
          <text className={`${montserrat.className} line-clamp-3 text-[15px]`}>
            <Markdown remarkPlugins={[remarkGfm]}>{article.text}</Markdown>
          </text>
        </div>
      </div>
    </div>
  );
};
