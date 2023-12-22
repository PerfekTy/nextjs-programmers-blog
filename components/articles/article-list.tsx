"use client";

import { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/redux/store";
import { fetchArticles } from "@/redux/slices/articles-slice";

import { BeatLoader } from "react-spinners";

import { ArticleItem } from "@/components/articles/article-item";
import { ArticleItemSkeleton } from "@/components/skeletons";
import { ArticleCategory } from "@/components/articles/article-category";

export const ArticleList = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { articles, loading } = useSelector(
    (state: RootState) => state.articles,
  );

  useEffect(() => {
    dispatch(fetchArticles());
  }, [dispatch]);

  return (
    <>
      <ArticleCategory />

      {loading.articles && (
        <>
          <ArticleItemSkeleton />
          <ArticleItemSkeleton />
          <ArticleItemSkeleton />
          <ArticleItemSkeleton />
        </>
      )}

      {loading.categorize && (
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
