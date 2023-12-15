import { getAllArticles } from "@/app/(root)/actions";

import { Categories } from "@/components/articles/categories";
import { ArticleList } from "@/components/articles/article-list";

export default async function Page() {
  const articles = await getAllArticles();

  return (
    <div>
      <Categories />
      <ArticleList articles={articles} />
    </div>
  );
}
