"use client";
import { useEffect } from "react";

// Closes the mobile menu when the page scrolls, when a link is tapped, or when you tap outside it.
export default function MenuClose() {
  useEffect(() => {
    const d = document.querySelector<HTMLDetailsElement>("details.menu");
    if (!d) return;
    const close = () => { if (d.open) d.open = false; };
    const onTap = (e: Event) => {
      const t = e.target as HTMLElement | null;
      if (!t) return;
      if (!d.contains(t) || t.closest("nav a")) close();
    };
    window.addEventListener("scroll", close, { passive: true });
    document.addEventListener("click", onTap);
    return () => { window.removeEventListener("scroll", close); document.removeEventListener("click", onTap); };
  }, []);
  return null;
}
