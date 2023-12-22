"use client";

import React, {useState} from "react";

import {Navbar} from "@/components/nav/navbar";
import {LeftSidebar} from "@/components/sidebar/left/left-sidebar";
import {ToggleTheme} from "@/components/ui/toggle-theme";
import {LeftSidebarMobile} from "@/components/sidebar/left/left-sidebar-mobile";

export default function Layout({children}: { children: React.ReactNode }) {
    const [isMobile, setIsMobile] = useState(false);

    return (
        <>
            <main className="flex flex-col justify-center">
                <nav>
                    <Navbar setIsMobile={setIsMobile} isMobile={isMobile}/>
                </nav>
                <article className="flex justify-center 2xl:mx-[20%] md:mt-0">
                    <LeftSidebarMobile setIsMobile={setIsMobile} isMobile={isMobile}/>
                    <div className="hidden md:block border-r dark:border-none">
                        <LeftSidebar/>
                    </div>
                    <article className="w-full m-2">{children}</article>
                    <section className="border-l w-[350px] justify-center lg:block hidden">
                        Right
                    </section>
                </article>
                <footer className="w-full flex justify-center border">
                    <ToggleTheme/>
                </footer>
            </main>
        </>
    );
}
