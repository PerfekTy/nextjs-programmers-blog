import { useEffect } from "react";
import Link from "next/link";

import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/redux/store";
import { fetchTags } from "@/redux/slices/tags-slice";

export const RightSidebar = () => {
  const { tags } = useSelector((state: RootState) => state.tags);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchTags());
  }, [dispatch]);

  return (
    <div className="flex flex-col justify-center items-center">
      <h2 className="font-bold text-2xl pt-3 pb-1 px-0 border-b-2 w-full text-center">
        Trending Tags
      </h2>
      <ul className="flex flex-col text-center w-full text-lg">
        {tags.map((tag, key) => (
          <Link
            href={`/tags/${tag.tag}`}
            key={key}
            className="px-2 py-3 hover:dark:bg-button_active hover:bg-button_active2 hover:rounded-lg"
          >
            #{tag.tag}
          </Link>
        ))}
      </ul>
    </div>
  );
};
