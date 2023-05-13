import { Trash, Circle, CheckCircle } from "@phosphor-icons/react";
import style from "./Task.module.css";
import { useState } from "react";

export interface taskProps {
  id: string;
  content: string;
  isCompleted: boolean;
  OnupdateCheckTask(id: string, checkTask: boolean): void;
  onDeletedOne(id: string): void;
}

const Task = ({
  content,
  isCompleted,
  id,
  OnupdateCheckTask,
  onDeletedOne,
}: taskProps) => {
  const [checkTask, setCheckTask] = useState(false);

  function handleCheckTask() {
    setCheckTask(!checkTask);

    OnupdateCheckTask(id, checkTask);
  }

  function handleDeleteTask() {
    onDeletedOne(id);
  }

  return (
    <div
      className={`${
        checkTask ? style.taksWrapperChecked : style.taksWrapper
      }  `}
    >
      {isCompleted ? (
        <CheckCircle
          weight="fill"
          color="#8284fa"
          size={24}
          cursor="pointer"
          onClick={handleCheckTask}
        />
      ) : (
        <Circle
          color="#4EA8DE"
          size={24}
          cursor="pointer"
          onClick={handleCheckTask}
        />
      )}
      <p className={`${checkTask ? style.checked : ""}`}>{content}</p>
      <div className={style.trash}>
        <Trash
          className={style.trashIcon}
          color="white"
          size={24}
          onClick={handleDeleteTask}
          cursor="pointer"
        />
      </div>
    </div>
  );
};

export { Task };
