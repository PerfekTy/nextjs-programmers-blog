import { useRouter } from "next/navigation";
import { useMemo } from "react";
import formatDistanceToNow from "date-fns/esm/formatDistanceToNow";

import { Avatar } from "@/components/ui/avatar";
import { montserrat } from "@/app/fonts";

import { Article } from "@/app/definitions";

export const ArticleItem = ({ article }: { article: Article }) => {
  const router = useRouter();

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
      onClick={() => router.push(`/${article.author}/${article.title}`)}
    >
      <div className="rounded-lg dark:bg-sidebar bg-white dark:border-none border">
        <div className="flex items-center">
          <div className="flex items-center gap-3 px-5 py-3">
            {/* Avatar */}
            <Avatar
              src="/us.jpg"
              onClick={(e) => {
                e.stopPropagation();
                router.push(`/${article.author}`);
              }}
            />
            <div>
              <p
                className="cursor-pointer"
                onClick={(e) => {
                  e.stopPropagation();
                  router.push(`/${article.author}`);
                }}
              >
                {article.author}
              </p>
              <p className="text-muted-foreground text-sm">
                {createdAt} ({formatDistanceCreatedAt})
              </p>
            </div>
          </div>
        </div>
        <div className="px-16 pb-3 flex flex-col gap-3">
          <h1 className="text-3xl font-bold hover:dark:text-button_text hover:text-button_active">
            {article.title}
          </h1>
          <span className="flex gap-3 text-sm text-muted-foreground">
            {article.tags.map((tag: string) => (
              <p key={tag} className="cursor-pointer">
                #{tag}
              </p>
            ))}
          </span>
          <text className={`${montserrat.className} line-clamp-3 text-[15px]`}>
            {article.text}
          </text>
        </div>
      </div>
    </div>
  );
};
