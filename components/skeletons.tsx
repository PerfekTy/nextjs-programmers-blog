import { Skeleton } from "@/components/ui/skeleton";

export const ArticleItemSkeleton = () => {
  return (
    <div className="m-3 cursor-pointer rounded-lg shadow">
      <Skeleton className="rounded-lg">
        <div className="flex gap-3 px-5 py-3 h-28 items-center">
          <Skeleton className="w-[32px] aspect-square rounded-full" />
          <span className="flex flex-col gap-2">
            <Skeleton className="w-[150px] h-3" />
            <Skeleton className="w-[225px] h-3" />
          </span>
        </div>
        <div className="px-16 pb-3 flex flex-col gap-3">
          <Skeleton className="w-[180px] h-6" />
        </div>
      </Skeleton>
    </div>
  );
};
