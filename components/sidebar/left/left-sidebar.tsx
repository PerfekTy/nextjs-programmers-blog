"use client";

import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";

import { routes } from "@/components/sidebar/left/routes";

export const LeftSidebar = () => {
  const router = useRouter();

  return (
    <>
      {routes.map((route) => (
        <div
          key={route.href}
          className="p-4 hover:bg-sidebar_item hover:text-sidebar_item_dark hover:dark:bg-sidebar_item_dark hover:dark:text-sidebar_item md:w-[250px] cursor-pointer w-full"
          onClick={() => router.push(route.href)}
        >
          <div className="flex items-center gap-5">
            <Image
              src={`/assets/icons/${route.icon}`}
              alt={`icon of ${route.title.toLowerCase()} page`}
              width={21}
              height={21}
            />
            <Link href={`/${route.href}`} className="hover:underline">
              {route.title}
            </Link>
          </div>
        </div>
      ))}
      <div className="dark:bg-sidebar_item_dark bg-sidebar_item mx-2 md:dark:bg-sidebar md:bg-white mt-2 py-2 rounded-lg shadow">
        <span className="text-sm font-light text-center flex flex-col gap-1">
          <h2 className="text-[16px] font-bold">
            {"Don't have an account yet?"}
          </h2>
          <Link
            href="#"
            className="text-muted-foreground dark:text-[#88dcf8] text-[#3a3cba] font-semibold"
          >
            Create one and stay up to date!
          </Link>
        </span>
      </div>
    </>
  );
};
