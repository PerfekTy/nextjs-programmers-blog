"use client";

import { useState } from "react";

import { MotionButton } from "@/components/ui/motion-button";

export const Categories = () => {
  const [isClicked, setIsClicked] = useState({
    latest: true,
    top: false,
  });
  return (
    <div className="flex gap-5 ml-3">
      <MotionButton
        variant="ghost"
        style={`hover:text-button_text cursor-pointer text-lg font-normal ${
          isClicked.latest && "font-bold dark:bg-sidebar bg-button_active2"
        }`}
        content="Latest"
        onClick={() => setIsClicked({ latest: true, top: false })}
      />
      <MotionButton
        variant="ghost"
        style={`hover:text-button_text cursor-pointer text-lg font-normal ${
          isClicked.top && "font-bold dark:bg-sidebar bg-button_active2"
        }`}
        content="Top"
        onClick={() => setIsClicked({ latest: false, top: true })}
      />
    </div>
  );
};
