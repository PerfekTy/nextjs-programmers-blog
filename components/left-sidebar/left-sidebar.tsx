"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

const contents = [
  {
    icon: "🏠",
    categories: "Home",
  },
  {
    icon: "🆕",
    categories: "News",
  },
  {
    icon: "👀",
    categories: "About",
  },
  {
    icon: "🍳",
    categories: "FAQ",
  },
  {
    icon: "🛍️",
    categories: "Shop",
  },
  {
    icon: "📖",
    categories: "Guides",
  },
];

const LeftSidebar = () => {
  const router = useRouter();

  return (
    <>
      {contents.map((content) => (
        <div
          key={content.categories}
          className="p-3 hover:bg-gray-900 md:w-[250px] cursor-pointer w-full"
          onClick={() => router.push(content.categories.toLowerCase())}
        >
          <div className="flex items-center gap-5">
            <span className="text-xl">{content.icon}</span>
            <Link
              href={`/${content.categories.toLowerCase()}`}
              className="hover:underline"
            >
              {content.categories}
            </Link>
          </div>
        </div>
      ))}
    </>
  );
};

export default LeftSidebar;
