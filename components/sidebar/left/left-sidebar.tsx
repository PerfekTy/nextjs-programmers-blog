"use client";

import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";

import { routes } from "@/components/sidebar/left/routes";
import { useAuth } from "@clerk/nextjs";

export const LeftSidebar = () => {
  const router = useRouter();
  const { userId } = useAuth();

  return (
    <>
      {routes.map((route) => (
        <div
          key={route.href}
          className="w-full cursor-pointer p-4 hover:bg-sidebar_item hover:text-sidebar_item_dark hover:dark:bg-sidebar_item_dark hover:dark:text-sidebar_item md:w-[250px]"
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
      {!userId && (
        <div className="mx-2 mt-2 rounded-lg bg-sidebar_item py-2 shadow dark:bg-sidebar_item_dark md:bg-white md:dark:bg-sidebar">
          <span className="flex flex-col gap-1 text-center text-sm font-light">
            <h2 className="text-[16px] font-bold">
              {"Don't have an account yet?"}
            </h2>
            <Link
              href="/sign-up"
              className="font-semibold text-[#3a3cba] text-muted-foreground dark:text-[#88dcf8]"
            >
              Create one and stay up to date!
            </Link>
          </span>
        </div>
      )}
    </>
  );
};
