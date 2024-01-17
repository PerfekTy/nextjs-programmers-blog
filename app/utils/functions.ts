import { getArticles } from "../(root)/actions";

export const filteredArticlesByTags = async (
  searchQuery: string,
  params: string,
) => {
  const articles = await getArticles(searchQuery);

  if (searchQuery) {
    return articles.filter(
      (article) =>
        article.title.includes(searchQuery) ||
        article.author.includes(searchQuery),
    );
  }

  if (params) {
    return articles.filter((article) => article.tags.includes(params));
  }
};
