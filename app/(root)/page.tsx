import { ArticleList } from "@/components/articles/article-list";
import { fetchFilteredArticles, fetchSortedArticles } from "../utlis/data";

export default async function Home({
  searchParams,
}: {
  searchParams?: {
    searchQuery?: string;
    sortQuery?: string;
  };
}) {
  const searchQuery = searchParams?.searchQuery || "";
  const sortQuery = searchParams?.sortQuery || "desc";

  const filteredArticles = await fetchFilteredArticles(searchQuery);
  const sortedArticles = await fetchSortedArticles(sortQuery);

  return (
    <>
      <ArticleList
        filteredArticles={filteredArticles}
        sortedArticles={sortedArticles}
        searchQuery={searchQuery}
        sortQuery={sortQuery}
      />
    </>
  );
}
