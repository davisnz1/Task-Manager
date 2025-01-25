import React from "react";
import DialogSelect from "./DialogSelect";
import InputAddTask from "./Input";

interface Task {
  id: string;
  title: string;
  description: string;
  status: string;
  time: string;
}

interface TaskInfoDetailsProps {
  task: Task;
}

const TaskInfoDetails: React.FC<TaskInfoDetailsProps> = ({ task }) => {
  return (
    <div className="flex flex-col rounded-lg p-4 bg-brand-primary-info w-full">
      <div className="mt-2 space-y-6">
        <InputAddTask
          label="Título"
          placeholder="Título da tarefa"
          value={task.title}
          variant="info"
        />
        <DialogSelect variant="secondary" inputSize="small" />
        <InputAddTask
          label="Descrição"
          placeholder="Descrição"
          value={task.description}
          variant="info"
        />
      </div>
    </div>
  );
};

export default TaskInfoDetails;
