import { Article } from "@/db/schema";
import { ArticleItem } from "@/components/articles/article-item";

export const ArticleList = ({ articles }: { articles: Article[] }) => {
  console.log(articles);
  return (
    <>
      {articles?.map((article) => (
        <ArticleItem key={article.id} article={article} />
      ))}
    </>
  );
};
