import PropTypes from "prop-types";
import { tv } from "tailwind-variants";

const Button = ({
  children,
  size = "small",
  color = "primary",
  className,
  ...rest
}) => {
  const button = tv({
    base: "flex items-center gap-1 rounded-md font-semibold",
    variants: {
      color: {
        primary: "bg-brand-primary text-white",
        ghost: "bg-tranparent text-brand-dark-gray",
      },
      size: {
        small: "px-3 py-1 text-xs",
        big: "py-2 px-12",
      },
    },
    defaultVariants: {
      color: "primary",
      size: "small",
    },
  });

  return (
    <button className={button({ color, size, className })} {...rest}>
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  size: PropTypes.oneOf(["small", "big"]),
  color: PropTypes.oneOf(["primary", "ghost"]),
  className: PropTypes.string,
  rest: PropTypes.any,
};

export default Button;
