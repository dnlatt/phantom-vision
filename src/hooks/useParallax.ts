"use client";

import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function useParallax(offset = 100) {
  const ref = useRef<HTMLDivElement>(null);

  // Track scroll relative to the element
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Transform to Y translate value
  const y = useTransform(scrollYProgress, [0, 1], [offset, -offset]);

  return { ref, y };
}
