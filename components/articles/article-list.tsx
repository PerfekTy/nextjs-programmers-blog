"use client";

import { FormEvent, useEffect, useState } from "react";
import axios from "axios";
import { Article } from "@/db/schema";

import { ArticleItem } from "@/components/articles/article-item";
import { MotionButton } from "@/components/ui/motion-button";
import { ArticleItemSkeleton } from "@/components/skeletons";
import { BeatLoader } from "react-spinners";

export const ArticleList = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [isCategorized, setIsCategorized] = useState({
    latest: true,
    oldest: false,
    sortLatest: "",
    sortOldest: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isCategorizedLoading, setIsCategorizedLoading] = useState(false);
  const [loadingSkeletonCount] = useState(4);

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      setIsCategorizedLoading(true);
      const { data } = await axios.post("/api/articles", {
        latest: isCategorized.sortLatest,
        oldest: isCategorized.sortOldest,
      });
      setArticles(data);
    } catch (e) {
      console.log(e);
    } finally {
      setIsCategorizedLoading(false);
    }
  };

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        setIsLoading(true);
        const { data } = await axios.get("/api/articles");
        setArticles(data);
      } catch (e) {
        console.log(e);
      } finally {
        setIsLoading(false);
      }
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
      {isLoading &&
        Array.from({ length: loadingSkeletonCount }).map((_, key) => (
          <ArticleItemSkeleton key={key} />
        ))}

      {isCategorizedLoading && (
        <>
          <div className="justify-center w-full flex dark:hidden m-2">
            <BeatLoader size={20} color="black" />
          </div>
          <div className="justify-center w-full dark:flex hidden m-2">
            <BeatLoader size={20} color="white" />
          </div>
        </>
      )}

      {articles.map((article) => (
        <ArticleItem article={article} key={article.id} />
      ))}
    </>
  );
};
