"use client";

import { FormEvent, useEffect, useState } from "react";
import axios from "axios";
import { Article } from "@/db/schema";

import { ArticleItem } from "@/components/articles/article-item";
import { MotionButton } from "@/components/ui/motion-button";
import { ArticleItemSkeleton } from "@/components/skeletons";
import { BeatLoader } from "react-spinners";
import { useSelector } from "react-redux";
import { ArticleCategory } from "@/components/articles/article-category";

export const ArticleList = () => {
  const selectorArticles = useSelector((state: any) => state.articles);
  const [articles, setArticles] = useState<Article[]>([]);
  const [isLoading, setIsLoading] = useState({
    initial: false,
    categorized: false,
  });

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        setIsLoading({ initial: true, categorized: false });
        const { data } = await axios.get("/api/articles");
        setArticles(data);
      } catch (e) {
        console.log(e);
      } finally {
        setIsLoading({ initial: false, categorized: false });
      }
    };

    fetchArticles();
  }, []);

  useEffect(() => {
    if (selectorArticles.articles) {
      setArticles([]);
      setArticles(selectorArticles.articles);
    }
  }, [selectorArticles.articles]);

  return (
    <>
      <ArticleCategory setIsLoading={setIsLoading} setArticles={setArticles} />

      {isLoading.initial && (
        <>
          <ArticleItemSkeleton />
          <ArticleItemSkeleton />
          <ArticleItemSkeleton />
          <ArticleItemSkeleton />
        </>
      )}

      {isLoading.categorized && (
        <>
          <div className="justify-center w-full flex dark:hidden m-2">
            <BeatLoader size={20} color="black" />
          </div>
          <div className="justify-center w-full dark:flex hidden m-2">
            <BeatLoader size={20} color="white" />
          </div>
        </>
      )}

      {articles.length ? (
        articles.map((article) => (
          <ArticleItem article={article} key={article.id} />
        ))
      ) : (
        <p className="justify-center w-full flex mt-10 font-bold">
          {"Can't find searched article 😔"}
        </p>
      )}
    </>
  );
};
