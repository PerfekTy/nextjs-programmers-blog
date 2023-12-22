import { FormEvent, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/redux/store";

import { MotionButton } from "@/components/ui/motion-button";
import {
  categorizeArticles,
  setSearchedArticles,
} from "@/redux/slices/articles-slice";

export function ArticleCategory() {
  const dispatch = useDispatch<AppDispatch>();
  const { articles } = useSelector((state: RootState) => state.articles);
  const [isButtonClicked, setIsButtonClicked] = useState({
    latest: true,
    oldest: false,
  });
  const [categorize, setCategorize] = useState("");

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    dispatch(categorizeArticles(categorize));
  };

  return (
    <form onSubmit={onSubmit} className="flex gap-5 ml-3">
      <MotionButton
        variant="ghost"
        style={`hover:bg-button_active2 hover:dark:bg-button_active cursor-pointer text-lg font-normal 
        ${
          isButtonClicked.latest &&
          "font-bold dark:bg-button_active bg-button_active2"
        }`}
        content="Latest"
        onClick={() => {
          setCategorize("desc");
          setIsButtonClicked({ latest: true, oldest: false });
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
          setCategorize("asc");
          setIsButtonClicked({ latest: false, oldest: true });
        }}
      />
    </form>
  );
}
