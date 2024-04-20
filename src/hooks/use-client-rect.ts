"use client";

import { useState, useEffect, RefObject } from "react";

export function useClientRect(ref: RefObject<HTMLElement | null>) {
  const [rect, setRect] = useState<DOMRect | undefined>(undefined);

  useEffect(() => {
    function handleResize() {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        setRect(rect);
      }
    }

    handleResize();

    window.addEventListener("scroll", handleResize);
    return () => {
      window.removeEventListener("scroll", handleResize);
    };
  }, [ref]);

  return rect;
}
