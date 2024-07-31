import { Toaster } from "sonner";

import Sidebar from "./components/Sidebar.jsx";
import Tasks from "./components/Tasks.jsx";

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
