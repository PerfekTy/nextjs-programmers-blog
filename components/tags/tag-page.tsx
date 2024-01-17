"use client";

import { useCallback, useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { getArticles } from "@/app/(root)/actions";

import { Article } from "@/app/utils/definitions";

import { ArticleItem } from "@/components/articles/article-item";
import { ArticleSkeleton } from "@/app/skeletons";

type TagPageProps = {
  tag: string;
  filteredArticles: Article[] | undefined;
  searchQuery: string;
};

export const TagPage = ({
  searchQuery,
  filteredArticles,
  tag,
}: TagPageProps) => {
  const [loadedTags, setLoadedTags] = useState<Article[] | undefined>(
    filteredArticles,
  );
  const [page, setPage] = useState(1);
  const [ref, inView] = useInView();
  const [showSkeleton, setShowSkeleton] = useState(true);

  const loadMoreArticles = useCallback(async () => {
    const next = page + 1;
    const articles = await getArticles(searchQuery, "desc", next);

    if (articles?.length) {
      setPage(next);

      return setLoadedTags((prev: Article[] | undefined) => [
        ...(prev?.length ? prev : []),
        ...articles,
      ]);
    }
    setShowSkeleton(false);
  }, [page, searchQuery]);

  useEffect(() => {
    if (inView) loadMoreArticles();
  }, [inView, loadMoreArticles]);

  useEffect(() => {
    setLoadedTags(filteredArticles);
    if (searchQuery) {
      setPage(1);
    }
  }, [filteredArticles, searchQuery]);

  return (
    <div className="px-4 pt-2">
      <span className="flex items-end gap-2 text-3xl">
        <h1 className="text-muted-foreground">
          {searchQuery ? "Search for: " : "Search for tag: "}
        </h1>
        <p>{searchQuery ? searchQuery : "#" + tag}</p>
      </span>

      {loadedTags?.map((article) => (
        <ArticleItem key={article.id} article={article} />
      ))}

      {!loadedTags?.length!! && (
        <p className="text-center text-lg">No articles found 😔</p>
      )}

      {showSkeleton!! && (
        <div ref={ref} className="flex w-full justify-center">
          <ArticleSkeleton />
        </div>
      )}
    </div>
  );
};
