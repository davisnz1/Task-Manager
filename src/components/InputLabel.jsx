const InputLabel = (props) => {
  return (
    <label className="font-semibold" {...props}>
      {props.children}
    </label>
  );
};

export default InputLabel;
