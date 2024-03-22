"use client";

import { useEffect } from "react";
import Link from "next/link";

import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/redux/store";
import { fetchTags } from "@/redux/slices/tags-slice";
import { TagItemSkeleton } from "@/app/skeletons";
import { Button } from "@/components/ui/button";

export const RightSidebar = () => {
  const { tags, loading } = useSelector((state: RootState) => state.tags);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchTags());
  }, [dispatch]);

  return (
    <div className="mr-5 flex flex-col items-center justify-center xl:mr-0">
      <h2 className="w-full border-b-2 px-0 pb-1 pt-3 text-center text-2xl font-bold">
        Trending Tags
      </h2>
      <ul className="flex w-full flex-col gap-2 pt-2 text-center text-lg">
        {!loading &&
          tags?.split(",").map((tag) => (
            <Button asChild key={tag} variant="ghost">
              <Link
                href={`/tags/${tag}`}
                className="flex items-center px-2 py-3 text-sm hover:rounded-lg hover:bg-sidebar_item hover:dark:bg-sidebar_item_dark"
              >
                <p>#{tag.trim()}</p>
              </Link>
            </Button>
          ))}

        {loading && <TagItemSkeleton />}
      </ul>
    </div>
  );
};
