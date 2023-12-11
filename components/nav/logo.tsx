"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function Logo() {
  return (
    <div className="flex items-center justify-center gap-3">
      <Image
        src="/screen-logo-dark.svg"
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
          src="/text-logo-dark.svg"
          alt="programmers-blog logo"
          width={300}
          height={300}
          className="dark:block hidden"
        />
      </motion.div>
      <Image
        src="/screen-logo-light.svg"
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
          src="/text-logo-light.svg"
          alt="programmers-blog logo"
          width={300}
          height={300}
          className="dark:hidden block"
        />
      </motion.div>
    </div>
  );
}
