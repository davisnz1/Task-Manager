const Button = ({ children, variant = "primary" }) => {
  const getVariantClasses = () => {
    if (variant == "primary") {
      return "bg-[#00ADB5] text-white";
    }

    if (variant == "ghost") {
      return "bg-tranparent text-[#818181]";
    }
  };

  return (
    <button
      className={`${getVariantClasses()} flex items-center gap-1 rounded-md font-semibold px-3 py-1 text-xs`}
    >
      {children}
    </button>
  );
};

export default Button;
