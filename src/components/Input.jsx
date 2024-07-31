const InputAddTask = ({ label, ...rest }) => {
  return (
    <div className="space-y-1">
      <label className="font-semibold" htmlFor={rest.id}>
        {label}
      </label>
      <input
        className="w-full px-4 py-3 border-solid border border-[#ECECEC] rounded-lg outline-[#00ADB5] 
        placeholder:text-sm placeholder:text-[#9A9C9F]"
        type="text"
        {...rest}
      />
    </div>
  );
};

export default InputAddTask;
