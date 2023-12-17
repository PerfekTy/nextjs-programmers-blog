"use client";

import { FormEvent, useEffect, useState } from "react";
import axios from "axios";
import { Article } from "@/db/schema";

import { ArticleItem } from "@/components/articles/article-item";
import { MotionButton } from "@/components/ui/motion-button";

export const ArticleList = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [isCategorized, setIsCategorized] = useState({
    latest: true,
    oldest: false,
    sortLatest: "",
    sortOldest: "",
  });

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const { data } = await axios.post("/api/articles", {
      latest: isCategorized.sortLatest,
      oldest: isCategorized.sortOldest,
    });

    setArticles(data);
  };

  useEffect(() => {
    const fetchArticles = async () => {
      const { data } = await axios.get("/api/articles");
      setArticles(data);
    };

    fetchArticles();
  }, []);

  return (
    <>
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
      {articles?.map((article) => (
        <ArticleItem key={article.id} article={article} />
      ))}
    </>
  );
};
