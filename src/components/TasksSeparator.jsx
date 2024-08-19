import PropTypes from "prop-types";

const TasksSeparator = ({ title, icon }) => {
  return (
    <div className="flex gap-2 pt-6 mx-6 border-b border-solid border-[#F4F4F5]">
      {icon}
      <p className="flex text-brand-text-gray mb-2 text-sm">{title}</p>
    </div>
  );
};

TasksSeparator.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.node,
};

export default TasksSeparator;
