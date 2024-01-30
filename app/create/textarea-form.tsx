import { motion } from "framer-motion";

import { useRef, useState } from "react";
import {
  Bold,
  Code,
  Heading,
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Heading5,
  Heading6,
  Image,
  Italic,
  Link,
  List,
  ListOrdered,
  QuoteIcon,
} from "lucide-react";

import { EditorOption } from "@/app/create/editor-option";

export const TextAreaForm = () => {
  const [areaText, setAreaText] = useState("");
  const [showHeadings, setShowHeadings] = useState(false);
  const areaRef = useRef<HTMLTextAreaElement>(null);

  const handleAreaTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setAreaText(e.target.value);
  };

  const setCursorBetweenSymbols = (symbol: string, offset: number) => {
    setAreaText((prevState: string) => {
      if (prevState.endsWith("\n")) {
        return prevState.concat(symbol);
      } else if (prevState.trim() === "") {
        return symbol;
      } else {
        return prevState.concat(`\n\n${symbol}`);
      }
    });
    setTimeout(() => {
      if (areaRef && areaRef.current) {
        const textLength = areaRef.current.value.length;

        areaRef.current.selectionStart = Math.max(0, textLength - offset);
        areaRef.current.selectionEnd = Math.max(0, textLength - offset);

        areaRef.current.focus();
      }
    }, 0);
  };

  return (
    <>
      <div className="flex items-center gap-4 bg-[#f5f5f5] px-1 py-2 shadow dark:bg-[#030303] dark:shadow-[#030303] md:px-10">
        <EditorOption
          title="Headings"
          icon={<Heading />}
          onClick={() => setShowHeadings(!showHeadings)}
        />
        {showHeadings!! && (
          <motion.div
            className="top-54 absolute -left-12 flex flex-col gap-2"
            initial={{ x: 50 }}
            animate={{ x: -12 }}
            transition={{
              type: "spring",
            }}
          >
            <EditorOption
              title="Heading 1"
              icon={<Heading1 />}
              onClick={() => setCursorBetweenSymbols("# ", 0)}
            />
            <EditorOption
              title="Heading 2"
              icon={<Heading2 />}
              onClick={() => setCursorBetweenSymbols("## ", 0)}
            />
            <EditorOption
              title="Heading 3"
              icon={<Heading3 />}
              onClick={() => setCursorBetweenSymbols("### ", 0)}
            />
            <EditorOption
              title="Heading 4"
              icon={<Heading4 />}
              onClick={() => setCursorBetweenSymbols("#### ", 0)}
            />
            <EditorOption
              title="Heading 5"
              icon={<Heading5 />}
              onClick={() => setCursorBetweenSymbols("##### ", 0)}
            />
            <EditorOption
              title="Heading 6"
              icon={<Heading6 />}
              onClick={() => setCursorBetweenSymbols("###### ", 0)}
            />
          </motion.div>
        )}
        <EditorOption
          title="Bold text"
          icon={<Bold />}
          onClick={() => setCursorBetweenSymbols("****", 2)}
        />
        <EditorOption
          title="Italic text"
          icon={<Italic />}
          onClick={() => setCursorBetweenSymbols("**", 1)}
        />
        <EditorOption
          title="Link text"
          icon={<Link />}
          onClick={() => setCursorBetweenSymbols("[](url)", 6)}
        />
        <EditorOption
          title="Ordered list"
          icon={<ListOrdered />}
          onClick={() => setCursorBetweenSymbols("1. ", 0)}
        />
        <EditorOption
          title="Unordered list"
          icon={<List />}
          onClick={() => setCursorBetweenSymbols("- ", 0)}
        />
        <EditorOption
          title="Quote"
          icon={<QuoteIcon />}
          onClick={() => setCursorBetweenSymbols("> ", 0)}
        />
        <EditorOption
          title="Block of code"
          icon={<Code />}
          onClick={() => setCursorBetweenSymbols("``", 1)}
        />
        <EditorOption
          title="Image upload"
          icon={<Image />}
          onClick={() => setCursorBetweenSymbols("![](image_url)", 12)}
        />
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
