"use client";

import React, { useState } from "react";

import { Navbar } from "@/components/nav/navbar";
import { LeftSidebar } from "@/components/left-sidebar/left-sidebar";
import { ToggleTheme } from "@/components/ui/toggle-theme";
import { LeftSidebarMobile } from "@/components/left-sidebar/left-sidebar-mobile";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isMobile, setIsMobile] = useState(false);

  return (
    <>
      <main className="flex flex-col justify-center">
        <nav>
          <Navbar setIsMobile={setIsMobile} isMobile={isMobile} />
        </nav>
        <article className="flex justify-center h-screen 2xl:mx-[20%] md:mt-0">
          <LeftSidebarMobile setIsMobile={setIsMobile} isMobile={isMobile} />
          <div className="hidden md:block border-r">
            <LeftSidebar />
          </div>
          <article className="w-full flex justify-center mt-10">
            {children}
          </article>
          <section className="border w-[350px] justify-center lg:block hidden">
            RIGHT SIDE
          </section>
        </article>
        <ToggleTheme />
        <footer className="w-full flex justify-center">FOOTER</footer>
      </main>
    </>
  );
}
