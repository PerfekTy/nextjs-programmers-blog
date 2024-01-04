import { ArticleItem } from "@/components/articles/article-item";
import { ArticleCategory } from "@/components/articles/article-category";
import { Article } from "@/app/utils/definitions";

type ArticleListProps = {
  sortedArticles: Article[] | undefined;
  filteredArticles: Article[];
  searchQuery?: string;
  sortQuery?: string;
};

export const ArticleList = ({
  filteredArticles,
  sortedArticles,
  searchQuery,
  sortQuery,
}: ArticleListProps) => {
  return (
    <>
      <ArticleCategory />

      {sortQuery &&
        searchQuery &&
        filteredArticles?.map((article) => (
          <ArticleItem article={article} key={article.id} />
        ))}

      {searchQuery &&
        !sortQuery &&
        filteredArticles?.map((article) => (
          <ArticleItem article={article} key={article.id} />
        ))}

      {sortQuery &&
        !searchQuery &&
        sortedArticles?.map((article) => (
          <ArticleItem article={article} key={article.id} />
        ))}

      {!filteredArticles.length && (
        <p className="text-center text-lg">No articles found 😔</p>
      )}
    </>
  );
};
