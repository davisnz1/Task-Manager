import InputLabel from "./InputLabel";
import React from "react";

interface InputAddTaskProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: { message: string };
}

const InputAddTask = ({ label, error, ...rest }: InputAddTaskProps) => {
  return (
    <div className="space-y-1">
      <InputLabel htmlFor={rest.id}>{label}</InputLabel>
      <input
        className="w-full px-4 py-3 border-solid border border-[#ECECEC] rounded-lg outline-brand-primary
        placeholder:text-sm placeholder:text-brand-text-gray"
        type="text"
        {...rest}
      />
      {error && <p className="text-xs pt-1 text-red-500">{error.message}</p>}
    </div>
  );
};

export default InputAddTask;
