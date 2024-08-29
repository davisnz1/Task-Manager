import PropTypes from "prop-types";
import { useState } from "react";
import { toast } from "sonner";

import { AboutButton, CheckIcon, LoaderIcon, TrashIcon } from "../assets/icons";
import Button from "../components/Button";

const TaskItem = ({ task, onDeleteSucess, handleCheckboxClick }) => {
  const [deleteIsLoading, setDeleteIsLoading] = useState(false);

  const handleDeleteClick = async () => {
    setDeleteIsLoading(true);
    const response = await fetch(`http://localhost:3000/tasks/${task.id}`, {
      method: "DELETE",
    });
    if (!response.ok) {
      setDeleteIsLoading(false);
      return toast.error("Erro ao deletar a tarefa");
    }
    onDeleteSucess(task.id);
    setDeleteIsLoading(false);
  };

  const getStatusClasses = () => {
    if (task.status == "done") {
      return "bg-brand-primary text-brand-primary";
    }
    if (task.status == "in_progress") {
      return "bg-brand-process text-brand-brand-danger";
    }
    if (task.status == "not_started") {
      return "bg-brand-dark-blue bg-opacity-10 text-dark-blue";
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
          onChange={() => handleCheckboxClick(task.id)}
        />
        {task.status === "done" && <CheckIcon />}
        {task.status === "in_progress" && (
          <LoaderIcon className="animate-spin text-white" />
        )}
      </label>
      <div className="flex w-full justify-between">
        {task.title}
        <a href="#" className="flex items-center">
          <Button
            color="ghost"
            onClick={handleDeleteClick}
            disabled={deleteIsLoading}
          >
            {deleteIsLoading ? (
              <LoaderIcon className="animate-spin text-brand-dark-gray" />
            ) : (
              <TrashIcon className="bg-transparent" />
            )}
          </Button>
          <AboutButton />
        </a>
      </div>
    </div>
  );
};

TaskItem.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    time: PropTypes.oneOf(["morning", "afternoon", "evening"]).isRequired,
    status: PropTypes.oneOf(["done", "in_progress", "not_started"]).isRequired,
  }),
  handleCheckboxClick: PropTypes.func.isRequired,
  handleDeleteClick: PropTypes.func.isRequired,
};

export default TaskItem;
