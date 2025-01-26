import React from "react";
import { InputLabelProps } from "../lib/Types";

const InputLabel: React.FC<InputLabelProps> = ({
  children,
  textSize,
  variant,
  ...props
}) => {
  const variantStyles = {
    add: "text-black",
    info: "text-black",
    infoDescription: "text-black",
    tertiary: "text-blue-700",
  };

  return (
    <label
      className={`font-semibold ${textSize} ${
        variant ? variantStyles[variant] : ""
      }`}
      {...props}
    >
      {children}
    </label>
  );
};

export default InputLabel;
