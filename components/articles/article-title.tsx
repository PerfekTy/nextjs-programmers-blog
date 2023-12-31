"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";

import formatDistanceToNow from "date-fns/esm/formatDistanceToNow";

import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/redux/store";
import { fetchArticle } from "@/redux/slices/articles-slice";

import { Avatar } from "@/components/ui/avatar";
import { ReactionsTab } from "@/components/reactions-tab";

export const ArticleTitle = ({
  params,
}: {
  params: { articleTitle: string; username: string };
}) => {
  const router = useRouter();
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

  console.log(articles[0]);

  return (
    <>
      {loading.articles ? (
        <p className="text-center text-lg">Loading...</p>
      ) : (
        <div className="dark:bg-sidebar bg-white rounded-lg h-screen">
          {/* BANNER */}
          <Image
            src="/assets/images/next.png"
            alt="nextjs"
            width={2000}
            height={100}
            className="rounded-tl-lg rounded-tr-lg"
          />
          <div className="p-3 md:p-8">
            {/* AUTHOR */}
            <div className="flex items-center gap-2 pb-4 relative">
              <Avatar
                src="/us.jpg"
                isMedium
                onClick={() => router.push(`/${articles[0]?.author}`)}
              />

              <span>
                <p
                  className="font-bold cursor-pointer"
                  onClick={() => router.push(`/${articles[0]?.author}`)}
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
              <h1 className="text-3xl md:text-[36px] font-black tracking-widest leading-10 pb-2 pr-10 md:pr-0">
                {articles[0]?.title}
              </h1>
              <span className="flex gap-3 text-sm text-muted-foreground">
                {articles[0]?.tags.map((tag: string) => (
                  <p key={tag} className="cursor-pointer">
                    #{tag}
                  </p>
                ))}
              </span>
              <p className="mt-5">{articles[0]?.text}</p>
            </article>
          </div>
        </div>
      )}
    </>
  );
};
