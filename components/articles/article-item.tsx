import formatDistanceToNow from "date-fns/esm/formatDistanceToNow";

import { Article } from "@/db/schema";
import { Avatar } from "@/components/ui/avatar";
import { montserrat } from "@/app/fonts";

export const ArticleItem = ({ article }: { article: Article }) => {
  if (!article.createdAt) {
    return;
  }

  const createdAt = new Date(article.createdAt).toLocaleString("en-US", {
    month: "long",
    day: "2-digit",
  });

  const formatDistanceCreatedAt = formatDistanceToNow(
    new Date(article.createdAt),
    {
      addSuffix: true,
      includeSeconds: true,
    },
  );

  const formatDistanceUpdatedAt = formatDistanceToNow(
    new Date(article.createdAt),
    {
      addSuffix: true,
      includeSeconds: true,
    },
  );

  return (
    <div className="m-3 cursor-pointer rounded-lg shadow">
      <div className="rounded-lg dark:bg-sidebar bg-white dark:border-none border">
        <div className="flex items-center gap-3 px-5 py-3">
          {/* Avatar */}
          <Avatar src={"/us.jpg"} />
          <div>
            <p className="cursor-pointer">{article.author}</p>
            <p className="text-muted-foreground text-sm">
              {createdAt} ({formatDistanceCreatedAt})
            </p>
          </div>
        </div>
        <div className="px-16 pb-3 flex flex-col gap-3">
          <h1 className="text-3xl font-bold hover:dark:text-button_text hover:text-button_active">
            {article.title}
          </h1>
          <span className="flex gap-5 text-sm text-muted-foreground">
            <p className="cursor-pointer">{article.tags}</p>
          </span>
          <text className={`${montserrat.className} line-clamp-3 text-[15px]`}>
            {article.text}
          </text>
        </div>
      </div>
    </div>
  );
};
