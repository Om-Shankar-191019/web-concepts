import React, { useContext, useState } from "react";
import { MdOutlinePending } from "react-icons/md";
import { TiTick } from "react-icons/ti";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import {
  AllTodosContext,
  EditTodoContext,
  OpenModalContext,
} from "../context/todoContext";

const TodoStripe = ({ todo }) => {
  const [isCompleted, setIsCompleted] = useState(false);
  const { allTodos, setAllTodos } = useContext(AllTodosContext);
  const { openModal, setOpenModal } = useContext(OpenModalContext);
  const { setEditTodo } = useContext(EditTodoContext);

  const handleDelete = (todo) => {
    let index = allTodos.indexOf(todo);
    if (index != -1) {
      const newArray = [
        ...allTodos.slice(0, index),
        ...allTodos.slice(index + 1),
      ];
      setAllTodos(newArray);
    }
  };

  const handleEditModal = () => {
    setOpenModal(true);
    setEditTodo(todo);
  };

  // console.log("strip todo: ", todo);
  return (
    <div className="flex items-center justify-between py-2 px-2 my-1 rounded-md bg-green-300 shadow-md">
      <div className="flex items-center gap-2">
        <div
          onClick={() => setIsCompleted((prev) => !prev)}
          className="cursor-pointer"
        >
          {isCompleted ? <TiTick /> : <MdOutlinePending />}{" "}
        </div>
        <p>{todo}</p>
      </div>
      <div className="flex gap-2">
        <FaEdit className="cursor-pointer" onClick={() => handleEditModal()} />
        <MdDelete
          className="cursor-pointer"
          onClick={() => handleDelete(todo)}
        />
      </div>
    </div>
  );
};

export default TodoStripe;
