"use client";

import React, { useState } from "react";
import Navbar from "@/components/nav/navbar";
import LeftSidebar from "@/components/left-sidebar/left-sidebar";
import { AnimatePresence, motion } from "framer-motion";
import { Spin } from "hamburger-react";
import { montserrat } from "@/app/fonts";

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
            {isMobile && (
              <motion.section
                initial={{ x: -300 }}
                animate={{ x: 0 }}
                exit={{ x: -300 }}
                transition={{ type: "just", ease: "easeInOut" }}
                className="fixed left-0 top-0 h-screen w-[300px] bg-sidebar"
              >
                <div
                  className="flex justify-between md:hidden items-center"
                  onClick={() => setIsMobile(!isMobile)}
                >
                  <h1
                    className={`${montserrat.className} text-center ml-4 text-xl`}
                  >
                    Programmers Blog
                  </h1>
                  <Spin size={18} duration={0.5} toggled={isMobile} />
                </div>
                <LeftSidebar />
              </motion.section>
            )}
          </AnimatePresence>
          <div className="hidden md:block border-r">
            <LeftSidebar />
          </div>
          <article className="w-full flex justify-center">{children}</article>
          <section className="border w-[350px] justify-center lg:block hidden">
            RIGHT SIDE
          </section>
        </article>
        <footer className="w-full flex justify-center">FOOTER</footer>
      </main>
    </>
  );
}
