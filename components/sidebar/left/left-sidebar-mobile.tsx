import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { unicaOne } from "@/app/fonts";

import { Spin } from "hamburger-react";
import { LeftSidebar } from "@/components/sidebar/left/left-sidebar";

export function LeftSidebarMobile({
  isMobile,
  setIsMobile,
}: {
  isMobile: boolean;
  setIsMobile: (isMobile: boolean) => void;
}) {
  return (
    <AnimatePresence>
      {isMobile && (
        <motion.section
          initial={{ x: -300 }}
          animate={{ x: 0 }}
          exit={{ x: -300 }}
          transition={{ type: "just", ease: "easeInOut" }}
          className="fixed left-0 top-0 h-screen w-[300px] dark:bg-sidebar bg-white border-r"
        >
          <div className="flex justify-between md:hidden items-center">
            <h1 className={`${unicaOne.className} text-center ml-4 text-2xl`}>
              Programmers Blog
            </h1>
            <div
              className="hover:bg-sidebar_item hover:dark:bg-sidebar_item_dark rounded-bl-lg rounded-tl-lg"
              onClick={() => setIsMobile(!isMobile)}
            >
              <Spin size={18} duration={0.5} toggled={isMobile} />
            </div>
          </div>
          <LeftSidebar />
        </motion.section>
      )}
    </AnimatePresence>
  );
}
