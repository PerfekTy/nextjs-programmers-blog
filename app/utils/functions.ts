import { fetchArticles } from "./data";

export const filteredArticlesByTags = async (serachQuery: string) => {
  const articles = await fetchArticles();

  const filteredArticles = articles.filter((article) =>
    article.tags.includes(serachQuery),
  );

  return filteredArticles;
};
