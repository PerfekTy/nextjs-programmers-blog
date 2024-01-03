"use client";

import { useCallback, useEffect, useState } from "react";
import { Article } from "@/app/definitions";
import { fetchArticles } from "@/redux/slices/articles-slice";
import { AppDispatch, RootState } from "@/redux/store";
import { useDispatch, useSelector } from "react-redux";
import { ArticleItem } from "@/components/articles/article-item";

export const TagPage = ({ params }: { params: { tag: string } }) => {
  const dispatch = useDispatch<AppDispatch>();
  const { articles } = useSelector((state: RootState) => state.articles);
  const { tag } = params;
  const [filteredArticles, setFilteredArticles] = useState<Article[]>([]);

  const filterArticles = useCallback(() => {
    const filtered = articles.filter((article) => article.tags.includes(tag));

    setFilteredArticles(filtered);
  }, [articles, tag]);

  useEffect(() => {
    dispatch(fetchArticles());
  }, [dispatch]);

  useEffect(() => {
    filterArticles();
  }, [filterArticles]);

  return (
    <div className="px-4 pt-2">
      <span className="flex gap-2 items-end text-3xl">
        <h1 className="text-muted-foreground">Searched for tag: </h1>
        <p className="text3">#{tag}</p>
      </span>

      {filteredArticles.map((filteredArticle) => (
        <ArticleItem key={filteredArticle.id} article={filteredArticle} />
      ))}
    </div>
  );
};
