import React, { useContext, useState } from "react";
import { AllTodosContext } from "../context/todoContext";

const InputField = () => {
  const [todo, setTodo] = useState("");
  const { allTodos, setAllTodos } = useContext(AllTodosContext);

  const addTodoToContext = (task) => {
    setAllTodos((prev) => [...prev, task]);
    setTodo("");
  };

  return (
    <div className="flex justify-center mt-12 mb-4 ">
      <input
        className=" border-l-2 border-t-2 border-b-2 border-black rounded-l py-2 px-2 outline-none w-screen "
        type="text"
        placeholder="add task ..."
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button
        className="border-r-2 border-t-2 border-b-2 border-black py-2 px-3 rounded-r bg-green-600 text-white font-bold"
        onClick={() => addTodoToContext(todo)}
      >
        Add
      </button>
    </div>
  );
};

export default InputField;
