import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { HomeIcon, TaskIcon } from "../assets/icons";
import SidebarButton from "./SidebarButton";

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="h-screen bg-[#f0f0f0]">
      <div className="pl-8 pr-24 py-6 space-y-4">
        <h1 className="font-poppins text-xl font-semibold text-brand-primary">
          Task Manager
        </h1>
        <p className="font-poppins w-48">
          Um simples{" "}
          <span className="font-poppins text-brand-primary">
            organizador de tarefas
          </span>
        </p>
      </div>
      <div className="font-poppins flex flex-col px-2 gap-2">
        <SidebarButton
          onClick={() => navigate("/")}
          color={location.pathname === "/" ? "selected" : "unselected"}
        >
          <HomeIcon />
          Início
        </SidebarButton>

        {/* Botão Minhas Tarefas */}
        <SidebarButton
          onClick={() => navigate("/task")}
          color={location.pathname === "/task" ? "selected" : "unselected"}
        >
          <TaskIcon />
          Minhas Tarefas
        </SidebarButton>
      </div>
    </div>
  );
};

export default Sidebar;
