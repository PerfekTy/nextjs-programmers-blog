"use server";

import { fetchArticles } from "../utils/data";

export async function getArticles(
  searchQuery: string,
  sortQuery?: string,
  page?: number,
) {
  const articles = await fetchArticles({ searchQuery, sortQuery, page });
  return articles;
}
