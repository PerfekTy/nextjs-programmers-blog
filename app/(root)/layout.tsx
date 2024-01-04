"use client";

import React, { useState } from "react";

import { Navbar } from "@/components/nav/navbar";
import { LeftSidebar } from "@/components/sidebar/left/left-sidebar";
import { ToggleTheme } from "@/components/ui/toggle-theme";
import { LeftSidebarMobile } from "@/components/sidebar/left/left-sidebar-mobile";
import { RightSidebar } from "@/components/sidebar/right/right-sidebar";

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const [isMobile, setIsMobile] = useState(false);

  return (
    <main className="flex flex-col justify-center">
      <nav>
        <Navbar setIsMobile={setIsMobile} isMobile={isMobile} />
      </nav>
      <article className="flex justify-center md:mt-0 2xl:mx-[20%]">
        <LeftSidebarMobile setIsMobile={setIsMobile} isMobile={isMobile} />
        <div className="hidden md:block">
          <LeftSidebar />
        </div>
        <article className="m-2 h-screen w-full">{children}</article>
        <section className="hidden w-[300px] justify-center lg:block">
          <RightSidebar />
        </section>
      </article>
      <footer className="flex w-full justify-center border">
        <ToggleTheme />
      </footer>
    </main>
  );
}
