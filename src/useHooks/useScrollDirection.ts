import { useState, useEffect } from "react";

const useScrollDirection = () => {
  const [scrollDirection, setScrollDirection] = useState<"down" | "up" | null>(
    null,
  );

  useEffect(() => {
    let lastScrollY = window.pageYOffset;

    const updateScrollDirection = () => {
      const scrollY = window.pageYOffset;
      // Determine direction: "down" if scrolling down, "up" if scrolling up
      const direction = scrollY > lastScrollY ? "down" : "up";
      // Update state only if the direction actually changed
      if (
        direction !== scrollDirection &&
        (scrollY - lastScrollY > 10 || scrollY - lastScrollY < -10)
      ) {
        setScrollDirection(direction);
      }
      lastScrollY = scrollY > 0 ? scrollY : 0;
    };

    // Add event listener on mount
    window.addEventListener("scroll", updateScrollDirection);

    // Clean up event listener on unmount
    return () => {
      window.removeEventListener("scroll", updateScrollDirection);
    };
  }, [scrollDirection]); // Re-run effect if scrollDirection changes

  return scrollDirection;
};

export default useScrollDirection;
