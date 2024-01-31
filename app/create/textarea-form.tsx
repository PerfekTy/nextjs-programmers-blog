import { motion } from "framer-motion";

import { useRef, useState } from "react";
import { Heading } from "lucide-react";

import { textAreaButtons, textAreaHeadingButtons } from "./textarea-buttons";
import { Button } from "@/components/ui/button";

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
      <div className="flex items-center gap-4 bg-[#f5f5f5] px-1 py-2 dark:bg-[#030303]">
        <Button
          type="button"
          onClick={() => setShowHeadings(!showHeadings)}
          data-title="Headings"
        >
          <Heading />
        </Button>
        {showHeadings!! && (
          <motion.div
            className="top-54 absolute -left-12 flex flex-col gap-2"
            initial={{ x: 50 }}
            animate={{ x: -12 }}
            transition={{
              type: "just",
            }}
          >
            {textAreaHeadingButtons.map((headingButton) => (
              <Button
                type="button"
                variant="outline"
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
              </Button>
            ))}
          </motion.div>
        )}
        {textAreaButtons.map((textAreaButton) => (
          <Button
            type="button"
            variant="outline"
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
          </Button>
        ))}
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
