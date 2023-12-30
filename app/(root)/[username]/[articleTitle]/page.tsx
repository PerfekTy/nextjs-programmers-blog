import { ArticleTitle } from "@/components/articles/article-title";

export default function Page({ params }: { params: { articleTitle: string } }) {
  return <ArticleTitle params={params} />;
}
