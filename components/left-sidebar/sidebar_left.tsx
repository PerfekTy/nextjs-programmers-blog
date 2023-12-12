import React from 'react';
import Link from "next/link";

const Contents = [
    {
        icon: "🏠",
        categories: "Home"
    },
    {
        icon: "🆕",
        categories: "News"
    },
    {
        icon: "👀",
        categories: "About"
    },
    {
        icon: "🍳",
        categories: "FAQ"
    },
    {
        icon: "🛍️",
        categories: "Shop"
    },
    {
        icon: "📖",
        categories: "Guides"
    }
]

const SidebarLeft = () => {
    return (
        <>
            {Contents.map(content => (
                <div key={content.categories}
                     className='p-[10px] my-[5px] text-sm hover:bg-gray-900'>
                    <span className='grid grid-cols-3 pl-3'>{content.icon}
                        <Link href={`/${content.categories.toLowerCase()}`}
                              className='hover:underline'>{content.categories}</Link>
                    </span>
                </div>
            ))}
        </>
    );
};

export default SidebarLeft;