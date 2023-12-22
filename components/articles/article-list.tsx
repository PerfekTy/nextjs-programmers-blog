"use client";

import {useContext, useEffect, useState} from "react";
import axios from "axios";
import { Article } from "@/db/schema";

import { ArticleItem } from "@/components/articles/article-item";
import { ArticleItemSkeleton } from "@/components/skeletons";
import { BeatLoader } from "react-spinners";
import { useSelector } from "react-redux";
import { ArticleCategory } from "@/components/articles/article-category";
import {ArticleContext} from "@/app/articleContext/article-context";

export const ArticleList = () => {
  const selectorArticles = useSelector((state: any) => state.articles);
  const [isLoading, setIsLoading] = useState({
    initial: false,
    categorized: false,
  });

  const Articles = useContext(ArticleContext)

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        setIsLoading({ initial: true, categorized: false });
        const { data } = await axios.get("/api/articles");
        Articles.setData(data);
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
      Articles.setData([]);
      Articles.setData(selectorArticles.articles);
    }
  }, [selectorArticles.articles]);

  return (
    <>
      <ArticleCategory setIsLoading={setIsLoading} setArticles={Articles.setData} />

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

      {Articles.data.length ? (
        Articles.data.map((article) => (
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
