import "./AddTaskDialog.css";
import React, { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { CSSTransition } from "react-transition-group";
import { v4 } from "uuid";
import { useForm, Controller } from "react-hook-form";
import { AddTaskDialogProps, Task } from "../lib/Types";
import Button from "./Button";
import DialogSelect from "./DialogSelect";
import Input from "./Input";

const AddTaskDialog = ({
  isOpen,
  handleClose,
  handleSubmit,
}: AddTaskDialogProps) => {
  const nodeRef = useRef<HTMLDivElement>(null);

  const {
    register,
    handleSubmit: formSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm<Task>({
    defaultValues: {
      title: "",
      description: "",
      time: "morning",
    },
  });

  useEffect(() => {
    if (!isOpen) {
      reset();
    }
  }, [isOpen, reset]);

  const onSubmit = (data: Task) => {
    handleSubmit({
      ...data,
      id: v4(),
      status: "not_started",
    });
    handleClose();
  };

  return (
    <CSSTransition
      nodeRef={nodeRef}
      in={isOpen}
      timeout={500}
      classNames="add-task-dialog"
      unmountOnExit
    >
      <div>
        {createPortal(
          <div
            ref={nodeRef}
            className="fixed backdrop-blur-sm top-0 bottom-0 h-screen w-screen flex items-center justify-center"
          >
            <div className="shadow-lg p-5 font-poppins bg-white rounded-xl">
              <div className="p-5 text-center bg-white">
                <h1 className="text-2xl font-bold ">Nova Tarefa</h1>
                <p className="text-xs text-[brand-text-gray] mt-1">
                  Insira as informações abaixo
                </p>
              </div>

              <form
                onSubmit={formSubmit(onSubmit)}
                className="flex flex-col gap-4"
              >
                <Input
                  label="Título"
                  placeholder="Título da tarefa"
                  error={errors.title?.message}
                  {...register("title", {
                    required: "O Título é obrigatório",
                  })}
                />

                <Controller
                  control={control}
                  name="time"
                  rules={{ required: "O tempo é obrigatório" }}
                  render={({ field }) => (
                    <DialogSelect
                      {...field}
                      onChange={(e) => field.onChange(e.target.value)}
                    />
                  )}
                />

                <Input
                  label="Descrição"
                  placeholder="Descreva a Tarefa"
                  error={errors.description?.message}
                  {...register("description", {
                    required: "A descrição é obrigatória",
                  })}
                />

                <div className="flex mt-4 gap-3 justify-center font-semibold flex-row">
                  <Button
                    className="bg-[#EEEEEE] text-black"
                    size="big"
                    color="ghost"
                    onClick={handleClose}
                  >
                    Cancelar
                  </Button>
                  <Button size="big" color="primary" type="submit">
                    Salvar
                  </Button>
                </div>
              </form>
            </div>
          </div>,
          document.body
        )}
      </div>
    </CSSTransition>
  );
};

export default AddTaskDialog;
