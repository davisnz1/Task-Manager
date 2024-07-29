import Sidebar from "./components/Sidebar.jsx";
import Tasks from "./components/Tasks.jsx";

function App() {
  return (
    <div className="flex gap-9">
      <Sidebar />
      <Tasks />
    </div>
  );
}

export default App;
