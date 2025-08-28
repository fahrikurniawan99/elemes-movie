import cn from "@/utils/cn";
import React, { forwardRef } from "react";

type Variant = "primary" | "secondary" | "outline" | "ghost" | "destructive";
type Size = "sm" | "md" | "lg" | "icon";

export interface ButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "className"> {
  variant?: Variant;
  size?: Size;
  loading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  fullWidth?: boolean;
  className?: string;
}

const base =
  "inline-flex items-center justify-center gap-2 font-medium rounded-md cursor-pointer " +
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 " +
  "disabled:opacity-50 disabled:cursor-not-allowed transition-shadow shadow-sm hover:shadow";

const variantClasses: Record<Variant, string> = {
  primary: "bg-black text-white hover:bg-black/90 focus-visible:ring-black",
  secondary:
    "bg-gray-100 text-gray-900 hover:bg-gray-200 focus-visible:ring-gray-400",
  outline:
    "border border-white bg-transparent text-white hover:opacity-80 focus-visible:ring-gray-400",
  ghost:
    "bg-transparent text-gray-900 hover:bg-gray-100 focus-visible:ring-gray-300",
  destructive:
    "bg-red-600 text-white hover:bg-red-700 focus-visible:ring-red-600",
};

const sizeClasses: Record<Size, string> = {
  sm: "h-9 px-3 text-sm",
  md: "h-10 px-4 text-sm",
  lg: "h-11 px-6 text-base",
  icon: "h-10 w-10 p-0",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "primary",
      size = "md",
      loading = false,
      leftIcon,
      rightIcon,
      fullWidth,
      className,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    const classes = cn(
      base,
      variantClasses[variant],
      sizeClasses[size],
      fullWidth && "w-full",
      className
    );

    const isDisabled = disabled || loading;

    return (
      <button
        style={{
          cursor: "pointer !important",
        }}
        ref={ref}
        className={classes}
        disabled={isDisabled}
        aria-busy={loading || undefined}
        {...props}
      >
        {loading && (
          <svg
            className={cn("animate-spin h-4 w-4", size === "lg" && "h-5 w-5")}
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
              fill="none"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 0 1 8-8v4a4 4 0 0 0-4 4H4z"
            />
          </svg>
        )}

        {!loading && leftIcon}
        <span className={cn("whitespace-nowrap", size === "icon" && "sr-only")}>
          {children}
        </span>
        {!loading && rightIcon}
      </button>
    );
  }
);

Button.displayName = "Button";
