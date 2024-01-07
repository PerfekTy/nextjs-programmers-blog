import { Button } from "@/components/ui/button";
import { fetchTags } from "@/redux/slices/tags-slice";
import { AppDispatch, RootState } from "@/redux/store";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TagItemSkeleton } from "../skeletons";

export const Tags = ({ setTag }: { setTag: (tag: any) => void }) => {
  const { tags, loading } = useSelector((state: RootState) => state.tags);
  const dispatch = useDispatch<AppDispatch>();
  const [chosenTag, setChosenTag] = useState<
    { tag: string; selected: boolean }[]
  >([]);

  const handleTagClick = (key: number) => {
    setChosenTag((prevState) => {
      const newChosenTag = [...prevState];
      const clickedTag = [...newChosenTag];

      newChosenTag[key].selected = !clickedTag[key].selected;

      if (newChosenTag[key].selected) {
        setTag((prevState: string) => `${prevState + chosenTag[key].tag}, `);
      }

      if (!newChosenTag[key].selected) {
        setTag((prevState: string) =>
          prevState.replace(chosenTag[key].tag + ", ", ""),
        );
      }

      return newChosenTag;
    });
  };

  useEffect(() => {
    dispatch(fetchTags());
  }, [dispatch]);

  useEffect(() => {
    if (tags) {
      const tagsBools = tags.map((tag) => ({ tag: tag.tag, selected: false }));
      setChosenTag(tagsBools);
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
              chosenTag[key] && chosenTag[key].selected
                ? "bg-[#e3e3e3] dark:bg-[#262626]"
                : "bg-transparent"
            }`}
            onClick={() => handleTagClick(key)}
          >
            #{tag.tag}
          </Button>
        ))
      ) : (
        <TagItemSkeleton />
      )}

      {!tags.length && !loading ? <p>There is no tags 😔</p> : null}
    </div>
  );
};
