import AboutButton from "../assets/icons/about.svg?react";
import CheckIcon from "../assets/icons/check.svg?react";
import LoaderIcon from "../assets/icons/loader.svg?react";
import TrashIcon from "../assets/icons/trash.svg?react";

import Button from "../components/Button";

const TaskItem = ({ task, handleCheckboxClick, handleDeleteClick }) => {
  const getStatusClasses = () => {
    if (task.status == "done") {
      return "bg-[#00ADB5] text-[#00ADB5]";
    }
    if (task.status == "in_progress") {
      return "bg-[#FFAA04] text-[#FFAA04]";
    }
    if (task.status == "not_started") {
      return "bg-[#35383E0D] bg-opacity-10 text-[#35383E]";
    }
  };

  return (
    <div
      className={`flex bg-opacity-10 items-center mx-6 my-3 gap-2 px-4 py-3 text-sm rounded-lg ${getStatusClasses()} `}
    >
      <label
        className={`transition relative bg-opacity-100 flex h-7 w-7 cursor-pointer items-center justify-center rounded-lg ${getStatusClasses()}`}
      >
        <input
          type="checkbox"
          checked={task.status === "done"}
          className="absolute h-full w-full cursor-pointer opacity-0"
          onClick={() => handleCheckboxClick(task.id)}
        />
        {task.status === "done" && <CheckIcon />}
        {task.status === "in_progress" && (
          <LoaderIcon className="animate-spin" />
        )}
      </label>
      <div className="flex w-full justify-between">
        {task.title}
        <a href="#" className="flex items-center">
          <Button variant="ghost" onClick={() => handleDeleteClick(task.id)}>
            <TrashIcon className="text-transparent" />
          </Button>
          <AboutButton />
        </a>
      </div>
    </div>
  );
};

export default TaskItem;
