import { ButtonHTMLAttributes, ReactNode } from "react";
import { tv } from "tailwind-variants";
import React from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  size?: "small" | "big";
  color?: "primary" | "ghost";
  className?: string;
}

const Button = ({
  children,
  size = "small",
  color = "primary",
  className,
  ...rest
}: ButtonProps) => {
  const button = tv({
    base: "flex items-center gap-1 rounded-md font-semibold",
    variants: {
      color: {
        primary: "bg-brand-primary text-white",
        ghost: "bg-transparent text-brand-dark-gray",
      },
      size: {
        small: "px-3 py-1 text-xs",
        big: "py-2 px-12",
      },
    },
    defaultVariants: {
      color: "primary",
      size: "small",
    },
  });

  return (
    <button className={button({ color, size, className })} {...rest}>
      {children}
    </button>
  );
};

export default Button;
