import React, { useState } from "react";
import InputField from "./components/InputField";
import TodoStripe from "./components/TodoStripe";
import EditModal from "./components/EditModal";

const App = () => {
  const [allTodos, setAllTodos] = useState([]);
  const [todo, setTodo] = useState("");
  const [editTodo, setEditTodo] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const handleAllTodos = (todo) => {
    setAllTodos((prev) => [...prev, todo]);
    setTodo("");
  };

  // console.log("app todo ; ", todo);
  return (
    <div className="flex justify-center min-w-full min-h-screen bg-green-200">
      <div className="flex flex-col h-auto w-96  ">
        <InputField
          handleAllTodos={handleAllTodos}
          todo={todo}
          setTodo={setTodo}
        />
        {[...allTodos].reverse().map((item, index) => (
          <TodoStripe
            key={item + index}
            todo={item}
            allTodos={allTodos}
            setAllTodos={setAllTodos}
            setOpenModal={setOpenModal}
            setEditTodo={setEditTodo}
          />
        ))}

        {openModal && (
          <EditModal
            editTodo={editTodo}
            setEditTodo={setEditTodo}
            allTodos={allTodos}
            setAllTodos={setAllTodos}
            setOpenModal={setOpenModal}
          />
        )}
      </div>
    </div>
  );
};

export default App;
