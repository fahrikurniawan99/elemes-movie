import { ChevronLeft, ChevronRight } from "lucide-react"; // ikon opsional
import type { ReactElement } from "react";
import React, { useEffect, useRef, useState } from "react";

export interface HorizontalScrollProps {
  items: ReactElement[];
  scrollAmount?: number;
}

const HorizontalScroll: React.FC<HorizontalScrollProps> = ({
  items,
  scrollAmount = 300,
}) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const checkScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    setCanScrollLeft(scrollLeft > 0);
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth);
  };

  useEffect(() => {
    checkScroll();
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener("scroll", checkScroll);
    window.addEventListener("resize", checkScroll);
    return () => {
      el.removeEventListener("scroll", checkScroll);
      window.removeEventListener("resize", checkScroll);
    };
  }, []);

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    const amount = dir === "left" ? -scrollAmount : scrollAmount;
    scrollRef.current.scrollBy({ left: amount, behavior: "smooth" });
  };

  return (
    <div className="relative">
      {canScrollLeft && (
        <button
          onClick={() => scroll("left")}
          className="absolute cursor-pointer left-0 top-1/2 -translate-y-1/2 bg-white shadow-md rounded-full p-2 z-10 hover:scale-150 transition-all duration-500"
        >
          <ChevronLeft  className="text-gray-800"/>
        </button>
      )}

      <div
        ref={scrollRef}
        className="overflow-x-auto no-scrollbar scroll-smooth"
      >
        <div className="flex gap-4 snap-x snap-mandatory px-8">
          {items.length > 0 && items}
        </div>
      </div>

      {canScrollRight && (
        <button
          onClick={() => scroll("right")}
          className="absolute cursor-pointer right-0 top-1/2 -translate-y-1/2 bg-white shadow-md rounded-full p-2 z-10 hover:scale-150 transition-all duration-500"
        >
          <ChevronRight className="text-gray-800" />
        </button>
      )}
    </div>
  );
};

export default HorizontalScroll;
