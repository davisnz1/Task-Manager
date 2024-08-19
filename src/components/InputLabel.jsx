import PropTypes from "prop-types";

const InputLabel = (props) => {
  return (
    <label className="font-semibold" {...props}>
      {props.children}
    </label>
  );
};

InputLabel.propTypes = {
  props: PropTypes.node.isRequired,
};

export default InputLabel;
