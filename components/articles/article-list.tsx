import { Article } from "@/db/schema";

import { ArticleItem } from "@/components/articles/article-item";

export const ArticleList = async ({
  articles,
}: {
  articles: Article[] | undefined;
}) => {
  if (!articles) {
    return <p>No articles.</p>;
  }

  return (
    <>
      {articles.map((article) => (
        <ArticleItem key={article.id} article={article} />
      ))}
    </>
  );
};
