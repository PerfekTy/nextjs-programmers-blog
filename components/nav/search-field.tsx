import { useEffect } from "react";
import { useFormState } from "react-dom";

import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { setSearchedArticles } from "@/redux/slices/articles-slice";
import { FormState, searchDataAction } from "@/app/actions";

import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

export function SearchField() {
  const dispatch = useDispatch<AppDispatch>();
  const [state, dispatchAction] = useFormState(searchDataAction, {
    searchedValue: "",
    data: [],
  } as FormState);

  useEffect(() => {
    dispatch(setSearchedArticles(state.data));
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