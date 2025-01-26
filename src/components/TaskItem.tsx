import React from "react";

import { useState } from "react";

import { TaskItemProps } from "../lib/Types";
import {
  updateTaskStatus,
  handleTaskItemStatusChange,
  getTaskStatusClasses,
} from "../lib/TasksFunctions";
import { AboutButton, CheckIcon, LoaderIcon, TrashIcon } from "../assets/icons";
import Button from "./Button";
import axios from "axios";
import { useNavigate } from "react-router";

const TaskItem: React.FC<TaskItemProps> = ({
  task,
  onDeleteSucess,
  handleCheckboxClick,
  type,
}) => {
  const [deleteIsLoading, setDeleteIsLoading] = useState(false);

  const handleDeleteTask = async () => {
    if (deleteIsLoading) return;
    setDeleteIsLoading(true);
    await onDeleteSucess(task.id);
    setDeleteIsLoading(false);
  };

  const navigate = useNavigate();
  const statusClasses = getTaskStatusClasses(task);

  const handleAboutClick = () => {
    navigate(`/task/${task.id}`);
  };

  return (
    <div
      className={`flex bg-opacity-10 items-center my-3 gap-2 px-4 py-3 text-sm rounded-lg 
      ${statusClasses} 
      ${type === "all" ? "mx-6" : ""} 
      ${type === "home" ? "mx-0" : ""}
    `}
    >
      <label
        className={`transition relative bg-opacity-100 flex h-7 w-7 cursor-pointer items-center justify-center rounded-lg ${statusClasses}`}
      >
        <input
          type="checkbox"
          checked={task.status === "done"}
          className="absolute h-full w-full cursor-pointer opacity-0"
          onChange={() =>
            handleTaskItemStatusChange(
              task.id,
              task,
              updateTaskStatus,
              handleCheckboxClick
            )
          }
        />
        {task.status === "done" && <CheckIcon />}
        {task.status === "in_progress" && (
          <LoaderIcon className="animate-spin text-white" />
        )}
      </label>
      <div className="flex w-full justify-between">
        {task.title}
        <div className="flex items-center">
          {type !== "home" && (
            <Button
              color="ghost"
              onClick={() => handleDeleteTask()}
              disabled={deleteIsLoading}
            >
              {deleteIsLoading ? (
                <LoaderIcon className="animate-spin text-brand-dark-gray" />
              ) : (
                <TrashIcon className="bg-transparent" />
              )}
            </Button>
          )}
          <AboutButton onClick={handleAboutClick} />
        </div>
      </div>
    </div>
  );
};

export default TaskItem;
