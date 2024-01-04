import { fetchFilteredArticles } from "@/app/utils/data";
import { TagPage } from "@/components/tags/tag-page";

type TagsPageProps = {
  params: { tag: string };
  searchParams?: { searchQuery?: string };
};

export default async function Page({
  params,
  searchParams,
}: Readonly<TagsPageProps>) {
  const searchQuery = searchParams?.searchQuery ?? params.tag;
  const filteredArticles = await fetchFilteredArticles(searchQuery);

  return (
    <TagPage
      params={params}
      filteredArticles={filteredArticles}
      searchQuery={searchQuery}
    />
  );
}
