/* Icones*/
import AddIcon from "../assets/icons/Add.svg?react";
import TrashIcon from "../assets/icons/trash.svg?react";
import Sun from "../assets/icons/sun.svg?react";
import Afternoon from "../assets/icons/cloud-sun.svg?react";
import Moon from "../assets/icons/moon.svg?react";

import Button from "./Button";
import TasksSeparator from "./TasksSeparator";

import { useState } from "react";
import TasksConst from "../constants/tasks";
import TaskItem from "./TaskItem";

const Tasks = () => {
  const [tasks, setState] = useState(TasksConst);

  const handleTaskCheckboxClick = (taskId) => {
    const newTask = tasks.map((task) => {
      if (task.id != taskId) {
        return task;
      }
      if (task.status == "not_started") {
        return { ...task, status: "in_progress" };
      }
      if (task.status == "in_progress") {
        return { ...task, status: "done" };
      }
      if (task.status == "done") {
        return { ...task, status: "not_started" };
      }
    });
    setState(newTask);
  };

  const morningTasks = tasks.filter((task) => task.time == "morning");
  const afternoonTasks = tasks.filter((task) => task.time == "afternoon");
  const eveningTasks = tasks.filter((task) => task.time == "evening");

  return (
    <div className="w-full px-8 py-16">
      <div className="flex  w-full justify-between">
        <div className="font-poppins">
          <span className="text-xs font-semibold text-[#00ADB5]">
            Minhas tarefas
          </span>
          <h2 className="text-xl font-semibold">Minhas tarefas</h2>
        </div>

        <div className="flex items-center gap-3">
          <Button variant="ghost">
            Limpar Tarefas
            <TrashIcon />
          </Button>

          <Button variant="primary">
            Nova Tarefa
            <AddIcon />
          </Button>
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
                handleTaskCheckboxClick={handleTaskCheckboxClick}
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
                handleTaskCheckboxClick={handleTaskCheckboxClick}
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
                handleTaskCheckboxClick={handleTaskCheckboxClick}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Tasks;
