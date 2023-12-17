"use client";

import { MotionButton } from "@/components/ui/motion-button";
import { useState } from "react";

export const Categories = () => {
  const [isCategorized, setIsCategorized] = useState({
    latest: true,
    oldest: false,
    top: false,
  });

  return (
    <div className="flex gap-5 ml-3">
      <MotionButton
        variant="ghost"
        style={`hover:bg-button_active2 hover:dark:bg-button_active cursor-pointer text-lg font-normal 
        ${
          isCategorized.latest &&
          "font-bold dark:bg-button_active bg-button_active2"
        }`}
        content="Latest"
        onClick={() =>
          setIsCategorized({ latest: true, oldest: false, top: false })
        }
      />
      <MotionButton
        variant="ghost"
        style={`hover:bg-button_active2 hover:dark:bg-button_active cursor-pointer text-lg font-normal 
        ${
          isCategorized.oldest &&
          "font-bold dark:bg-button_active bg-button_active2"
        }`}
        content="Oldest"
        onClick={() =>
          setIsCategorized({ latest: false, oldest: true, top: false })
        }
      />
      <MotionButton
        variant="ghost"
        style={`hover:bg-button_active2 hover:dark:bg-button_active cursor-pointer text-lg font-normal 
        ${
          isCategorized.top &&
          "font-bold dark:bg-button_active bg-button_active2"
        }`}
        content="Top"
        onClick={() =>
          setIsCategorized({ latest: false, oldest: false, top: true })
        }
      />
    </div>
  );
};
