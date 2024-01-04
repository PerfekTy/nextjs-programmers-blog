import { ArticleItem } from "@/components/articles/article-item";
import { ArticleCategory } from "@/components/articles/article-category";

import { Article } from "@/app/utils/definitions";

export const ArticleList = ({ articles }: { articles: Article[] }) => {
  return (
    <>
      <ArticleCategory />

      {articles.map((article) => (
        <ArticleItem key={article.id} article={article} />
      ))}
    </>
  );
};
