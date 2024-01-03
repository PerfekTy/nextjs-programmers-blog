export default function Page({ params }: { params: { tag: string } }) {
  const { tag } = params;

  return <div>Tag {tag}</div>;
}
