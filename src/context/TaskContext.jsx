import React, { createContext, useContext, useState } from "react";

const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([
    { id: 1, text: "Estudiar React Hooks", done: false },
    { id: 2, text: "Preparar presentación del proyecto", done: true },
    { id: 3, text: "Revisar pendientes del Dashboard", done: false },
  ]);

  const addTask = (task) => {
    setTasks((prev) => [...prev, { id: Date.now(), ...task, done: false }]);
  };

  const deleteTask = (id) => {
    setTasks((prev) => prev.filter((t) => t.id !== id));
  };

  const editTask = (id, newText) => {
    setTasks((prev) =>
      prev.map((t) => (t.id === id ? { ...t, text: newText } : t))
    );
  };

  const toggleTask = (id) => {
    setTasks((prev) =>
      prev.map((t) => (t.id === id ? { ...t, done: !t.done } : t))
    );
  };

  return (
    <TaskContext.Provider
      value={{ tasks, addTask, deleteTask, editTask, toggleTask }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export const useTasks = () => useContext(TaskContext);