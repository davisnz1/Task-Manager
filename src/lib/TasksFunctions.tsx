// TasksFunctions.tsx
import axios from "axios";
import { toast } from "sonner";
import { Task } from "./Types";
import { useEffect, useState } from "react";
import { api } from "./axios/axios";

export const handleTaskStatusChangeHome = async (
  taskId: string,
  tasks: Task[],
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>
) => {
  setTasks((prevTasks) =>
    prevTasks.map((task) =>
      task.id === taskId
        ? {
            ...task,
            status:
              task.status === "done"
                ? "not_started"
                : task.status === "not_started"
                ? "in_progress"
                : "done",
          }
        : task
    )
  );

  try {
    const task = tasks.find((t) => t.id === taskId);
    if (task) {
      await api.put(`${taskId}`, { ...task });
    }
  } catch (error) {
    console.error("Erro ao atualizar o status da tarefa", error);
  }
};

export const handleSaveTaskEdit = async (
  taskId: string,
  updatedTask: Task,
  tasks: Task[],
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>
) => {
  const updatedTasks = tasks.map((task) =>
    task.id === taskId ? { ...task, ...updatedTask } : task
  );
  setTasks(updatedTasks);
};

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
    const response = await api.post("", task, {
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
    const response = await api.get("");

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
    await api.delete(`${taskId}`);
    toast.success("Tarefa deletada com sucesso!");
  } catch (error) {
    toast.error("Erro ao deletar tarefa!");
  }
};

export const useFetchTaskDetails = (taskId: string | number) => {
  const [task, setTask] = useState<Task | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!taskId) {
      setError("taskId é necessário para buscar os detalhes.");
      return;
    }

    const fetchTaskDetails = async () => {
      try {
        const response = await api.get(`${taskId}`);
        setTask(response.data);
      } catch (err) {
        setError("Erro ao buscar os detalhes da tarefa.");
      }
    };

    fetchTaskDetails();
  }, [taskId]);

  return { task, error };
};

export const updateTaskStatus = async (
  taskId: string,
  updatedTaskData: Task
) => {
  try {
    await api.put(`http://localhost:3000/tasks/${taskId}`, updatedTaskData);
    toast.success("Status da tarefa atualizado com sucesso!");
  } catch (error) {
    toast.error("Erro ao atualizar o status da tarefa.");
  }
};

export const handleTaskItemStatusChange = async (
  taskId: string,
  task: Task,
  updateTaskStatus: (taskId: string, updatedTaskData: Task) => Promise<void>,
  handleCheckboxClick: (taskId: string) => void
): Promise<void> => {
  const newStatus: "done" | "in_progress" | "not_started" =
    task.status === "done"
      ? "not_started"
      : task.status === "not_started"
      ? "in_progress"
      : "done";

  const updatedTaskData: Task = { ...task, status: newStatus };

  await updateTaskStatus(taskId, updatedTaskData);

  handleCheckboxClick(taskId);
};

export const getTaskStatusClasses = (task: { status: string }): string => {
  if (task.status === "done") {
    return "bg-brand-primary text-brand-primary";
  }
  if (task.status === "in_progress") {
    return "bg-brand-process text-brand-brand-danger";
  }
  if (task.status === "not_started") {
    return "bg-[#35383E0D] bg-opacity-10 text-dark-blue";
  }
  return "";
};
