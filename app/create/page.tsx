"use client";

import { useEffect, useState } from "react";
import { useFormState } from "react-dom";

import { Logo } from "@/components/nav/logo";
import { Button } from "@/components/ui/button";

import { FormState, createArticleAction } from "./actions";
import { Tags } from "./tags";
import { TextAreaForm } from "./textarea-form";

export default function CreateArticlePage() {
  const [tag, setTag] = useState("");
  const [isValidForm, setIsValidForm] = useState(false);

  const [formState, actionDispatch] = useFormState(createArticleAction, {
    title: "",
    tags: "",
    text: "",
    errors: {
      tags: undefined,
      message: undefined,
    },
  } as FormState);

  const handleTagsChange = () => {
    if (!/^[a-z]{2,}(?:, [a-z]{2,})*$/.test(tag)) {
      formState.errors.tags = "No match with required format!";
      setIsValidForm(false);
    } else {
      formState.errors.tags = undefined;
      setIsValidForm(true);
    }
  };

  return (
    <div className="mx-5 lg:mx-[15%]">
      <div className="my-5">
        <Logo />
      </div>
      <form
        action={actionDispatch}
        className="relative flex flex-col gap-10 rounded-lg bg-white py-5 dark:bg-sidebar"
      >
        <div>
          <div className="px-5 md:px-10">
            <div className="pb-5">
              <Button type="button" variant="default">
                Add a cover image
              </Button>
            </div>
            <input
              type="text"
              className="h-fit rounded-none border-b-2 bg-transparent text-[1.3em] font-bold outline-none transition-all placeholder:text-muted-foreground placeholder:opacity-50 focus:border-b-4 focus:border-violet md:text-[3em]"
              placeholder="New article title here..."
              name="title"
              defaultValue={formState.title}
            />
            <fieldset className="flex flex-col pt-5">
              <span className="flex gap-1 ">
                Required format:
                <p className="text-violet">webdev, programming</p> etc.
              </span>
              <p className="pb-3">
                Choose from available tags or add a new one.
              </p>
              <Tags setTag={setTag} />
              <input
                type="text"
                className="my-3 h-fit rounded-none border-b-2 bg-transparent text-sm font-semibold outline-none transition-all placeholder:text-muted-foreground placeholder:opacity-50 focus:border-b-4 focus:border-violet md:text-lg"
                placeholder="Add your tags here..."
                name="tags"
                onChange={(e) => {
                  setTag(e.target.value);
                  handleTagsChange();
                }}
                value={tag}
              />
              {formState.errors.tags ? (
                <p className="text-red-500">{formState.errors.tags}</p>
              ) : null}
              {formState.errors.message ? (
                <p className="text-red-500">{formState.errors.message}</p>
              ) : null}
            </fieldset>
          </div>
        </div>
        <TextAreaForm text={formState.text} />
        <div className="absolute -bottom-16 right-0">
          <Button
            disabled={!isValidForm}
            variant="destructive"
            className="mt-5 p-5"
          >
            Create article
          </Button>
        </div>
      </form>
    </div>
  );
}
