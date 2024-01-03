"use client";

import { useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

import { MotionButton } from "@/components/ui/motion-button";

export function ArticleCategory() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const [isButtonClicked, setIsButtonClicked] = useState({
    latest: true,
    oldest: false,
  });

  const handleSort = (term: string) => {
    const params = new URLSearchParams(searchParams);

    if (term) {
      params.set("sortQuery", term);
    } else {
      params.delete("sortQuery");
    }

    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="flex gap-5 ml-3">
      <MotionButton
        variant="ghost"
        style={`hover:bg-button_active2 hover:dark:bg-button_active cursor-pointer text-lg font-normal 
        ${
          isButtonClicked.latest &&
          "font-bold dark:bg-button_active bg-button_active2"
        }`}
        content="Latest"
        onClick={() => {
          setIsButtonClicked({ latest: true, oldest: false });
          handleSort("desc");
        }}
      />
      <MotionButton
        variant="ghost"
        style={`hover:bg-button_active2 hover:dark:bg-button_active cursor-pointer text-lg font-normal 
        ${
          isButtonClicked.oldest &&
          "font-bold dark:bg-button_active bg-button_active2"
        }`}
        content="Oldest"
        onClick={() => {
          setIsButtonClicked({ latest: false, oldest: true });
          handleSort("asc");
        }}
      />
    </div>
  );
}
