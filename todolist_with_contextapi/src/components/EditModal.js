import React, { useContext, useEffect } from "react";
import {
  AllTodosContext,
  EditTodoContext,
  OpenModalContext,
} from "../context/todoContext";

let oldEditTodo = "";
const EditModal = ({}) => {
  const { setOpenModal } = useContext(OpenModalContext);
  const { allTodos, setAllTodos } = useContext(AllTodosContext);
  const { editTodo, setEditTodo } = useContext(EditTodoContext);
  useEffect(() => {
    oldEditTodo = editTodo;
  }, []);

  const handleEdit = () => {
    let index = allTodos.indexOf(oldEditTodo);
    if (index != -1) {
      const newArray = [
        ...allTodos.slice(0, index),
        editTodo,
        ...allTodos.slice(index + 1),
      ];
      setAllTodos(newArray);
    }
    setOpenModal(false);
  };
  return (
    <div className="absolute top-12  left-50  w-96 ">
      <div className=" flex justify-center">
        <input
          className=" border-l-2 border-t-2 border-b-2 border-black rounded-l py-2 px-2 outline-none w-full "
          type="text"
          placeholder="Edit task ..........."
          value={editTodo}
          onChange={(e) => setEditTodo(e.target.value)}
        />
        <button
          className=" border-t-2 border-b-2 border-black py-2 px-3  bg-green-600 text-white font-bold "
          onClick={() => handleEdit()}
        >
          Submit
        </button>
        <button
          className="border-r-2 border-t-2 border-b-2 border-black py-2 px-3 rounded-r bg-red-600 text-white font-bold "
          onClick={() => setOpenModal(false)}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default EditModal;
