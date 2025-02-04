import React from "react";

import { Toaster } from "sonner";

import Sidebar from "../components/Sidebar";
import Tasks from "../components/Tasks";

const TasksPage = () => {
  return (
    <div className="flex">
      <Toaster
        toastOptions={{
          style: {
            color: "black",
          },
        }}
      />
      <Sidebar />
      <Tasks />
    </div>
  );
};

export default TasksPage;
