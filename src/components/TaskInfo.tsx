import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ButtonBack, TrashIcon } from "../assets/icons";
import Button from "../components/Button";
import TaskInfoDetails from "./TaskInfoDetails";
import { useNavigate } from "react-router";
import {
  Task,
  onTaskDeleteSuccess,
  useFetchTaskDetails,
} from "../lib/AllFunctions";

const TaskInfo = () => {
  const { taskId } = useParams<{ taskId: string }>();
  const { task, error } = useFetchTaskDetails(taskId as string);
  const [tasks, setTasks] = useState<Task[]>([]);
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1);
  };

  if (error) {
    return <div>{error}</div>;
  }

  if (!task) {
    return <p>Carregando...</p>;
  }

  const handleDeleteClick = () => {
    if (task) {
      onTaskDeleteSuccess(taskId, tasks, setTasks);
      navigate(-1);
    }
  };

  return (
    <div className="flex w-full">
      <div className="flex w-full font-poppins flex-col gap-4 p-10">
        <ButtonBack onClick={() => handleBackClick()} className="w-9 h-9" />
        <div className="flex items-center gap-1">
          <p className="text-sm font-base text-gray-500">Minhas tasks {">"}</p>
          <h1 className="text-sm text-brand-primary font-semibold">
            {task.title}
          </h1>
        </div>
        <div className="w-full flex justify-between items-center">
          <h1 className="text-3xl font-bold text-black">{task.title}</h1>
          <Button onClick={handleDeleteClick} size="small" color="delete">
            <TrashIcon />
            Deletar Tarefa
          </Button>
        </div>
        <TaskInfoDetails task={task} />
        <div className="flex justify-end gap-4">
          <Button onClick={handleBackClick} size="smallInfo" color="ghostInfo">
            Cancelar
          </Button>
          <Button size="smallInfo" color="primary">
            Salvar
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TaskInfo;
