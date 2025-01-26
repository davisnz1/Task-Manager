import React, { useEffect, useState } from "react";
import { AddIcon, Afternoon, Moon, Sun, TrashIcon } from "../assets/icons";
import AddTaskDialog from "./AddTaskDialog";
import {
  handleAddTaskSubmit,
  onTaskDeleteSuccess,
  fetchTasks,
  handleTaskCheckboxClick,
} from "../lib/TasksFunctions";
import { Task } from "../lib/Types";
import Button from "./Button";
import TaskItem from "./TaskItem";
import TasksSeparator from "./TasksSeparator";

const Tasks = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [addTasksDialogIsOpen, setAddTasksDialogIsOpen] = useState(false);

  useEffect(() => {
    fetchTasks(setTasks);
  }, []);

  const handleAddTask = async (task: Task) => {
    await handleAddTaskSubmit(task, setTasks);
  };

  const handleDeleteTask = (taskId: string) => {
    onTaskDeleteSuccess(String(taskId), tasks, setTasks);
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
            handleSubmit={handleAddTask}
          />
        </div>
      </div>
      <div className="font-poppins bg-white mt-6 pb-8 rounded-xl">
        <TasksSeparator icon={<Sun />} title="Manhã" />
        {morningTasks.map((task) => (
          <TaskItem
            type="all"
            key={task.id}
            task={task}
            handleCheckboxClick={(taskId: string) =>
              handleTaskCheckboxClick(taskId, tasks, setTasks)
            }
            onDeleteSucess={handleDeleteTask}
          />
        ))}

        <TasksSeparator icon={<Afternoon />} title="Tarde" />
        {afternoonTasks.map((task) => (
          <TaskItem
            type="all"
            key={task.id}
            task={task}
            handleCheckboxClick={(taskId: string) =>
              handleTaskCheckboxClick(taskId, tasks, setTasks)
            }
            onDeleteSucess={handleDeleteTask}
          />
        ))}

        <TasksSeparator icon={<Moon />} title="Noite" />
        {eveningTasks.map((task) => (
          <TaskItem
            type="all"
            key={task.id}
            task={task}
            handleCheckboxClick={(taskId: string) =>
              handleTaskCheckboxClick(taskId, tasks, setTasks)
            }
            onDeleteSucess={handleDeleteTask}
          />
        ))}
      </div>
    </div>
  );
};

export default Tasks;
