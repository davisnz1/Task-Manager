import React from "react";

interface InputLabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  children: React.ReactNode;
  textSize?: string;
  variant?: "add" | "info" | "tertiary";
}

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
