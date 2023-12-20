import { useFormState } from "react-dom";
import { Search } from "lucide-react";

import { FormState, searchDataAction } from "@/app/(root)/actions";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function SearchField() {
  const [state, dispatch] = useFormState(searchDataAction, {
    searchedValue: "",
    errors: {
      message: undefined,
    },
    data: undefined,
  } as FormState);

  return (
    <form className="w-full" action={dispatch}>
      <fieldset className="flex flex-col relative items-center mx-5 mb-4 md:mb-0 md:mr-5 md:ml-0">
        <Search className="absolute left-3 top-2" />
        {state.errors.message && (
          <Label className="absolute top-[15px] right-5 font-bold text-red-400">
            {state.errors.message}
          </Label>
        )}
        <Input
          className="pl-10 py-5 dark:bg-black shadow"
          name="searchedValue"
          defaultValue={state.searchedValue}
        />
      </fieldset>
    </form>
  );
}
