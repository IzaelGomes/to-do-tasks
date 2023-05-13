import { Header } from "./components/Header";
import "./global.css";
import style from "./App.module.css";
import { Task } from "./components/Task";
import { PlusCircle } from "@phosphor-icons/react";
import { FormEvent, useState } from "react";
import { v4 as uuid } from "uuid";

function App() {
  const tasksInital: Tasks[] = [];

  type Tasks = {
    id: string;
    content: string;
    isCompleted: boolean;
  };

  const [tasksList, setTasksList] = useState<Tasks[]>(tasksInital);
  const [newTask, setNewTask] = useState("");

  function handleAddNewTask(event: FormEvent) {
    event.preventDefault();

    setTasksList([
      ...tasksList,
      {
        id: uuid(),
        content: newTask,
        isCompleted: false,
      },
    ]);

    setNewTask((event.target.task.value = ""));
  }

  function newTaks(event: React.ChangeEvent<HTMLInputElement>) {
    setNewTask(event.target.value);
  }

  function updateCheckTask(id: string, checkTask: boolean) {
    const updatedTaks = tasksList.map((task) => {
      if (task.id === id) {
        return { ...task, isCompleted: !checkTask };
      }
      return task;
    });

    setTasksList(updatedTaks);
  }

  function deleteTask(id: string) {
    const newTaskWithoutDeletedOne = tasksList.filter((task) => task.id != id);

    setTasksList(newTaskWithoutDeletedOne);
  }

  function countAllTasks() {
    const allTasks = tasksList.filter((task) => task.id).length;

    return allTasks;
  }

  function countAllTasksCompleted() {
    const allTasks = tasksList.filter((task) => task.isCompleted).length;

    return allTasks;
  }

  return (
    <>
      <Header />
      <div className={style.wrapper}>
        <form onSubmit={handleAddNewTask}>
          <div className={style.wrapperForm}>
            <input
              type="text"
              name="task"
              required
              value={newTask.trimStart()}
              placeholder="Adicione uma nova tarefa"
              onChange={(event) => newTaks(event)}
            />
            <button type="submit" value="Criar">
              <span>
                Criar <PlusCircle size={15} cursor="pointer" />
              </span>
            </button>
          </div>
        </form>

        <div className={style.taskBox}>
          <header>
            <span>
              Tarefas criadas{" "}
              <div className={style.taskCount}>{countAllTasks()}</div>
            </span>
            <span>
              Concluídas{" "}
              <div className={style.taskCount}>{countAllTasksCompleted()}</div>
            </span>
          </header>

          {tasksList.map((task) => {
            return (
              <Task
                key={task.id}
                id={task.id}
                content={task.content}
                isCompleted={task.isCompleted}
                OnupdateCheckTask={updateCheckTask}
                onDeletedOne={deleteTask}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;
