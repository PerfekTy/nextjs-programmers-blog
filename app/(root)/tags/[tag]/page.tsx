import { filteredArticlesByTags } from "@/app/utils/functions";
import { TagPage } from "@/components/tags/tag-page";

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
    params.tag,
  );

  return (
    <TagPage
      searchQuery={searchQuery}
      filteredArticles={filteredArticles}
      tag={params.tag}
    />
  );
}
