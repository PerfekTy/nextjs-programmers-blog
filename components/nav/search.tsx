import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

export function SearchField() {
  return (
    <form className="w-full">
      <fieldset className="flex relative items-center mx-5">
        <Search className="absolute left-2" />
        <Input className="pl-10 py-5" />
      </fieldset>
    </form>
  );
}
