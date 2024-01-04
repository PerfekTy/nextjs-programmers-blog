import { Logo } from "@/components/nav/logo";
import { Button } from "@/components/ui/button";
import {
  Bold,
  Code,
  Heading,
  Image,
  Italic,
  Link,
  List,
  ListOrdered,
  QuoteIcon,
} from "lucide-react";

export default function CreateArticlePage() {
  return (
    <div className="mx-5 lg:mx-[15%]">
      <div className="my-5">
        <Logo />
      </div>
      <div className="pt-14">
        <div className="flex flex-col gap-10 rounded-lg bg-white py-5 dark:bg-sidebar">
          <div className="px-5 md:px-10">
            <div className="pb-5">
              <Button variant="default">Add a cover image</Button>
            </div>
            <input
              type="text"
              className="h-fit rounded-none border-b-2 bg-transparent text-[1.3em] font-bold outline-none transition-all placeholder:text-muted-foreground placeholder:opacity-50 focus:border-b-4 focus:border-violet md:text-[3em]"
              placeholder="New article title here..."
            />
            <fieldset className="pt-5">
              <input
                type="text"
                className="h-fit rounded-none bg-transparent text-sm font-semibold outline-none placeholder:text-muted-foreground placeholder:opacity-50 md:text-lg"
                placeholder="Add up to 5 tags here..."
              />
            </fieldset>
          </div>

          <div className="flex items-center gap-5 bg-[#f5f5f5] py-2 shadow dark:bg-[#030303] dark:shadow-[#030303] md:px-10">
            <Button
              data-title="Bold text"
              className="aspect-square p-3 hover:bg-button_active2 hover:dark:bg-button_active md:p-2"
              variant="ghost"
            >
              <Bold />
            </Button>
            <Button
              data-title="Italic text"
              className="aspect-square p-3 hover:bg-button_active2 hover:dark:bg-button_active md:p-2"
              variant="ghost"
            >
              <Italic />
            </Button>
            <Button
              data-title="Link text"
              className="aspect-square p-3 hover:bg-button_active2 hover:dark:bg-button_active md:p-2"
              variant="ghost"
            >
              <Link />
            </Button>
            <Button
              data-title="Ordered list"
              className="aspect-square p-3 hover:bg-button_active2 hover:dark:bg-button_active md:p-2"
              variant="ghost"
            >
              <ListOrdered />
            </Button>
            <Button
              data-title="Unordered list"
              className="aspect-square p-3 hover:bg-button_active2 hover:dark:bg-button_active md:p-2"
              variant="ghost"
            >
              <List />
            </Button>
            <Button
              data-title="Heading"
              className="aspect-square p-3 hover:bg-button_active2 hover:dark:bg-button_active md:p-2"
              variant="ghost"
            >
              <Heading />
            </Button>
            <Button
              data-title="Quote"
              className="aspect-square p-3 hover:bg-button_active2 hover:dark:bg-button_active md:p-2"
              variant="ghost"
            >
              <QuoteIcon />
            </Button>
            <Button
              data-title="Block of code"
              className="aspect-square p-3 hover:bg-button_active2 hover:dark:bg-button_active md:p-2"
              variant="ghost"
            >
              <Code />
            </Button>
            <Button
              data-title="Image upload"
              className="aspect-square p-3 hover:bg-button_active2 hover:dark:bg-button_active md:p-2"
              variant="ghost"
            >
              <Image />
            </Button>
          </div>

          <div className="px-5 md:px-10">
            <textarea
              className="w-full bg-transparent px-2 outline-none"
              placeholder="Write your article content here..."
              rows={10}
            />
          </div>
        </div>
        <div className="flex justify-end">
          <Button variant="destructive" className="mt-5 p-5">
            Create article
          </Button>
        </div>
      </div>
    </div>
  );
}
