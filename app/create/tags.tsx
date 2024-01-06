import { Button } from "@/components/ui/button";
import { fetchTags } from "@/redux/slices/tags-slice";
import { AppDispatch, RootState } from "@/redux/store";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TagItemSkeleton } from "../skeletons";

export const Tags = ({ setTag }: { setTag: (tag: any) => void }) => {
  const { tags, loading } = useSelector((state: RootState) => state.tags);
  const dispatch = useDispatch<AppDispatch>();
  const [choosenTag, setChoosenTag] = useState<
    { tag: string; selected: boolean }[]
  >([]);

  useEffect(() => {
    dispatch(fetchTags());
  }, [dispatch]);

  useEffect(() => {
    if (tags) {
      const tagsBools = tags.map((tag) => ({ tag: tag.tag, selected: false }));
      setChoosenTag(tagsBools);
    }
  }, [tags]);

  return (
    <div className="flex gap-3">
      {!loading ? (
        tags.map((tag, key) => (
          <Button
            variant="ghost"
            type="button"
            key={tag.tag}
            className={`border shadow hover:bg-[#e3e3e3] dark:hover:bg-[#262626] ${
              choosenTag[key] && choosenTag[key].selected
                ? "bg-[#e3e3e3] dark:bg-[#262626]"
                : ""
            }`}
            onClick={() => {
              setChoosenTag((prevState) => {
                const newChoosenTag = [...prevState];
                newChoosenTag[key].selected = true;
                if (choosenTag[key].selected) {
                  setTag(
                    (prevState: string) =>
                      `${prevState + choosenTag[key].tag}, `,
                  );
                }
                return newChoosenTag;
              });
            }}
          >
            #{tag.tag}
          </Button>
        ))
      ) : (
        <TagItemSkeleton />
      )}
    </div>
  );
};
