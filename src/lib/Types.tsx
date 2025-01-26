import { ButtonHTMLAttributes, ReactNode, SelectHTMLAttributes } from "react";

export interface Task {
  id: string;
  title: string;
  description: string;
  status: "not_started" | "in_progress" | "done";
  time: "morning" | "afternoon" | "evening";
}

export interface WaterItemProps {
  onWaterConsumed: (consumed: number) => void;
}

export interface TasksSeparatorProps {
  title: string;
  icon?: ReactNode;
}

export interface TaskItemProps {
  task: Task;
  onDeleteSucess: (taskId: string) => void;
  type: "home" | "all";
  handleCheckboxClick: (taskId: string) => void;
}

export interface TaskInfoDetailsProps {
  task: Task;
  onSave: (updatedTask: Task) => void;
}

export interface FormData {
  title: string;
  description: string;
  time: "morning" | "afternoon" | "evening";
}

export interface TaskInfoDetailsHandle {
  getUpdatedTask: () => Task;
}

export interface SidebarButtonProps {
  children: ReactNode;
  onClick: () => void;
  color: "selected" | "unselected";
}

export interface InputLabelProps
  extends React.LabelHTMLAttributes<HTMLLabelElement> {
  children: React.ReactNode;
  textSize?: string;
  variant?: "add" | "info" | "tertiary";
}

export interface InputTaskProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string | { message: string };
  variant?: Variant;
}
export type Variant = "add" | "info" | "tertiary";

export type VariantSelect = "default" | "primary" | "secondary";
export type InputSize = "small" | "medium" | "large";

export interface DialogSelectProps
  extends Omit<SelectHTMLAttributes<HTMLSelectElement>, "size"> {
  variant?: VariantSelect;
  inputSize?: InputSize;
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  size?: "small" | "big" | "smallInfo";
  color?: "primary" | "ghost" | "delete" | "ghostInfo";
  className?: string;
}

export interface AddTaskDialogProps {
  isOpen: boolean;
  handleClose: () => void;
  handleSubmit: (task: Task) => Promise<void>;
}
