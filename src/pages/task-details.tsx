import React from "react";

import Sidebar from "../components/Sidebar";

import TaskInfo from "../components/TaskInfo";
import { Toaster } from "sonner";

const TaskDetailsPage = () => {
  return (
    <div className="flex w-full">
      <Toaster
        toastOptions={{
          style: {
            color: "black",
          },
        }}
      />
      <Sidebar />
      <TaskInfo />
    </div>
  );
};

export default TaskDetailsPage;
