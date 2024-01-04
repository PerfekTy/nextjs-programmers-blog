import { Skeleton } from "@/components/ui/skeleton";

export const ArticleTagSkeleton = () => {
  return (
    <Skeleton className="m-3 rounded-lg shadow h-32">
      <div>
        <div className="flex items-center">
          <div className="flex items-center gap-3 px-5 py-3">
            <Skeleton className="rounded-full aspect-square w-8" />
            <div className="flex flex-col gap-2">
              <Skeleton className="w-16 h-3" />
              <Skeleton className="w-32 h-3" />
            </div>
          </div>
        </div>
        <div className="px-16 pb-3 flex flex-col gap-3">
          <Skeleton className="w-1/2 h-6" />
        </div>
      </div>
    </Skeleton>
  );
};
