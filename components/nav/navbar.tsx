import { useState } from "react";

import { useRouter } from "next/navigation";

import { Logo } from "@/components/nav/logo";
import { MotionButton } from "@/components/ui/motion-button";
import { SearchField } from "@/components/nav/search-field";

import { BellIcon, SearchIcon } from "lucide-react";
import { Spin } from "hamburger-react";
import { UserButton, useAuth } from "@clerk/nextjs";

export function Navbar({
  isDesktop,
  isOpen,
  setIsOpen,
}: {
  isDesktop: boolean;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}) {
  const [isSearch, setIsSearch] = useState(false);
  const { push } = useRouter();

  const { userId } = useAuth();

  return (
    <div className="flex w-full flex-col items-center justify-center gap-5 bg-white pt-5 shadow dark:bg-sidebar lg:px-[20%]">
      <Logo />
      <div className="my-3 flex w-full items-center justify-center md:mr-0">
        <div className="flex items-center">
          <button
            className="ml-2 rounded-lg hover:bg-[#ebecfc] hover:text-[#2f3ab2] md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            <Spin size={25} duration={0.5} toggled={isOpen} />
          </button>
          <MotionButton
            content={<SearchIcon />}
            variant="ghost"
            onClick={() => setIsSearch(!isSearch)}
            style={`${isSearch && "dark:bg-button_active bg-button_active2"
              } p-2 border md:hidden mx-2`}
          />
        </div>
        <div className="hidden w-full md:ml-5 md:block xl:ml-0">
          <SearchField />
        </div>
        <div className="ml-auto mr-5 flex items-center gap-5 md:ml-0 md:mr-5 xl:mr-0">
          {userId ? (
            <>
              <MotionButton
                content="Create post"
                variant="ghost"
                style="px-4 h-[2.2rem] hover:bg-violet border border-violet hover:text-white text-violet"
                onClick={() => push("/create")}
              />
              <BellIcon />
              <UserButton />
            </>
          ) : (
            <>
              <MotionButton
                content="Sign up"
                variant="secondary"
                style="px-4 h-[2.2rem] dark:bg-black"
                onClick={() => push("/sign-up")}
              />
              <MotionButton
                content="Login"
                variant="default"
                style="px-4 h-[2.2rem]"
                onClick={() => push("/sign-in")}
              />
            </>
          )}
        </div>
      </div>
      {!isDesktop && isSearch &&
        <div className="w-full" >
          <SearchField />
        </div>
      }
    </div >
  );
}
