"use client";

import { useEffect } from "react";
import Link from "next/link";

import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/redux/store";
import { fetchTags } from "@/redux/slices/tags-slice";

export const RightSidebar = () => {
  const { tags, loading } = useSelector((state: RootState) => state.tags);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchTags());
  }, [dispatch]);

  return (
    <div className="flex flex-col items-center justify-center">
      <h2 className="w-full border-b-2 px-0 pb-1 pt-3 text-center text-2xl font-bold">
        Trending Tags
      </h2>
      <ul className="flex w-full flex-col pt-2 text-center text-lg">
        {!loading &&
          tags.map((tag, key) => (
            <Link
              href={`/tags/${tag.tag}`}
              key={key}
              className="flex items-center px-2 py-3 hover:rounded-lg hover:bg-sidebar_item hover:dark:bg-sidebar_item_dark"
            >
              <p>#{tag.tag}</p>
              <p className="ml-auto rounded-lg border border-violet px-2">
                {key + 1}
              </p>
            </Link>
          ))}

        {loading && <p>Loading...</p>}
      </ul>
    </div>
  );
};
