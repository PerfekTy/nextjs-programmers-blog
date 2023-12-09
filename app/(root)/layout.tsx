import Navbar from "@/components/nav/navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <main className="flex flex-col justify-center">
        <nav>
          <Navbar />
        </nav>
        <article className="flex justify-center border border-red-500 h-screen xl:mx-[20%]">
          <section className="border w-[350px] hidden justify-center">
            LEFT SIDE
          </section>
          <article className="w-full flex justify-center">{children}</article>
          <section className="border w-[350px] hidden justify-center">
            RIGHT SIDE
          </section>
        </article>
        <footer className="w-full flex justify-center">FOOTER</footer>
      </main>
    </>
  );
}
