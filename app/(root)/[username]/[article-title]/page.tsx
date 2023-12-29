import Image from "next/image";

import { ReactionsTab } from "@/components/reactions-tab";
import { Avatar } from "@/components/ui/avatar";

export default function Page() {
  return (
    <div className="dark:bg-sidebar bg-white rounded-lg h-screen">
      {/* BANNER */}
      <Image
        src="/assets/images/next.png"
        alt="nextjs"
        width={2000}
        height={100}
        className="rounded-tl-lg rounded-tr-lg"
      />
      <div className="p-3 md:p-8">
        {/* AUTHOR */}
        <div className="flex items-center gap-2 pb-4 relative">
          <Avatar src="/us.jpg" isMedium />

          <span>
            <p className="font-bold">Author</p>
            <p className="text-sm text-muted-foreground">Date</p>
          </span>

          <div className="ml-auto absolute right-0 top-0">
            <ReactionsTab />
          </div>
        </div>

        {/* ARTICLE */}
        <article className="py-2">
          <h1 className="text-3xl md:text-[36px] font-black tracking-wider leading-10 pb-2 pr-10 md:pr-0">
            Diving into Server Actions in Next.js 14
          </h1>
          <span className="flex items-center gap-5 text-[15px] text-muted-foreground">
            <p>#nextjs</p>
            <p>#webdev</p>
          </span>
          <p className="mt-5">text</p>
        </article>
      </div>
    </div>
  );
}
