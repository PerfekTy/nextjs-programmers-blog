import { Article } from "@/app/utils/definitions";

import { ArticleItem } from "@/components/articles/article-item";

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
  return (
    <div className="px-4 pt-2">
      <span className="flex items-end gap-2 text-3xl">
        <h1 className="text-muted-foreground">
          {searchQuery ? "Search for: " : "Search for tag: "}
        </h1>
        <p>{searchQuery ? searchQuery : "#" + tag}</p>
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
