import { HomeIcon, TaskIcon } from "../assets/icons";
import SidebarButton from "./SidebarButton";

const Sidebar = () => {
  return (
    <div className="h-screen bg-[#f4f3f3]">
      <div className="pl-8 pr-24  py-6 space-y-4">
        <h1 className="font-poppins text-xl font-semibold text-brand-primary">
          Task Manager
        </h1>
        <p className="font-poppins w-48">
          Um simples{" "}
          <span className="font-poppins text-brand-primary">
            {" "}
            organizador de tarefas
          </span>
        </p>
      </div>
      <div className="font-poppins flex flex-col px-2 gap-2">
        <SidebarButton color="unselected">
          <HomeIcon />
          Início
        </SidebarButton>

        <SidebarButton color="selected">
          <TaskIcon />
          Minhas Tarefas
        </SidebarButton>
      </div>
    </div>
  );
};

export default Sidebar;
