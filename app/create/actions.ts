"use server";

export type FormState = {
  title: string;
  tags: string | string[];
  text: string;
  errors: {
    tags: string | undefined;
    message: string | undefined;
  };
};

export async function createArticleAction(
  prevState: FormState,
  formData: FormData,
) {
  const article = {
    title: formData.get("title"),
    tags: formData.get("tags"),
    text: formData.get("text"),
  };

  const updatetdArticle = {
    ...article,
    tags: article.tags?.toString().split(","),
  };

  console.log(updatetdArticle);

  return {
    title: "",
    tags: "",
    text: "",
    errors: {
      tags: undefined,
      message: undefined,
    },
  };
}
