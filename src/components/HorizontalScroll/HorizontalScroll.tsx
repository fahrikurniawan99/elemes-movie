import type { ReactElement } from "react";
import React from "react";

export interface HorizontalScrollProps {
  items: ReactElement[];
}

const HorizontalScroll = React.forwardRef<
  HTMLDivElement,
  HorizontalScrollProps
>(({ items }, ref) => {
  return (
    <div ref={ref} className="overflow-x-auto no-scrollbar">
      <div className="flex gap-4 snap-x snap-mandatory px-4">
        {items.length > 0 && items}
      </div>
    </div>
  );
});

export default HorizontalScroll;
