import React from "react";
import { LabelHTMLAttributes, ReactNode } from "react";

interface InputLabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  children: ReactNode;
}

const InputLabel = (props: InputLabelProps) => {
  return (
    <label className="font-semibold" {...props}>
      {props.children}
    </label>
  );
};

export default InputLabel;
