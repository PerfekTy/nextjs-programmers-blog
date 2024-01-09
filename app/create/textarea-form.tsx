import { useRef, useState } from "react";
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
  MoreHorizontal,
  QuoteIcon,
} from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const TextAreaForm = () => {
  const [areaText, setAreaText] = useState("");
  const areaRef = useRef<HTMLTextAreaElement>(null);

  const handleAreaTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setAreaText(e.target.value);
  };

  return (
    <>
      <div className="flex items-center gap-4 bg-[#f5f5f5] px-1 py-2 shadow dark:bg-[#030303] dark:shadow-[#030303] md:px-10">
        <Button
          type="button"
          data-title="Bold text"
          className="aspect-square p-3 hover:bg-button_active2 hover:dark:bg-button_active sm:p-2"
          variant="ghost"
          onClick={() => {
            setAreaText((prevState) => prevState.concat("****"));
            areaRef.current?.focus();
          }}
        >
          <Bold />
        </Button>
        <Button
          type="button"
          data-title="Italic text"
          className="aspect-square p-3 hover:bg-button_active2 hover:dark:bg-button_active sm:p-2"
          variant="ghost"
        >
          <Italic />
        </Button>
        <Button
          type="button"
          data-title="Link text"
          className="aspect-square p-3 hover:bg-button_active2 hover:dark:bg-button_active sm:p-2"
          variant="ghost"
        >
          <Link />
        </Button>
        <Button
          type="button"
          data-title="Ordered list"
          className="aspect-square p-3 hover:bg-button_active2 hover:dark:bg-button_active sm:p-2"
          variant="ghost"
          onClick={() => {
            setAreaText((prevState) => prevState.concat("1. "));
            areaRef.current?.focus();
          }}
        >
          <ListOrdered />
        </Button>
        <Button
          type="button"
          data-title="Unordered list"
          className="aspect-square p-3 hover:bg-button_active2 hover:dark:bg-button_active sm:p-2"
          variant="ghost"
          onClick={() => {
            setAreaText((prevState) => prevState.concat("- "));
            areaRef.current?.focus();
          }}
        >
          <List />
        </Button>

        <div className="hidden sm:flex sm:gap-5 md:items-center">
          <Button
            type="button"
            data-title="Quote"
            className="aspect-square p-3 hover:bg-button_active2 hover:dark:bg-button_active sm:p-2"
            variant="ghost"
            onClick={() => {
              setAreaText((prevState) => prevState.concat("> "));
              areaRef.current?.focus();
            }}
          >
            <QuoteIcon />
          </Button>
          <Button
            type="button"
            data-title="Block of code"
            className="aspect-square p-3 hover:bg-button_active2 hover:dark:bg-button_active sm:p-2"
            variant="ghost"
            onClick={() => {
              setAreaText((prevState) => prevState.concat("` `"));
              areaRef.current?.focus();
            }}
          >
            <Code />
          </Button>
          <Button
            type="button"
            data-title="Image upload"
            className="aspect-square p-3 hover:bg-button_active2 hover:dark:bg-button_active sm:p-2"
            variant="ghost"
          >
            <Image />
            <Button
              type="button"
              data-title="Heading"
              className="aspect-square p-3 hover:bg-button_active2 hover:dark:bg-button_active sm:p-2"
              variant="ghost"
              onClick={() => {
                setAreaText((prevState) => prevState.concat("## "));
                areaRef.current?.focus();
              }}
            >
              <Heading />
            </Button>
          </Button>
        </div>
        <div className="sm:hidden">
          <Select
            value={areaText}
            onValueChange={(value) => {
              setAreaText((prevState) => prevState.concat(value));
              areaRef.current?.focus();
            }}
          >
            <SelectTrigger className="w-[70px]">
              <SelectValue placeholder={<MoreHorizontal />} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="> ">
                <div className="flex items-center gap-2">
                  <QuoteIcon size={17} /> <p>quote</p>
                </div>
              </SelectItem>
              <SelectItem value="` `">
                <div className="flex items-center gap-2">
                  <Code size={17} /> <p>code</p>
                </div>
              </SelectItem>
              <SelectItem value="image">
                <div className="flex items-center gap-2">
                  <Image size={17} /> <p>image</p>
                </div>
              </SelectItem>
              <SelectItem value="## ">
                <div className="flex items-center gap-2">
                  <Heading size={17} /> <p>heading</p>
                </div>
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="px-5 md:px-10">
        <textarea
          className="w-full bg-transparent px-2 outline-none"
          placeholder="Write your article content here..."
          name="text"
          rows={10}
          value={areaText}
          ref={areaRef}
          onChange={handleAreaTextChange}
        />
      </div>
    </>
  );
};
