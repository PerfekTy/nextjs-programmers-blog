import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

export function SearchField() {
  return (
    <form className="w-full">
      <fieldset className="flex flex-col relative items-center mx-5 mb-4 md:mb-0 md:mr-5 md:ml-0">
        <Search className="absolute left-3 top-2" />
        <Input className="pl-10 py-5 dark:bg-black shadow" />
      </fieldset>
    </form>
  );
}
