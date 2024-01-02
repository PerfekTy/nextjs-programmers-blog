import React, { useEffect, useState } from 'react';
import { getPopularTags } from "@/components/sidebar/right/righ-sidebar-content";
import Link from "next/link";

interface TagData {
    tag: string;
    count: number;
}

const RightSidebar = () => {
    const [popularTags, setPopularTags] = useState<TagData[]>([]);

    useEffect(() => {
        const fetchPopularTags = async () => {
            try {
                const tags = await getPopularTags();
                setPopularTags(tags);
            } catch (error) {
                console.error('Error fetching popular tags:', error);
            }
        };

        fetchPopularTags();
    }, []);

    return (
        <div>
            <h2>Popular Tags</h2>
            <ul>
                {popularTags.map((tagData, index) => {
                    return (
                        <li key={index}>
                            <Link href={""}>#{tagData.tag}</Link>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default RightSidebar;
