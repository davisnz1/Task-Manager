import React, { ReactNode } from "react";
import { tv } from "tailwind-variants";
import { SidebarButtonProps } from "../lib/Types";

const SidebarButton = ({ onClick, children, color }: SidebarButtonProps) => {
  const sidebar = tv({
    base: "flex font-normal items-center gap-2 rounded-lg px-6 py-3 cursor-pointer",
    variants: {
      color: {
        unselected: "text-brand-dark-blue hover:bg-gray-100",
        selected: "bg-[#d2fafc] text-brand-primary",
      },
    },
  });

  return (
    <button onClick={onClick} className={sidebar({ color })}>
      {children}
    </button>
  );
};

export default SidebarButton;
