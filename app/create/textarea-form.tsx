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

export const TextAreaForm = ({ text }: { text: string }) => {
  return (
    <>
      <div className="flex items-center gap-5 bg-[#f5f5f5] py-2 shadow dark:bg-[#030303] dark:shadow-[#030303] md:px-10">
        <Button
          type="button"
          data-title="Bold text"
          className="aspect-square p-3 hover:bg-button_active2 hover:dark:bg-button_active md:p-2"
          variant="ghost"
        >
          <Bold />
        </Button>
        <Button
          type="button"
          data-title="Italic text"
          className="aspect-square p-3 hover:bg-button_active2 hover:dark:bg-button_active md:p-2"
          variant="ghost"
        >
          <Italic />
        </Button>
        <Button
          type="button"
          data-title="Link text"
          className="aspect-square p-3 hover:bg-button_active2 hover:dark:bg-button_active md:p-2"
          variant="ghost"
        >
          <Link />
        </Button>
        <Button
          type="button"
          data-title="Ordered list"
          className="aspect-square p-3 hover:bg-button_active2 hover:dark:bg-button_active md:p-2"
          variant="ghost"
        >
          <ListOrdered />
        </Button>
        <Button
          type="button"
          data-title="Unordered list"
          className="aspect-square p-3 hover:bg-button_active2 hover:dark:bg-button_active md:p-2"
          variant="ghost"
        >
          <List />
        </Button>
        <Button
          type="button"
          data-title="Heading"
          className="aspect-square p-3 hover:bg-button_active2 hover:dark:bg-button_active md:p-2"
          variant="ghost"
        >
          <Heading />
        </Button>
        <Button
          type="button"
          data-title="Quote"
          className="aspect-square p-3 hover:bg-button_active2 hover:dark:bg-button_active md:p-2"
          variant="ghost"
        >
          <QuoteIcon />
        </Button>
        <Button
          type="button"
          data-title="Block of code"
          className="aspect-square p-3 hover:bg-button_active2 hover:dark:bg-button_active md:p-2"
          variant="ghost"
        >
          <Code />
        </Button>
        <Button
          type="button"
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
          name="text"
          rows={10}
          defaultValue={text}
        />
      </div>
    </>
  );
};
