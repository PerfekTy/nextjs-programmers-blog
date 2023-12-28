import Image from "next/image";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export function Logo() {
  const router = useRouter();

  return (
    <div
      className="flex items-center justify-center gap-3 cursor-pointer"
      onClick={() => router.push("/")}
    >
      <Image
        src="/assets/logos/screen-logo-dark.svg"
        alt="icon logo of programmers-blog"
        width={30}
        height={30}
        className="dark:block hidden w-8"
      />
      <motion.div
        initial={{ y: -70 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100 }}
      >
        <Image
          src="/assets/logos/text-logo-dark.svg"
          alt="programmers-blog logo"
          width={300}
          height={300}
          className="dark:block hidden"
        />
      </motion.div>
      <Image
        src="/assets/logos/screen-logo-light.svg"
        alt="programmers-blog logo"
        width={30}
        height={30}
        className="dark:hidden block w-8"
      />
      <motion.div
        initial={{ y: -70 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100 }}
      >
        <Image
          src="/assets/logos/text-logo-light.svg"
          alt="programmers-blog logo"
          width={300}
          height={300}
          className="dark:hidden block"
        />
      </motion.div>
    </div>
  );
}
