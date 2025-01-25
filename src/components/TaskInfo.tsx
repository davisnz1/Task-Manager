import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { ButtonBack, TrashIcon } from "../assets/icons";
import Button from "../components/Button";
import TaskInfoDetails from "./TaskInfoDetails";

interface Task {
  id: string;
  title: string;
  description: string;
  status: string;
  time: string;
}

const TaskInfo = () => {
  const { taskId } = useParams<{ taskId: string }>();
  const [task, setTask] = useState<Task | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTaskDetails = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/tasks/${taskId}`
        );
        setTask(response.data);
      } catch (err) {
        setError("Erro ao buscar os detalhes da tarefa.");
      }
    };

    fetchTaskDetails();
  }, [taskId]);

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="flex w-full">
      {task ? (
        <div className="flex w-full font-poppins flex-col gap-4 p-10">
          <ButtonBack className="w-9 h-9" />
          <div className="flex items-center gap-1">
            <p className="text-sm  font-base text-gray-500">
              Minhas tasks {">"}
            </p>
            <h1 className="text-sm text-brand-primary font-semibold">
              {task.title}
            </h1>
          </div>
          <div className="w-full flex justify-between items-center">
            <h1 className="text-3xl font-bold text-black">{task.title}</h1>
            <Button size="small" color="delete">
              <TrashIcon />
              Deletar Tarefa
            </Button>
          </div>
          <TaskInfoDetails task={task} />
        </div>
      ) : (
        <p>Carregando...</p>
      )}
    </div>
  );
};

export default TaskInfo;
