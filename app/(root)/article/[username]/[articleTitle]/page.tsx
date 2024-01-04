import { ArticleTitle } from "@/components/articles/article-title";

export default function ArticlePage({
  params,
}: Readonly<{
  params: { articleTitle: string; username: string };
}>) {
  return <ArticleTitle params={params} />;
}
