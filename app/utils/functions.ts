import { fetchArticles } from "./data";

export const filteredArticlesByTags = async (
  serachQuery: string,
  params: string,
) => {
  const articles = await fetchArticles();

  if (serachQuery) {
    return articles.filter(
      (article) =>
        article.title.includes(serachQuery) ||
        article.author.includes(serachQuery),
    );
  }

  if (params) {
    return articles.filter((article) => article.tags.includes(params));
  }
};
