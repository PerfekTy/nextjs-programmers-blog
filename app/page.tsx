import Image from "next/image";
import { ToggleTheme } from "@/components/ui/toggle-theme";

export default async function Page() {
  return (
    <div>
      <Image
        src="/logo.svg"
        alt="logo of programmers-blog"
        width={80}
        height={50}
      />
      <ToggleTheme />
    </div>
  );
}
