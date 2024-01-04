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
    <div className="flex flex-col justify-center items-center">
      <h2 className="font-bold text-2xl pt-3 pb-1 px-0 border-b-2 w-full text-center">
        Trending Tags
      </h2>
      <ul className="flex flex-col text-center w-full text-lg pt-2">
        {!loading &&
          tags.map((tag, key) => (
            <Link
              href={`/tags/${tag.tag}`}
              key={key}
              className="flex items-center px-2 py-3 hover:dark:bg-sidebar_item_dark hover:bg-sidebar_item hover:rounded-lg"
            >
              <p>#{tag.tag}</p>
              <p className="ml-auto border border-violet rounded-lg px-2">
                {key + 1}
              </p>
            </Link>
          ))}

        {loading && <p>Loading...</p>}
      </ul>
    </div>
  );
};
