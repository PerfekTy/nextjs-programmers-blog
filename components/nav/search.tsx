import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

export function SearchField() {
  return (
    <form className="w-full">
      <fieldset className="flex flex-col relative items-center mx-5 mb-4 md:mb-0">
        <Search className="absolute left-2 top-2" />
        <Input className="pl-10 py-5" />
      </fieldset>
    </form>
  );
}
