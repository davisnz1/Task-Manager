import React, { forwardRef } from "react";
import InputLabel from "./InputLabel";

import { InputTaskProps } from "../lib/Types";

const InputTask = forwardRef<HTMLInputElement, InputTaskProps>(
  ({ label, error, variant = "add", ...rest }, ref) => {
    const variantStyles = {
      add: "bg-white border-[#ECECEC] text-black",
      info: "bg-brand-primary-info border border-[#adadad] text-black",
      tertiary: "bg-blue-100 border-[#3B82F6] text-blue-700",
    };

    return (
      <div className="space-y-1">
        <InputLabel htmlFor={rest.id} variant={variant}>
          {label}
        </InputLabel>
        <input
          ref={ref}
          className={`w-full px-4 py-3 rounded-lg outline-brand-primary placeholder:text-sm placeholder:text-brand-text-gray ${
            variantStyles[variant as keyof typeof variantStyles]
          }`}
          style={{
            verticalAlign: "top",
            lineHeight: "1.5",
          }}
          type="text"
          {...rest}
        />
        {error && (
          <p className="text-xs pt-1 text-red-500">
            {typeof error === "string" ? error : error.message}
          </p>
        )}
      </div>
    );
  }
);

export default InputTask;
