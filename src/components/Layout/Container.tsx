import cn from "@utils/cn";
import React from "react";

export interface ContainerProps {
  children: React.ReactNode;
  as?: React.ElementType;
  className?: string;
  style?: React.CSSProperties;
}

const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
  function Container(
    { children, as: Component = "div", className, style },
    ref
  ) {
    return (
      <Component
        style={style}
        ref={ref}
        className={cn("w-[95%] max-w-[1300px] mx-auto px-3 sm:px-0", className)}
      >
        {children}
      </Component>
    );
  }
);

export default Container;
