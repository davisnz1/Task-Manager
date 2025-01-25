import React, { forwardRef, SelectHTMLAttributes } from "react";
import InputLabel from "./InputLabel";

type Variant = "default" | "primary" | "secondary";
type InputSize = "small" | "medium" | "large";

interface DialogSelectProps
  extends Omit<SelectHTMLAttributes<HTMLSelectElement>, "size"> {
  variant?: Variant;
  inputSize?: InputSize;
}

const DialogSelect = forwardRef<HTMLSelectElement, DialogSelectProps>(
  (
    { variant = "default", inputSize = "medium", id = "time", ...props },
    ref
  ) => {
    const variantStyles = {
      default: "border-[#ECECEC] bg-white",
      primary: "border-brand-primary bg-brand-light",
      secondary:
        "w-full px-4 py-3 border-solid border bg-brand-primary-info border-[#c2c2c2] rounded-lg outline-brand-primary text-brand-light-gray ",
    };

    const sizeStyles = {
      small: "py-2 px-3 text-sm",
      medium: "py-3 px-4 text-base",
      large: "py-4 px-5 text-lg",
    };

    const selectClass = `w-full rounded-lg outline-brand-primary ${variantStyles[variant]} ${sizeStyles[inputSize]} placeholder:text-sm placeholder:text-brand-text-gray`;

    return (
      <div>
        <InputLabel htmlFor={id}>Horário</InputLabel>
        <select ref={ref} id={id} className={selectClass} {...props}>
          <option value="morning">Manhã</option>
          <option value="afternoon">Tarde</option>
          <option value="evening">Noite</option>
        </select>
      </div>
    );
  }
);

export default DialogSelect;
