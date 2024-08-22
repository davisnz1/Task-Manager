import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { toast } from "sonner";

import { AddIcon, Afternoon, Moon, Sun, TrashIcon } from "../assets/icons";
import AddTaskDialog from "./AddTaskDialog";
import Button from "./Button";
import TaskItem from "./TaskItem";
import TasksSeparator from "./TasksSeparator";

const Tasks = () => {
  const [tasks, setTasks] = useState([]);
  const [addTasksDialogIsOpen, setAddTasksDialogIsOpen] = useState(false);

  useEffect(() => {
    const fetchTasks = async () => {
      const response = await fetch("http://localhost:3000/tasks", {
        method: "GET",
      });

      const tasks = await response.json();
      setTasks(tasks);
    };

    fetchTasks();
  });

  const handleTaskCheckboxClick = (taskId) => {
    const newTask = tasks.map((task) => {
      if (task.id != taskId) {
        return task;
      }
      if (task.status == "not_started") {
        toast.success("Tarefa Iniciada");
        return { ...task, status: "in_progress" };
      }
      if (task.status == "in_progress") {
        toast.success("Tarefa Concluida");
        return { ...task, status: "done" };
      }
      if (task.status == "done") {
        toast.success("Tarefa Reiniciada com sucesso!");
        return { ...task, status: "not_started" };
      }
    });
    setTasks(newTask);
  };

  const handleTaskDeleteClick = async (taskId) => {
    const response = await fetch(`http://localhost:3000/tasks/${taskId}`, {
      method: "DELETE",
    });
    if (!response.ok) {
      return toast.error("Tarefa deletada com sucesso!");
    }

    const newTasks = tasks.filter((task) => task.id != taskId);
    setTasks(newTasks);
    toast.success("Tarefa deletada com sucesso!");
  };

  const handleAddTaskSubmit = async (task) => {
    const response = await fetch("http://localhost:3000/tasks", {
      method: "POST",
      body: JSON.stringify(task),
    });
    if (response.ok) {
      return toast.error("Erro ao adicionar a tarefa. Tente novamente");
    }

    console.log({ response });
    setTasks([...tasks, task]);
    toast.success("Tarefa Adicionada com Sucesso");
  };

  const morningTasks = tasks.filter((task) => task.time == "morning");
  const afternoonTasks = tasks.filter((task) => task.time == "afternoon");
  const eveningTasks = tasks.filter((task) => task.time == "evening");

  return (
    <div className="w-full px-8 py-16">
      <div className="flex  w-full justify-between">
        <div className="font-poppins">
          <span className="text-xs font-semibold text-brand-primary">
            Minhas tarefas
          </span>
          <h2 className="text-xl font-semibold">Minhas tarefas</h2>
        </div>

        <div className="flex items-center gap-3">
          <Button size="small" color="ghost">
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
          {morningTasks.map((task) => {
            return (
              <TaskItem
                key={task.id}
                task={task}
                handleCheckboxClick={handleTaskCheckboxClick}
                handleDeleteClick={handleTaskDeleteClick}
              />
            );
          })}
        </div>

        <div>
          <TasksSeparator icon={<Afternoon />} title="Tarde" />
          {afternoonTasks.map((task) => {
            return (
              <TaskItem
                key={task.id}
                task={task}
                handleCheckboxClick={handleTaskCheckboxClick}
                handleDeleteClick={handleTaskDeleteClick}
              />
            );
          })}
        </div>

        <div>
          <TasksSeparator icon={<Moon />} title="Noite" />
          {eveningTasks.map((task) => {
            return (
              <TaskItem
                key={task.id}
                task={task}
                handleCheckboxClick={handleTaskCheckboxClick}
                handleDeleteClick={handleTaskDeleteClick}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

Tasks.propTypes = {
  task: PropTypes.string,
  handleAddTaskSubmit: PropTypes.func,
  handleCheckboxClick: PropTypes.func,
  handleDeleteClick: PropTypes.func,
};

export default Tasks;
