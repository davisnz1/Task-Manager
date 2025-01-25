import React from "react";

import { useState } from "react";
import { toast } from "sonner";

import { AboutButton, CheckIcon, LoaderIcon, TrashIcon } from "../assets/icons";
import Button from "./Button";
import axios from "axios";

interface Task {
  id: number;
  title: string;
  description?: string;
  time: "morning" | "afternoon" | "evening";
  status: "done" | "in_progress" | "not_started";
}

interface TaskItemProps {
  task: Task;
  onDeleteSucess: (taskId: number) => void;
  handleCheckboxClick: (taskId: number) => void;
}

const TaskItem = ({
  task,
  onDeleteSucess,
  handleCheckboxClick,
}: TaskItemProps) => {
  const [deleteIsLoading, setDeleteIsLoading] = useState(false);

  const handleDeleteClick = async () => {
    setDeleteIsLoading(true);

    try {
      await axios.delete(`http://localhost:3000/tasks/${task.id}`);
      onDeleteSucess(task.id);
      toast.success("Tarefa deletada com sucesso");
    } catch (error) {
      toast.error("Erro ao deletar a tarefa");
    } finally {
      setDeleteIsLoading(false);
    }
  };

  const getStatusClasses = () => {
    if (task.status === "done") {
      return "bg-brand-primary text-brand-primary";
    }
    if (task.status === "in_progress") {
      return "bg-brand-process text-brand-brand-danger";
    }
    if (task.status === "not_started") {
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

export default TaskItem;
