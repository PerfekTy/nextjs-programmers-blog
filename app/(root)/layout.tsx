"use client";

import { useState } from "react";
import Navbar from "@/components/nav/navbar";
import { Spin } from "hamburger-react";
import { AnimatePresence, motion } from "framer-motion";
import SidebarLeft from "@/components/left-sidebar/sidebar_left";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isMobile, setIsMobile] = useState(false);

  return (
    <>
      <main className="flex flex-col justify-center">
        <nav>
          <Navbar setIsMobile={setIsMobile} isMobile={isMobile} />
        </nav>
        <article className="flex justify-center h-screen xl:mx-[20%] md:mt-0">
          <AnimatePresence>
            {isMobile ? (
              <motion.section
                initial={{ x: -300 }}
                animate={{ x: 0 }}
                exit={{ x: -300 }}
                transition={{ type: "just", ease: "easeInOut" }}
                className="fixed left-0 top-0 h-screen w-[300px] bg-sidebar"
              >
                <div
                  className="flex justify-end md:hidden"
                  onClick={() => setIsMobile(!isMobile)}
                >
                  <Spin size={18} duration={0.5} toggled={isMobile} />
                </div>
              </motion.section>
            ) : (
              <SidebarLeft/>
            )}
          </AnimatePresence>
          <article className="w-full flex justify-center">{children}</article>
          <section className="border w-[350px] justify-center">
            RIGHT SIDE
          </section>
        </article>
        <footer className="w-full flex justify-center">FOOTER</footer>
      </main>
    </>
  );
}
