import { AnimatePresence, motion } from "framer-motion";
import { unicaOne } from "@/app/utils/fonts";

import { Spin } from "hamburger-react";
import { LeftSidebar } from "@/components/sidebar/left/left-sidebar";
import { SetStateAction } from "react";

export function LeftSidebarMobile({
  isOpen,
  setIsOpen
}: {
  isOpen: boolean;
  setIsOpen: React.Dispatch<SetStateAction<boolean>>;
}) {

  return (
    <AnimatePresence>
      <motion.section
        initial={{ x: -300 }}
        animate={{ x: 0 }}
        exit={{ x: -300 }}
        transition={{ type: "just", ease: "easeInOut" }}
        className="fixed left-0 top-0 z-50 h-screen w-[300px] border-r bg-white dark:bg-sidebar"
      >
        <div className="flex items-center justify-between ">
          <h1 className={`${unicaOne.className} ml-4 text-center text-2xl`}>
            Programmers Blog
          </h1>
          <div
            className="rounded-lg hover:bg-sidebar_item hover:dark:bg-sidebar_item_dark"
            onClick={() => setIsOpen(!isOpen)}
          >
            <Spin size={18} duration={0.5} toggled={isOpen} />
          </div>
        </div>
        <LeftSidebar />
      </motion.section>
    </AnimatePresence>
  );
}
