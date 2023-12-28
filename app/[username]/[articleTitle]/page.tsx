import Image from "next/image";
import { Heart } from "lucide-react";

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
        <div className="flex items-center gap-2 pb-4">
          <Image
            src="/us.jpg"
            alt="us"
            width={50}
            height={50}
            className="rounded-full aspect-square"
          />

          <span>
            <p className="font-bold">Author</p>
            <p className="text-sm text-muted-foreground">Date</p>
          </span>
        </div>

        {/* REACTIONS */}
        <div>
          <span className="flex items-center gap-2">
            <Heart fill="#ef4444" color="#ef4444" />
            <p>200</p>
          </span>
          {/* WILL BE MORE */}
        </div>

        {/* ARTICLE */}
        <article className="py-2">
          <h1 className="text-3xl md:text-[36px] font-black tracking-wider leading-10 pb-2">
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
