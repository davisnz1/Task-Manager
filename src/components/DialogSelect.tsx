import InputLabel from "./InputLabel";
import { SelectHTMLAttributes } from "react";
import React from "react";

interface DialogSelectProps extends SelectHTMLAttributes<HTMLSelectElement> {}

const DialogSelect = (props: DialogSelectProps) => {
  return (
    <div>
      <InputLabel htmlFor="time">Horário</InputLabel>

      <select
        id="time"
        className="w-full px-4 mt-1 py-3 border-solid border border-[#ECECEC] rounded-lg outline-brand-primary 
                    placeholder:text-sm placeholder:text-brand-text-gray"
        {...props}
      >
        <option value="morning">Manhã</option>
        <option value="afternoon">Tarde</option>
        <option value="evening">Noite</option>
      </select>
    </div>
  );
};

export default DialogSelect;
