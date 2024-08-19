import "./AddTaskDialog.css";

import PropTypes from "prop-types";
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
  const [errors, setErrors] = useState([]);

  const nodeRef = useRef();

  useEffect(() => {
    if (!isOpen) {
      setTitle("");
      setTime("morning");
      setDescription("");
    }
  }, [isOpen]);

  const handleSaveClick = () => {
    const newErrors = [];

    if (!title.trim()) {
      newErrors.push({
        inputName: "title",
        message: "O Título é obrigatório",
      });
    }

    if (!time.trim()) {
      newErrors.push({
        inputName: "time",
        message: "O tempo é obrigatório",
      });
    }

    if (!description.trim()) {
      newErrors.push({
        inputName: "description",
        message: "A descrição é obrigatória",
      });
    }

    setErrors(newErrors);

    if (newErrors.length > 0) {
      return;
    }

    handleSubmit({
      id: v4(),
      title,
      description,
      time,
      status: "not_started",
    });

    handleClose();
  };

  const titleError = errors.find((error) => error.inputName == "title");
  const descriptionError = errors.find(
    (error) => error.inputName == "description"
  );

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

              <div className="flex flex-col gap-4">
                <Input
                  label="Titulo"
                  placeholder="Título da tarefa"
                  value={title}
                  onChange={(event) => setTitle(event.target.value)}
                  error={titleError}
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
                  error={descriptionError}
                />
              </div>

              <div className="flex mt-4 gap-3 justify-center font-semibold flex-row">
                <Button
                  className="bg-[#EEEEEE] text-black"
                  size="big"
                  color="ghost"
                  onClick={handleClose}
                >
                  Cancelar
                </Button>
                <Button
                  size="big"
                  color="primary"
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

AddTaskDialog.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default AddTaskDialog;
