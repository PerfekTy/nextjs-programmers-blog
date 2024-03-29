import { ArticleList } from "@/components/articles/article-list";
import { getArticles } from "./actions";

export default async function HomePage({
  searchParams,
}: {
  searchParams?: {
    searchQuery?: string;
    sortQuery?: string;
  };
}) {
  const searchQuery = searchParams?.searchQuery ?? "";
  const sortQuery = searchParams?.sortQuery ?? "";

  const articles = await getArticles(searchQuery, sortQuery);

  return (
    <>
      {searchQuery && (
        <span className="flex items-end gap-2 p-2 text-3xl transition-all">
          <h1 className="text-muted-foreground">Searched for: </h1>
          <p className="text3">{searchQuery}</p>
        </span>
      )}

      <ArticleList
        articles={articles}
        searchQuery={searchQuery}
        sortQuery={sortQuery}
      />
    </>
  );
}
