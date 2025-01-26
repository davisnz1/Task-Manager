import React, { useEffect, useState } from "react";
import { GlassCup, LayoutList, ListCheck, LoaderIcon } from "../assets/icons";
import { handleTaskStatusChangeHome, fetchTasks } from "../lib/TasksFunctions";
import {
  calculateWaterPercentage,
  getTotalTasks,
  getCompletedTasks,
  getInProgressTasks,
} from "../lib/Functions";
import TaskItem from "./TaskItem";
import axios from "axios";
import WaterItem from "./WaterItem";

const TaskHome = () => {
  const [tasks, setTasks] = useState<any[]>([]);
  const [waterConsumed, setWaterConsumed] = useState<number>(0);
  const totalWaterGoal = 2500;

  useEffect(() => {
    fetchTasks(setTasks);
  }, []);

  const totalTasks = getTotalTasks(tasks);
  const completedTasks = getCompletedTasks(tasks);
  const inProgressTasks = getInProgressTasks(tasks);

  return (
    <div>
      <div className="flex flex-col w-full p-12 font-poppins">
        <div>
          <div>
            <h1 className="text-sm font-semibold text-brand-primary">Início</h1>
            <h1 className="text-2xl font-semibold text-brand-dark-blue">
              Início
            </h1>
          </div>
          <div className="flex gap-[60px] mt-6">
            <div className="flex flex-col rounded-xl bg-brand-white items-center justify-center h-[150px] w-[300px]">
              <div className="flex gap-1 ">
                <LayoutList className="w-9 h-9" />
                <p className="text-4xl font-semibold">{totalTasks}</p>
              </div>
              <h1 className="mt-2">Tarefas Disponíveis</h1>
            </div>
            <div className="flex flex-col rounded-xl bg-brand-white items-center justify-center h-[150px] w-[300px]">
              <div className="flex gap-1 ">
                <ListCheck className="w-9 h-9" />
                <p className="text-4xl font-semibold">{completedTasks}</p>
              </div>
              <h1 className="mt-2">Tarefas Concluídas</h1>
            </div>
            <div className="flex flex-col rounded-xl bg-brand-white items-center justify-center h-[150px] w-[300px]">
              <div className="flex gap-1 ">
                <LoaderIcon className="animate-spin text-brand-primary w-9 h-9" />
                <p className="text-4xl font-semibold">{inProgressTasks}</p>
              </div>
              <h1 className="mt-2">Tarefas em andamento</h1>
            </div>
            <div className="flex flex-col rounded-xl bg-brand-white items-center justify-center h-[150px] w-[300px]">
              <div className="flex gap-2 ">
                <GlassCup className="w-9 h-9" />
                <p className="text-4xl font-semibold">
                  {calculateWaterPercentage(waterConsumed, totalWaterGoal)}%
                </p>
              </div>
              <h1 className="mt-2">Água</h1>
            </div>
          </div>
        </div>
        <div className="flex mt-8 gap-9">
          <div className="w-2/3 h-full bg-brand-white p-6 rounded-xl">
            <div className="flex flex-col gap-2">
              <h1 className="text-3xl font-semibold">Tarefas</h1>
              <p className="text-lg text-brand-light-gray">
                Resumo das tarefas disponiveis
              </p>
            </div>
            {tasks.length > 0 ? (
              tasks.map((task) => (
                <TaskItem
                  key={task.id}
                  type="home"
                  task={task}
                  handleCheckboxClick={(taskId: string) =>
                    handleTaskStatusChangeHome(taskId, tasks, setTasks)
                  }
                  onDeleteSucess={(taskId: string) => {
                    setTasks(tasks.filter((task) => task.id !== taskId));
                  }}
                />
              ))
            ) : (
              <p className="mt-6 text-brand-light-gray">
                Você não possui tarefas.
              </p>
            )}
          </div>
          <div className="bg-brand-white p-6 rounded-xl w-[420px] h-[400px]">
            <div className="flex flex-col gap-1">
              <h1 className="text-2xl font-semibold">Água</h1>
              <p className="text-base text-brand-light-gray">
                Beba sua meta diária de água
              </p>
              <WaterItem onWaterConsumed={setWaterConsumed} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskHome;
