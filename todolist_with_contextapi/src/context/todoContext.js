import { createContext, useState } from "react";

export const AllTodosContext = createContext();
export const OpenModalContext = createContext();
export const EditTodoContext = createContext();

export const TodoContextProvider = ({ children }) => {
  const [allTodos, setAllTodos] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [editTodo, setEditTodo] = useState("");
  return (
    <AllTodosContext.Provider value={{ allTodos, setAllTodos }}>
      <OpenModalContext.Provider value={{ openModal, setOpenModal }}>
        <EditTodoContext.Provider value={{ editTodo, setEditTodo }}>
          {children}
        </EditTodoContext.Provider>
      </OpenModalContext.Provider>
    </AllTodosContext.Provider>
  );
};
