import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Disable browser default scroll restoration
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    // Immediate jump for better reliability on route change
    window.scrollTo(0, 0);

    // Backup for complex layouts (GSAP, etc.)
    const timeout = setTimeout(() => {
      window.scrollTo(0, 0);
    }, 10);

    return () => clearTimeout(timeout);
  }, [pathname]);

  return null;
}
