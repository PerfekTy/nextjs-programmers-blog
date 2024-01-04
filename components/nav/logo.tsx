"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export function Logo() {
  const router = useRouter();

  return (
    <div
      className="flex cursor-pointer items-center justify-center gap-3"
      onClick={() => router.push("/")}
    >
      <Image
        src="/assets/logos/screen-logo-dark.svg"
        alt="icon logo of programmers-blog"
        width={30}
        height={30}
        priority
        className="hidden dark:block"
      />
      <motion.div
        initial={{ y: -70 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100 }}
      >
        <Image
          src="/assets/logos/text-logo-dark.svg"
          priority
          alt="programmers-blog logo"
          width={300}
          height={300}
          className="hidden dark:block"
        />
      </motion.div>
      <Image
        src="/assets/logos/screen-logo-light.svg"
        alt="programmers-blog logo"
        width={30}
        height={30}
        priority
        className="block dark:hidden"
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
          priority
          height={300}
          className="block dark:hidden"
        />
      </motion.div>
    </div>
  );
}
