"use client";

import { useCallback, useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

import { getArticles } from "@/app/(root)/actions";

import { ArticleItem } from "@/components/articles/article-item";
import { ArticleCategory } from "@/components/articles/article-category";

import { Article } from "@/app/utils/definitions";
import { ArticleSkeleton } from "@/app/skeletons";

export function ArticleList({
  articles,
  searchQuery,
  sortQuery,
}: {
  articles: Article[];
  searchQuery: string;
  sortQuery: string;
}) {
  const [loadedArticles, setLoadedArticles] = useState<Article[]>(articles);
  const [showSkeleton, setShowSkeleton] = useState(true);
  const [page, setPage] = useState(1);
  const [ref, inView] = useInView();

  const loadMoreArticles = useCallback(async () => {
    const next = page + 1;
    const articles = await getArticles(searchQuery, sortQuery, next);

    if (articles?.length) {
      setPage(next);

      return setLoadedArticles((prev: Article[]) => [
        ...(prev?.length ? prev : []),
        ...articles,
      ]);
    }
    setShowSkeleton(false);
  }, [page, searchQuery, sortQuery]);

  useEffect(() => {
    if (inView) loadMoreArticles();
  }, [inView, loadMoreArticles]);

  useEffect(() => {
    setLoadedArticles(articles);
    if (searchQuery || sortQuery) {
      setPage(1);
    }
    setPage(1);
  }, [articles, searchQuery, sortQuery]);

  return (
    <>
      <ArticleCategory />
      {loadedArticles.map((article) => (
        <ArticleItem key={article.id} article={article} />
      ))}

      <div ref={ref} className="flex w-full justify-center">
        {showSkeleton!! && <ArticleSkeleton />}
      </div>
    </>
  );
}
