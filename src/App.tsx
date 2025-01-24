import React from "react";

import { Toaster } from "sonner";

import Sidebar from "./components/Sidebar";
import Tasks from "./components/Tasks";

function App() {
  return (
    <div className="flex gap-9">
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
}

export default App;
