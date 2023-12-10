"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function LoginButton() {
  return (
    <motion.div whileTap={{ scale: 0.9, rotate: "2deg" }}>
      <Button className="h-[2.1rem]">Login</Button>
    </motion.div>
  );
}
