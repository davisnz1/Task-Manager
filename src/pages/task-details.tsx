import React, { useEffect, useState } from "react";

import Sidebar from "../components/Sidebar";

import TaskInfo from "../components/TaskInfo";

const TaskDetailsPage = () => {
  return (
    <div className="flex w-full">
      <Sidebar />
      <TaskInfo />
    </div>
  );
};

export default TaskDetailsPage;
