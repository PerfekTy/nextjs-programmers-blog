import Navbar from "@/components/nav/navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <main className="flex flex-col justify-center">
        <nav>
          <Navbar />
        </nav>
        <article className="flex justify-center h-screen xl:mx-[20%] mt-10 md:mt-0">
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
