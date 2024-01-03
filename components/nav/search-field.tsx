import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

export function SearchField() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = useDebouncedCallback((term: string) => {
    const params = new URLSearchParams(searchParams);

    if (term) {
      params.set("searchQuery", term);
    } else {
      params.delete("searchQuery");
    }

    replace(`${pathname}?${params.toString()}`);
  }, 300);

  return (
    <div className="w-full">
      <div className="flex flex-col relative items-center mx-5 mb-4 md:mb-0 md:mr-5 md:ml-0">
        <Search className="absolute left-3 top-2" />
        <Input
          className="pl-10 py-5 dark:bg-black shadow"
          name="searchedValue"
          onChange={(e) => handleSearch(e.target.value)}
          defaultValue={searchParams.get("searchQuery")?.toString()}
        />
      </div>
    </div>
  );
}
