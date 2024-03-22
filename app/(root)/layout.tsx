"use client";

import React, { useEffect, useState } from "react";

import { Navbar } from "@/components/nav/navbar";
import { LeftSidebar } from "@/components/sidebar/left/left-sidebar";
import { ToggleTheme } from "@/components/ui/toggle-theme";
import { LeftSidebarMobile } from "@/components/sidebar/left/left-sidebar-mobile";
import { RightSidebar } from "@/components/sidebar/right/right-sidebar";

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const [isDesktop, setIsDesktop] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 768);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, [setIsDesktop]);

  return (
    <main className="relative flex flex-col justify-center">
      <nav>
        <Navbar setIsOpen={setIsOpen} isOpen={isOpen} isDesktop={isDesktop} />
      </nav>
      <article className="flex justify-center md:mt-0 2xl:mx-[20%]">
        {isOpen && !isDesktop && <LeftSidebarMobile isOpen={isOpen} setIsOpen={setIsOpen} />}
        <div className="hidden md:block">
          <LeftSidebar />
        </div>
        <article className="m-2 mb-16 w-full">{children}</article>
        <section className="hidden w-[300px] justify-center lg:block">
          <RightSidebar />
          <ToggleTheme />
        </section>
      </article>
      <footer className="fixed bottom-0 flex w-full items-center justify-center border-t bg-white p-3 dark:bg-sidebar">
        <p className="text-sm">&copy; 2024 Programmers Blog</p>
      </footer>
    </main>
  );
}
