import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { Logo } from "@/components/nav/logo";
import { MotionButton } from "@/components/ui/motion-button";
import { SearchField } from "@/components/nav/search";

import { SearchIcon } from "lucide-react";
import { Spin } from "hamburger-react";

export default function Navbar({
  isMobile,
  setIsMobile,
}: {
  isMobile: boolean;
  setIsMobile: (isMobile: boolean) => void;
}) {
  const [isSearch, setIsSearch] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center mt-5 mb-3 gap-5">
      <Logo />
      <div className="flex items-center justify-center w-full md:mr-0 mt-3">
        <div className="flex items-center">
          <div className="md:hidden" onClick={() => setIsMobile(!isMobile)}>
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
        <div className="hidden md:block w-1/2">
          <SearchField />
        </div>
        <div className="flex gap-5 ml-auto md:ml-0 mx-5">
          <MotionButton
            content="Sign up"
            variant="secondary"
            style="px-4 h-[2.2rem]"
          />
          <MotionButton
            content="Login"
            variant="default"
            style="px-4 h-[2.2rem]"
          />
        </div>
      </div>
      <div className={`${isSearch ? "block" : "hidden"} w-full`}>
        {isSearch && <SearchField />}
      </div>
    </div>
  );
}
