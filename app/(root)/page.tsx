import { getArticlesAction } from "@/app/(root)/actions";

import { ArticleList } from "@/components/articles/article-list";
import { Categories } from "@/components/articles/categories";

export default async function Page() {
  const articles = await getArticlesAction();

  return (
    <>
      <Categories />
      <ArticleList articles={articles} />
    </>
  );
}
