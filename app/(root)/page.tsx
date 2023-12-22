import {ArticleList} from "@/components/articles/article-list";
import {ArticleContextProvider} from "@/app/articleContext/article-context";

export default function Page() {
    return (
        <>
            <ArticleContextProvider>
                <ArticleList/>
            </ArticleContextProvider>
        </>
    );
}
