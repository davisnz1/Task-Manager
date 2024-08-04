import InputLabel from "./InputLabel";

const DialogSelect = (props) => {
  return (
    <div>
      <InputLabel htmlFor="time">Horário</InputLabel>

      <select
        id="time"
        className="w-full px-4 mt-1 py-3 border-solid border border-[#ECECEC] rounded-lg outline-[#00ADB5] 
                    placeholder:text-sm placeholder:text-[#9A9C9F]"
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
