import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "sonner";

export interface Task {
  id: string;
  title: string;
  description: string;
  status: "not_started" | "in_progress" | "done";
  time: "morning" | "afternoon" | "evening";
}

export const handleTaskCheckboxClick = (
  taskId: string,
  tasks: Task[],
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>
): void => {
  const newTasks = tasks.map((task): Task => {
    if (task.id !== taskId) {
      return task;
    } else if (task.status === "not_started") {
      toast.success("Tarefa Iniciada");
      return { ...task, status: "in_progress" };
    } else if (task.status === "in_progress") {
      toast.success("Tarefa Concluida");
      return { ...task, status: "done" };
    } else if (task.status === "done") {
      toast.success("Tarefa Reiniciada com sucesso!");
      return { ...task, status: "not_started" };
    }
    return task;
  });
  setTasks(newTasks);
};

export const handleAddTaskSubmit = async (
  task: Task,
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>
): Promise<void> => {
  try {
    const response = await axios.post("http://localhost:3000/tasks", task, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.status !== 201) {
      toast.error("Erro ao adicionar a tarefa. Tente novamente");
      return;
    }

    const newTask: Task = response.data;
    setTasks((prevTasks) => [...prevTasks, newTask]);
    toast.success("Tarefa Adicionada com Sucesso");
  } catch (error) {
    toast.error("Erro ao adicionar a tarefa. Tente novamente");
  }
};

export const fetchTasks = async (
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>
): Promise<void> => {
  try {
    const response = await axios.get("http://localhost:3000/tasks");

    if (response.status !== 200) {
      toast.error("Erro ao carregar tarefas.");
      return;
    }

    const fetchedTasks: Task[] = response.data;
    const validatedTasks: Task[] = fetchedTasks.map((task) => ({
      ...task,
      status: task.status as "not_started" | "in_progress" | "done",
    }));

    setTasks(validatedTasks);
  } catch (error) {
    toast.error("Erro ao carregar tarefas.");
  }
};

export const onTaskDeleteSuccess = async (
  taskId: string | undefined,
  tasks: Task[],
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>
) => {
  try {
    const newTasks = tasks.filter((task) => task.id !== taskId);

    setTasks(newTasks);
    await axios.delete(`http://localhost:3000/tasks/${taskId}`);
    toast.success("Tarefa deletada com sucesso!");
  } catch (error) {
    toast.error("Erro ao deletar a tarefa.");
  }
};

export const useFetchTaskDetails = (taskId: number | string) => {
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

  return { task, error };
};

export const handleBackClick = () => {
  const navigate = useNavigate();
  navigate(-1);
};
