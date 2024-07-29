import SidebarButton from "./SidebarButton";
import HomeIcon from "../assets/icons/home.svg?react";
import TaskIcon from "../assets/icons/tasks.svg?react";

const Sidebar = () => {
  return (
    <div className="h-screen bg-[#f4f3f3]">
      <div className="pl-8 pr-24  py-6 space-y-4">
        <h1 className="font-poppins text-xl font-semibold text-[#00ADB5]">
          Task Manager
        </h1>
        <p className="font-poppins w-48">
          Um simples{" "}
          <span className="font-poppins text-[#00ADB5]">
            {" "}
            organizador de tarefas
          </span>
        </p>
      </div>
      <div className="font-poppins flex flex-col px-2 gap-2">
        <SidebarButton variant="unselected">
          <HomeIcon />
          Início
        </SidebarButton>

        <SidebarButton variant="selected">
          <TaskIcon />
          Minhas Tarefas
        </SidebarButton>
      </div>
    </div>
  );
};

export default Sidebar;
