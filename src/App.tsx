import React from "react";

import { Toaster } from "sonner";

import Sidebar from "./components/Sidebar";
import TaskHome from "./components/TaskHome";

function App() {
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
      <TaskHome />
    </div>
  );
}

export default App;
