import Logo from "@/components/nav/logo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { ToggleTheme } from "@/components/ui/toggle-theme";

export default function Navbar() {
  return (
    <div className="flex flex-col items-center justify-center m-5 gap-5">
      <div>
        <Logo />
      </div>
      <div className="flex items-center justify-center w-full relative">
        <form action="" className="w-full md:w-1/2">
          <fieldset className="relative">
            <Search className="absolute left-2 top-[6px]" />
            <Input
              type="text"
              className="pl-10 focus-visible:ring border border-[#222] border-opacity-30 dark:border-opacity-100"
            />
          </fieldset>
        </form>
        <div className="items-center gap-5 absolute right-5 md:flex hidden">
          <Button className="h-[2.1rem]">Login</Button>
          <ToggleTheme />
        </div>
      </div>
    </div>
  );
}
