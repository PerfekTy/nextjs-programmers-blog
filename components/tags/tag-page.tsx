import { Article } from "@/app/utils/definitions";

import { ArticleItem } from "@/components/articles/article-item";

type TagPageProps = {
  filteredArticles: Article[];
  searchQuery: string;
};

export const TagPage = ({ searchQuery, filteredArticles }: TagPageProps) => {
  return (
    <div className="px-4 pt-2">
      <span className="flex items-end gap-2 text-3xl">
        <h1 className="text-muted-foreground">Searched for tag: </h1>
        <p className="text3">#{searchQuery}</p>
      </span>

      {filteredArticles?.map((article) => (
        <ArticleItem key={article.id} article={article} />
      ))}

      {!filteredArticles?.length && (
        <p className="text-center text-lg">No articles found 😔</p>
      )}
    </div>
  );
};
