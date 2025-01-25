import React, { useEffect, useState } from "react";
import { toast } from "sonner";

import { AddIcon, Afternoon, Moon, Sun, TrashIcon } from "../assets/icons";
import AddTaskDialog from "./AddTaskDialog";
import Button from "./Button";
import TaskItem from "./TaskItem";
import TasksSeparator from "./TasksSeparator";
import axios from "axios";

interface Task {
  id: number;
  title: string;
  status: "not_started" | "in_progress" | "done";
  time: "morning" | "afternoon" | "evening";
}

const Tasks = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [addTasksDialogIsOpen, setAddTasksDialogIsOpen] = useState(false);

  useEffect(() => {
    const fetchTasks = async () => {
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

    fetchTasks();
  }, []);

  const onTaskDeleteSucess = async (taskId: number) => {
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(newTasks);
    toast.success("Tarefa deletada com sucesso!");
  };

  const handleAddTaskSubmit = async (task: Task): Promise<void> => {
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

  const handleTaskCheckboxClick = (taskId: number) => {
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

  const morningTasks = tasks.filter((task) => task.time === "morning");
  const afternoonTasks = tasks.filter((task) => task.time === "afternoon");
  const eveningTasks = tasks.filter((task) => task.time === "evening");

  return (
    <div className="w-full px-8 py-16">
      <div className="flex w-full justify-between">
        <div className="font-poppins">
          <span className="text-xs font-semibold text-brand-primary">
            Minhas tarefas
          </span>
          <h2 className="text-xl font-semibold">Minhas tarefas</h2>
        </div>

        <div className="flex items-center gap-3">
          <Button size="small" color="ghost" onClick={() => setTasks([])}>
            Limpar Tarefas
            <TrashIcon />
          </Button>

          <Button size="small" onClick={() => setAddTasksDialogIsOpen(true)}>
            Nova Tarefa
            <AddIcon />
          </Button>

          <AddTaskDialog
            isOpen={addTasksDialogIsOpen}
            handleClose={() => setAddTasksDialogIsOpen(false)}
            handleSubmit={handleAddTaskSubmit}
          />
        </div>
      </div>
      <div className="font-poppins bg-white mt-6 pb-8 rounded-xl">
        <div>
          <TasksSeparator icon={<Sun />} title="Manhã" />
          {morningTasks.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              handleCheckboxClick={handleTaskCheckboxClick}
              onDeleteSucess={onTaskDeleteSucess}
            />
          ))}
        </div>

        <div>
          <TasksSeparator icon={<Afternoon />} title="Tarde" />
          {afternoonTasks.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              handleCheckboxClick={handleTaskCheckboxClick}
              onDeleteSucess={onTaskDeleteSucess}
            />
          ))}
        </div>

        <div>
          <TasksSeparator icon={<Moon />} title="Noite" />
          {eveningTasks.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              handleCheckboxClick={handleTaskCheckboxClick}
              onDeleteSucess={onTaskDeleteSucess}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tasks;
