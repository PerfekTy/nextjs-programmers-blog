"use client";

import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";

import { routes } from "@/components/left-sidebar/routes";

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
    </>
  );
};
