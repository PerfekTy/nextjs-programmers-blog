'use client'

import React, {createContext, useState} from "react";
import {Article} from "@/db/schema";

interface ArticleContextProps {
    data: any[];
    setData: (data: any[]) => void;
}

const defaultSettings: ArticleContextProps = {
    data: [],
    setData: () => {},
};

export const ArticleContext = createContext(defaultSettings);

export const ArticleContextProvider = (props: any) => {
    const [articles, setArticles] = useState<Article[]>([]);

    const setData = (data: any[]) => {
        setArticles(data);
    };

    return (
        <ArticleContext.Provider value={{ data: articles, setData }}>
            {props.children}
        </ArticleContext.Provider>
    );
};
