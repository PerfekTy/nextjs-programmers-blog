"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import MarkDown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeKatex from "rehype-katex";

import formatDistanceToNow from "date-fns/esm/formatDistanceToNow";

import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/redux/store";
import { fetchArticle } from "@/redux/slices/articles-slice";

import { Avatar } from "@/components/ui/avatar";
import { ReactionsTab } from "@/components/reactions-tab";
import { montserrat } from "@/app/utils/fonts";

export const ArticleTitle = ({
  params,
}: {
  params: { articleTitle: string; username: string };
}) => {
  const { push } = useRouter();
  const { articleTitle, username } = params;
  const dispatch = useDispatch<AppDispatch>();
  const { articles, loading } = useSelector(
    (state: RootState) => state.articles,
  );

  const createdAt = useMemo(() => {
    if (!articles[0]?.createdAt) {
      return;
    }

    return new Date(articles[0].createdAt).toLocaleString("en-US", {
      month: "long",
      day: "2-digit",
    });
  }, [articles]);

  const formatDistanceCreatedAt = useMemo(() => {
    if (!articles[0]?.createdAt) {
      return;
    }

    return formatDistanceToNow(new Date(articles[0].createdAt), {
      addSuffix: true,
      includeSeconds: true,
    });
  }, [articles]);

  useEffect(() => {
    dispatch(fetchArticle(articleTitle));
  }, [articleTitle, dispatch]);

  return (
    <>
      {loading ? (
        <p className="text-center text-lg">Loading...</p>
      ) : (
        <div className="h-screen rounded-lg bg-white dark:bg-sidebar">
          <Image
            src="/assets/images/next.png"
            alt="nextjs"
            width={2000}
            height={100}
            className="rounded-tl-lg rounded-tr-lg"
          />
          <div className="p-3 md:p-8">
            {/* AUTHOR */}
            <div className="relative flex items-center gap-2 pb-4">
              <Avatar
                src={articles[0]?.authorImage ? articles[0].authorImage : ""}
                isMedium
                onClick={() => push(`/${articles[0]?.author}`)}
              />

              <span>
                <p
                  className="cursor-pointer font-bold"
                  onClick={() => push(`/${articles[0]?.author}`)}
                >
                  {articles[0]?.author}
                </p>
                <p className="text-sm text-muted-foreground">
                  {createdAt} ({formatDistanceCreatedAt})
                </p>
              </span>

              <div className="absolute -right-2 -top-2 p-3 md:p-0 lg:ml-auto">
                <ReactionsTab username={username} articleTitle={articleTitle} />
              </div>
            </div>

            {/* ARTICLE */}
            <article className="py-2">
              <h1 className="pb-2 pr-10 text-3xl font-black leading-10 tracking-widest md:pr-0 md:text-[36px]">
                {articles[0]?.title.replaceAll("-", " ")}
              </h1>
              <span className="flex gap-3 text-sm text-muted-foreground">
                {articles[0]?.tags.map((tag: string) => (
                  <p key={tag} className="cursor-pointer">
                    #{tag}
                  </p>
                ))}
              </span>
              <p className={`${montserrat.className} mt-5`}>
                <MarkDown
                  remarkPlugins={[remarkGfm]}
                  rehypePlugins={[rehypeKatex]}
                >
                  {articles[0]?.text}
                </MarkDown>
              </p>
            </article>
          </div>
        </div>
      )}
    </>
  );
};
