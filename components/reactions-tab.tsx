"use client";

import { useState } from "react";

import { Bookmark, Heart, MessageSquare, MoreHorizontal } from "lucide-react";
import { ArticleReactionT } from "@/app/definitions";

export const ReactionsTab = ({ article }: ArticleReactionT) => {
  const [isReacted, setIsReacted] = useState({
    bookmark: false,
    heart: false,
  });

  return (
    <div className="flex gap-7 text-[12px] flex-col md:flex-row md:text-sm font-light text-muted-foreground">
      <span
        className="flex flex-col items-center gap-1 cursor-pointer"
        data-title="Like"
        onClick={() =>
          setIsReacted((prevState) => {
            return { ...prevState, heart: !isReacted.heart };
          })
        }
      >
        <div
          className={`${
            isReacted.heart && "text-[#ef4444]"
          } hover:text-[#ef4444] transition-all`}
        >
          <Heart fill={isReacted.heart ? "#ef4444" : "#171717"} />
        </div>
        <p>{article?.likes}</p>
      </span>
      <span
        className="flex flex-col items-center gap-1 cursor-pointer"
        data-title="Jump to comments"
      >
        <div className="hover:text-[#f59e0b] transition-all">
          <MessageSquare />
        </div>
        <p>{article?.comments}</p>
      </span>
      <span
        className="flex flex-col items-center gap-1 cursor-pointer"
        data-title="Save"
        onClick={() =>
          setIsReacted((prevState) => {
            return { ...prevState, bookmark: !isReacted.bookmark };
          })
        }
      >
        <div
          className={`${
            isReacted.bookmark && "text-button_text"
          } hover:text-button_text transition-all`}
        >
          <Bookmark fill={isReacted.bookmark ? "#6366f1" : "#171717"} />
        </div>
        <p>{article?.bookmarks}</p>
      </span>
      <span
        className="flex flex-col items-center gap-1 cursor-pointer"
        data-title="More options"
      >
        <div className="hover:scale-110 transition-all">
          <MoreHorizontal />
        </div>
      </span>
    </div>
  );
};
