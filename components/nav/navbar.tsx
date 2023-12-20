import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { Logo } from "@/components/nav/logo";
import { MotionButton } from "@/components/ui/motion-button";
import { SearchField } from "@/components/nav/search-field";

import { SearchIcon } from "lucide-react";
import { Spin } from "hamburger-react";

export function Navbar({
  isMobile,
  setIsMobile,
}: {
  isMobile: boolean;
  setIsMobile: (isMobile: boolean) => void;
}) {
  const [isSearch, setIsSearch] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center lg:px-[20%] pt-5 gap-5 bg-white dark:bg-sidebar w-full shadow">
      <Logo />
      <div className="flex items-center justify-center w-full md:mr-0 my-3">
        <div className="flex items-center">
          <div
            className="md:hidden hover:bg-[#ebecfc] hover:text-[#2f3ab2] rounded-lg ml-2"
            onClick={() => setIsMobile(!isMobile)}
          >
            <Spin size={25} duration={0.5} toggled={isMobile} />
          </div>
          <MotionButton
            content={<SearchIcon />}
            variant="ghost"
            onClick={() => setIsSearch(!isSearch)}
            style={`${
              isSearch && "dark:bg-button_active bg-button_active2"
            } p-2 border md:hidden mx-2`}
          />
        </div>
        <div className="hidden md:block w-full md:ml-5 xl:ml-0">
          <SearchField />
        </div>
        <div className="flex gap-5 items-center ml-auto mr-5 md:ml-0 md:mr-5 xl:mr-0">
          <MotionButton
            content="Sign up"
            variant="secondary"
            style="px-4 h-[2.2rem] dark:bg-black"
          />
          <MotionButton
            content="Login"
            variant="default"
            style="px-4 h-[2.2rem]"
          />
        </div>
      </div>
      <AnimatePresence>
        {isSearch && (
          <motion.div
            initial={{ y: -50 }}
            animate={{ y: 0 }}
            exit={{ y: -50 }}
            transition={{ type: "just", ease: "easeInOut", duration: 0.1 }}
            className="w-full"
          >
            {isSearch && <SearchField />}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
