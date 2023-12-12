"use client";

import { useState } from "react";
import { motion } from "framer-motion";

import { Logo } from "@/components/nav/logo";
import { MotionButton } from "@/components/ui/motion-button";
import { SearchField } from "@/components/nav/search";

import { SearchIcon } from "lucide-react";
import { ToggleTheme } from "@/components/ui/toggle-theme";

export default function Navbar() {
  const [isSearch, setIsSearch] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center mt-5 mb-3 gap-5">
      <Logo />
      <div className="flex gap-5 items-center justify-end md:justify-center w-full md:mr-0">
        <div className="hidden md:block w-1/2">
          <SearchField />
        </div>
        <div className="items-center gap-5 flex absolute right-5 mt-10 md:mt-0">
          <MotionButton
            content={<SearchIcon />}
            variant="ghost"
            onClick={() => setIsSearch(!isSearch)}
            style={`${
              isSearch && "dark:bg-button_active bg-button_active2"
            } p-2 border md:hidden`}
          />
          <MotionButton
            content="Sign up"
            variant="secondary"
            style="px-4 h-[2.4rem]"
          />
          <MotionButton
            content="Login"
            variant="default"
            style="px-4 h-[2.2rem]"
          />
        </div>
      </div>
      <motion.div
        initial={{ y: isSearch ? -50 : 0 }}
        whileInView={{ y: isSearch ? 0 : -50 }}
        className="w-full"
      >
        {isSearch && <SearchField />}
      </motion.div>
      <ToggleTheme />
    </div>
  );
}
