"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ReactNode } from "react";

type MotionButton = {
  content?: string | ReactNode;
  variant?:
    | "link"
    | "outline"
    | "default"
    | "destructive"
    | "secondary"
    | "ghost";
  style?: string;
  onClick?: () => void;
};

export function MotionButton({
  content,
  variant,
  style,
  onClick,
}: MotionButton) {
  return (
    <motion.div whileTap={{ scale: 0.8, rotate: "2deg" }}>
      <Button variant={variant} className={style} onClick={onClick}>
        {content}
      </Button>
    </motion.div>
  );
}
