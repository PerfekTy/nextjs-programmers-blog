"use client";

import { useRef } from "react";
import { zodResolver } from "@hookform/resolvers/zod";

import { Logo } from "@/components/nav/logo";
import { Button } from "@/components/ui/button";

import { z } from "zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { textAreaButtons, textAreaHeadingButtons } from "./textarea-buttons";

import { fetchTags } from "@/redux/slices/tags-slice";
import { AppDispatch, RootState } from "@/redux/store";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TagItemSkeleton } from "../skeletons";
import { Badge } from "@/components/ui/badge";
import { ArrowLeftFromLine } from "lucide-react";
import { useRouter } from "next/navigation";

const formSchema = z.object({
  title: z.string().min(2).max(50),
  tags: z.string().min(2).max(20),
  text: z.string().min(20),
});

export default function CreateArticlePage() {
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      tags: "",
      text: "",
    },
  });

  const areaRef = useRef<HTMLTextAreaElement>(null);

  function setCursorBetweenSymbols(symbol: string, offset: number) {
    function modifyText() {
      let previousText = form.getValues().text;
      if (previousText.endsWith("\n")) {
        previousText += symbol;
      } else if (previousText.trim() === "") {
        previousText = symbol;
      } else {
        previousText += `\n\n${symbol}`;
      }
      return form.setValue("text", previousText);
    }

    modifyText();

    setTimeout(() => {
      if (areaRef && areaRef.current) {
        const textLength = areaRef.current.value.length;
        console.log("ref value", areaRef.current.value);

        areaRef.current.selectionStart = Math.max(0, textLength - offset);
        areaRef.current.selectionEnd = Math.max(0, textLength - offset);

        areaRef.current.focus();
      }
    }, 0);
  }

  function onSubmit(values: z.infer<typeof formSchema>) {
    //TODO: Attach server action to create article
    console.log(values);
  }

  return (
    <div className="container mx-auto">
      <div className="my-5">
        <Logo />
      </div>
      <div className="flex grid-cols-4 flex-col gap-10 md:grid">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="col-span-3 space-y-8"
          >
            <Button variant="ghost" type="button">
              <ArrowLeftFromLine size={20} onClick={() => router.push("..")} />
            </Button>

            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Article Title</FormLabel>
                  <FormControl>
                    <Input placeholder="New article title here..." {...field} />
                  </FormControl>
                  <FormDescription>
                    This is your title of your new article.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="tags"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Tags</FormLabel>
                  <FormControl>
                    <Input placeholder="typescript, nextjs..." {...field} />
                  </FormControl>
                  <FormDescription>
                    Enter tags to able others find your article or copy one from
                    available tags.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="text"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Text</FormLabel>
                  <FormControl>
                    <Textarea
                      rows={15}
                      {...field}
                      placeholder="Write your article content here..."
                      ref={areaRef}
                    />
                  </FormControl>
                  <div className="flex flex-wrap gap-2">
                    {textAreaButtons.map((textAreaButton) => (
                      <Badge
                        className="cursor-pointer"
                        data-title={textAreaButton.title}
                        onClick={() =>
                          setCursorBetweenSymbols(
                            textAreaButton.symbol,
                            textAreaButton.offset,
                          )
                        }
                        key={textAreaButton.title}
                      >
                        {textAreaButton.icon}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {textAreaHeadingButtons.map((headingButton) => (
                      <Badge
                        variant="outline"
                        className="cursor-pointer"
                        data-title={headingButton.title}
                        onClick={() =>
                          setCursorBetweenSymbols(
                            headingButton.symbol,
                            headingButton.offset,
                          )
                        }
                        key={headingButton.title}
                      >
                        {headingButton.icon}
                      </Badge>
                    ))}
                  </div>
                  <FormDescription>
                    Enter your main content text, descriptions, tutorials etc.
                    You can use build in options to edit your input in markdown
                    format.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit">Submit</Button>
          </form>
        </Form>
        <Tags />
      </div>
    </div>
  );
}

export const Tags = () => {
  const { tags, loading } = useSelector((state: RootState) => state.tags);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchTags());
  }, [dispatch]);

  return (
    <div className="flex flex-col flex-wrap gap-3">
      <h1>Available tags:</h1>
      {!loading ? (
        tags.map((tag, key) => (
          <Badge variant="outline" key={tag.tag} className="mb-5 w-fit p-2">
            <p>#{tag.tag}</p>
          </Badge>
        ))
      ) : (
        <TagItemSkeleton />
      )}
      {!tags.length && !loading ? <p>There is no tags 😔</p> : null}
    </div>
  );
};
