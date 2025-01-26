import { tv } from "tailwind-variants";
import React from "react";
import { ButtonProps } from "../lib/Types";

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
        primary:
          "bg-brand-primary text-white justify-center hover:bg-brand-primaryhover transition-colors",
        ghost: "bg-transparent text-brand-dark-gray",
        ghostInfo:
          "bg-brand-primary-info hover:bg-[#d4d4d4] transition-colors text-black",

        delete: "bg-[#EF4444] text-white hover:bg-[#bf3333]",
      },
      size: {
        small: "px-3 py-1 text-xs",
        smallInfo: "w-[90px] h-[36px] px-3 py-1 text-xs",
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
