const Button = ({
  children,
  size = "small",
  variant = "primary",
  className,
  ...rest
}) => {
  const getVariantClasses = () => {
    if (variant == "primary") {
      return "bg-brand-primary text-white";
    }

    if (variant == "ghost") {
      return "bg-tranparent text-brand-dark-gray";
    }
  };

  const getSizeButton = () => {
    if (size == "small") {
      return "px-3 py-1 text-xs";
    }
    if (size == "big") {
      return "py-2 px-12";
    }
  };

  return (
    <button
      className={`${getVariantClasses()} ${getSizeButton()} ${className} flex items-center gap-1 
      rounded-md font-semibold`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
