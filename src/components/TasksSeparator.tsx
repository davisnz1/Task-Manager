import React from "react";
import { TasksSeparatorProps } from "../lib/Types";

const TasksSeparator = ({ title, icon }: TasksSeparatorProps) => {
  return (
    <div className="flex gap-2 pt-6 mx-6 border-b border-solid border-[#F4F4F5]">
      {icon}
      <p className="flex text-brand-light-gray mb-2 text-sm">{title}</p>
    </div>
  );
};

export default TasksSeparator;
