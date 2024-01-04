"use client";

import React, { useState } from "react";

import { Bookmark, Heart, MessageSquare, MoreHorizontal } from "lucide-react";

export const ReactionsTab = ({
  articleTitle,
  username,
}: {
  articleTitle: string;
  username: string;
}) => {
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  return (
    <div className="flex flex-col gap-7 text-[12px] font-light text-muted-foreground md:text-sm lg:flex-row">
      <form
        className="flex cursor-pointer flex-col items-center gap-1"
        data-title="Like"
        onClick={() => setIsLiked(!isLiked)}
      >
        <button
          className={`hover:text-[#ef4444] ${isLiked && "text-[#ef4444]"}`}
        >
          <Heart fill={isLiked ? "#ef4444" : "#171717"} />
        </button>
        {/* TODO: ADD REACTION*/}
      </form>

      <form
        className="flex cursor-pointer flex-col items-center gap-1"
        data-title="Save"
        onClick={() => setIsBookmarked(!isBookmarked)}
      >
        <button
          className={`hover:text-[#6366f1] ${isBookmarked && "text-[#6366f1]"}`}
        >
          <Bookmark fill={isBookmarked ? "#6366f1" : "#171717"} />
        </button>
        {/* TODO: ADD REACTION*/}
      </form>

      <span
        className="flex cursor-pointer flex-col items-center gap-1 hover:text-[#f59e0b]"
        data-title="Jump to comments"
      >
        <MessageSquare />
        {/* TODO: ADD REACTION*/}
      </span>

      <span
        className="flex cursor-pointer flex-col items-center gap-1"
        data-title="More options"
      >
        <MoreHorizontal />
        {/* TODO: ADD REACTION*/}
      </span>
    </div>
  );
};
