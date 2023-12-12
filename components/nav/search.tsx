import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

export function SearchField() {
  return (
    <form className="w-full mt-10 md:mt-0">
      <fieldset className="flex relative items-center mx-2">
        <Search className="absolute left-2" />
        <Input className="pl-10" />
      </fieldset>
    </form>
  );
}
