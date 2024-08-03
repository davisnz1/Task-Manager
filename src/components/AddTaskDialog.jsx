import "./AddTaskDialog.css";

import { useRef } from "react";
import { createPortal } from "react-dom";
import { CSSTransition } from "react-transition-group";

import Button from "./Button";
import Input from "./Input";

const AddTaskDialog = ({ isOpen, handleClose }) => {
  const nodeRef = useRef();

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
                <Input label="Titulo" placeholder="Título da tarefa" />
                <Input label="Horário" placeholder="Horário" />
                <Input label="Descrição" placeholder="Descreva a Tarefa" />
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
                <Button size="big" variant="primary">
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
