import { useSelector } from "react-redux";
import { FormEvent, useState } from "react";
import axios from "axios";

import { Article } from "@/db/schema";

import { MotionButton } from "@/components/ui/motion-button";

type ArticleCategoryProps = {
  setArticles: (articles: Article[]) => void;
  setIsLoading: (isLoading: { initial: boolean; categorized: boolean }) => void;
};

export function ArticleCategory({
  setIsLoading,
  setArticles,
}: ArticleCategoryProps) {
  const selectorArticles = useSelector((state: any) => state.articles);
  const [isCategorized, setIsCategorized] = useState({
    latest: true,
    oldest: false,
    sortLatest: "",
    sortOldest: "",
  });

  const sortArticlesByDate = (sortingMethod: string) => {
    switch (sortingMethod) {
      case "desc":
        return setArticles(
          [...selectorArticles.articles].sort(
            (a, b) =>
              new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
          ),
        );

      case "asc":
        return setArticles(
          [...selectorArticles.articles].sort(
            (a, b) =>
              new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime(),
          ),
        );
    }
  };

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      setIsLoading({ initial: false, categorized: true });

      if (selectorArticles.articles.length && isCategorized.latest) {
        return sortArticlesByDate("desc");
      }
      if (selectorArticles.articles.length && isCategorized.oldest) {
        return sortArticlesByDate("asc");
      }

      const { data } = await axios.post("/api/articles", {
        latest: isCategorized.sortLatest,
        oldest: isCategorized.sortOldest,
      });

      return setArticles(data);
    } catch (e) {
      console.log(e);
    } finally {
      setIsLoading({ initial: false, categorized: false });
    }
  };

  return (
    <form onSubmit={onSubmit} className="flex gap-5 ml-3">
      <MotionButton
        variant="ghost"
        style={`hover:bg-button_active2 hover:dark:bg-button_active cursor-pointer text-lg font-normal 
        ${
          isCategorized.latest &&
          "font-bold dark:bg-button_active bg-button_active2"
        }`}
        content="Latest"
        onClick={() =>
          setIsCategorized({
            latest: true,
            oldest: false,
            sortLatest: "desc",
            sortOldest: "",
          })
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
          setIsCategorized({
            latest: false,
            oldest: true,
            sortLatest: "",
            sortOldest: "asc",
          })
        }
      />
    </form>
  );
}
