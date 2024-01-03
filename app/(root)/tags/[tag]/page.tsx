import { TagPage } from "@/components/tags/tag-page";

export default function Page({ params }: { params: { tag: string } }) {
  return <TagPage params={params} />;
}
