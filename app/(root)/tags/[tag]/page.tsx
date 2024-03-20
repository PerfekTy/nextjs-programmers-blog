import { filteredArticlesByTags } from "@/app/utils/functions";
import { TagPage } from "@/app/(root)/tags/[tag]/tag-page";

type TagsPageProps = {
  params: { tag: string };
  searchParams?: { searchQuery?: string };
};

export default async function ArticleTagPage({
  params,
  searchParams,
}: TagsPageProps) {
  const searchQuery = searchParams?.searchQuery ?? "";
  const filteredArticles = await filteredArticlesByTags(
    searchQuery,
    params.tag.replace("%20", ""),
  );

  return (
    <TagPage
      searchQuery={searchQuery}
      filteredArticles={filteredArticles}
      tag={params.tag}
    />
  );
}
