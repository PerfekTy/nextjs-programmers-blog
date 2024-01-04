import { Article } from "@/app/utils/definitions";

import { ArticleItem } from "@/components/articles/article-item";

type TagPageProps = {
  filteredArticles: Article[];
  params: {
    tag: string;
  };
  searchQuery: string;
};

export const TagPage = ({
  params,
  filteredArticles,
  searchQuery,
}: TagPageProps) => {
  const { tag } = params;

  return (
    <div className="px-4 pt-2">
      {searchQuery && (
        <span className="flex gap-2 items-end text-3xl">
          <h1 className="text-muted-foreground">Searched for tag: </h1>
          <p className="text3">#{tag}</p>
        </span>
      )}

      {searchQuery &&
        filteredArticles?.map((article) => (
          <ArticleItem key={article.id} article={article} />
        ))}

      {!filteredArticles?.length && (
        <p className="text-center text-lg">No articles found 😔</p>
      )}
    </div>
  );
};
