import SidebarLeft from "@/components/left-sidebar/sidebar_left";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <main className="flex flex-col justify-center border-4 mx-[300px]">
        <nav className="flex justify-center w-full border border-blue-400">
          NAVBAR
        </nav>
        <article className="flex justify-center border border-red-500 h-screen">
          <section className="w-[350px]">
            <SidebarLeft />
          </section>
          <article className="w-full flex justify-center">{children}</article>
          <section className="border w-[350px] flex justify-center">
            RIGHT SIDE
          </section>
        </article>
        <footer className="w-full flex justify-center">FOOTER</footer>
      </main>
    </>
  );
}
