import React, { forwardRef, useEffect, useImperativeHandle } from "react";
import { useForm, Controller } from "react-hook-form";
import DialogSelect from "./DialogSelect";
import InputAddTask from "./Input";
import {
  FormData,
  TaskInfoDetailsHandle,
  TaskInfoDetailsProps,
  Task,
} from "../lib/Types";

const TaskInfoDetails = forwardRef<TaskInfoDetailsHandle, TaskInfoDetailsProps>(
  ({ task, onSave }, ref) => {
    const { register, handleSubmit, setValue, control, getValues } =
      useForm<FormData>({
        defaultValues: {
          title: task.title,
          description: task.description,
          time: task.time,
        },
      });

    useEffect(() => {
      setValue("title", task.title);
      setValue("description", task.description);
      setValue("time", task.time);
    }, [task, setValue]);

    const getUpdatedTask = (): Task => {
      const data = getValues();
      return {
        ...task,
        title: data.title,
        description: data.description,
        time: data.time,
      };
    };

    useImperativeHandle(ref, () => ({
      getUpdatedTask,
    }));

    const onSubmit = (data: FormData) => {
      const updatedTask: Task = {
        ...task,
        title: data.title,
        description: data.description,
        time: data.time,
      };
      onSave(updatedTask);
    };

    return (
      <div className="flex flex-col rounded-lg p-4 bg-brand-primary-info w-full">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <InputAddTask
            label="Título"
            placeholder="Título da tarefa"
            variant="info"
            {...register("title")}
          />
          <Controller
            name="time"
            control={control}
            render={({ field }) => (
              <DialogSelect {...field} variant="secondary" inputSize="small" />
            )}
          />
          <InputAddTask
            label="Descrição"
            placeholder="Descrição"
            variant="info"
            {...register("description")}
          />
        </form>
      </div>
    );
  }
);

export default TaskInfoDetails;
