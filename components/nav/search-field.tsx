import { useFormState } from "react-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

import { FormState, searchDataAction } from "@/app/(root)/actions";

import { Search } from "lucide-react";

import { Input } from "@/components/ui/input";
import { setArticles } from "@/redux/slices/articles-slice";

export function SearchField() {
  const dispatch = useDispatch();
  const [state, dispatchAction] = useFormState(searchDataAction, {
    searchedValue: "",
    data: [],
  } as FormState);

  useEffect(() => {
    dispatch(setArticles(state.data));
  }, [dispatch, state.data]);

  return (
    <form className="w-full" action={dispatchAction}>
      <fieldset className="flex flex-col relative items-center mx-5 mb-4 md:mb-0 md:mr-5 md:ml-0">
        <Search className="absolute left-3 top-2" />
        <Input
          className="pl-10 py-5 dark:bg-black shadow"
          name="searchedValue"
          defaultValue={state.searchedValue}
        />
      </fieldset>
    </form>
  );
}
