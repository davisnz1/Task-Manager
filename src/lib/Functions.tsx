import { useNavigate } from "react-router-dom";

export const calculateWaterPercentage = (
  waterConsumed: number,
  totalWaterGoal: number
): number => {
  return Math.min((waterConsumed / totalWaterGoal) * 100, 100);
};

export const getTotalTasks = (tasks: any[]) => {
  return tasks.length;
};

export const getCompletedTasks = (tasks: any[]) => {
  return tasks.filter((task) => task.status === "done").length;
};

export const getInProgressTasks = (tasks: any[]) => {
  return tasks.filter((task) => task.status === "in_progress").length;
};

export const handleBackClick = () => {
  const navigate = useNavigate();
  navigate(-1);
};

export const handleWaterChange = (
  amount: number,
  setWaterConsumed: React.Dispatch<React.SetStateAction<number>>,
  onWaterConsumed: (newWaterConsumed: number) => void
) => {
  setWaterConsumed((prevWaterConsumed) => {
    const newWaterConsumed = prevWaterConsumed + amount;
    onWaterConsumed(newWaterConsumed);
    return newWaterConsumed;
  });
};

export const getStatusClasses = (waterConsumed: number, target: number) => {
  if (waterConsumed >= target) {
    return "bg-brand-primary text-brand-primary";
  }
  return "bg-[#35383E0D] bg-opacity-10 text-dark-blue";
};

export const formatWaterConsumed = (waterConsumed: number) => {
  if (waterConsumed == 1000) {
    const liters = waterConsumed / 1000;
    return `${liters} Litro`;
  }
  if (waterConsumed >= 1001) {
    const liters = waterConsumed / 1000;
    return `${liters} Litros`;
  }
  return `${waterConsumed} ml`;
};
