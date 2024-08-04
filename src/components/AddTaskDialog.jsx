import "./AddTaskDialog.css";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { CSSTransition } from "react-transition-group";
import { v4 } from "uuid";

import Button from "./Button";
import DialogSelect from "./DialogSelect";
import Input from "./Input";

const AddTaskDialog = ({ isOpen, handleClose, handleSubmit }) => {
  const [title, setTitle] = useState();
  const [time, setTime] = useState("morning");
  const [description, setDescription] = useState();
  const nodeRef = useRef();

  useEffect(() => {
    if (!isOpen) {
      setTitle("");
      setTime("");
      setDescription("");
    }
  }, [isOpen]);

  const handleSaveClick = () => {
    handleSubmit({
      id: v4(),
      title,
      description,
      time,
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
                <p className="text-xs text-[#9A9C9F] mt-1">
                  Insira as informações abaixo
                </p>
              </div>

              <div className="flex flex-col gap-4">
                <Input
                  label="Titulo"
                  placeholder="Título da tarefa"
                  value={title}
                  onChange={(event) => setTitle(event.target.value)}
                />

                <DialogSelect
                  value={time}
                  onChange={(event) => setTime(event.target.value)}
                />

                <Input
                  label="Descrição"
                  placeholder="Descreva a Tarefa"
                  value={description}
                  onChange={(event) => setDescription(event.target.value)}
                />
              </div>

              <div className="flex mt-4 gap-3 justify-center font-semibold flex-row">
                <Button
                  className="bg-[#EEEEEE] text-black"
                  size="big"
                  variant="ghost"
                  onClick={handleClose}
                >
                  Cancelar
                </Button>
                <Button
                  size="big"
                  variant="primary"
                  onClick={() => handleSaveClick()}
                >
                  Salvar
                </Button>
              </div>
            </div>
          </div>,
          document.body
        )}
      </div>
    </CSSTransition>
  );
};

export default AddTaskDialog;
