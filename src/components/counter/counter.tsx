"use client";

import { HTMLProps, useEffect, useRef } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";

interface Props extends HTMLProps<HTMLSpanElement> {
  value: number;
  direction?: "up" | "down";
}

export function Counter({ value, direction = "up", ...props }: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(direction === "down" ? value : 0);
  const springValue = useSpring(motionValue, {
    damping: 100,
    stiffness: 100,
  });
  const isInView = useInView(ref, { once: true, margin: "-10px" });

  useEffect(() => {
    if (isInView) {
      motionValue.set(direction === "down" ? 0 : value);
    }
  }, [motionValue, isInView, value, direction]);

  useEffect(
    () =>
      springValue.on("change", (latest) => {
        if (ref.current) {
          const formattedValue = Intl.NumberFormat("en-US").format(
            latest.toFixed(0)
          );
          ref.current.textContent = formattedValue;
        }
      }),
    [springValue, direction]
  );

  return (
    <span {...props} ref={ref}>
      {direction === "up" ? 0 : value}
    </span>
  );
}
