import { Skeleton } from "@/components/ui/skeleton";

export const ArticleTagSkeleton = () => {
  return (
    <Skeleton className="m-3 h-32 rounded-lg shadow">
      <div>
        <div className="flex items-center">
          <div className="flex items-center gap-3 px-5 py-3">
            <Skeleton className="aspect-square w-8 rounded-full" />
            <div className="flex flex-col gap-2">
              <Skeleton className="h-3 w-16" />
              <Skeleton className="h-3 w-32" />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-3 px-16 pb-3">
          <Skeleton className="h-6 w-1/2" />
        </div>
      </div>
    </Skeleton>
  );
};
