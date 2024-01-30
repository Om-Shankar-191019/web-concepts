import React, { useContext, useState } from "react";
import InputField from "../components/InputField";
import { AllTodosContext, OpenModalContext } from "../context/todoContext";
import TodoStripe from "../components/TodoStripe";
import EditModal from "../components/EditModal";

const Home = () => {
  const { allTodos } = useContext(AllTodosContext);
  const { openModal } = useContext(OpenModalContext);
  return (
    <div className="flex justify-center min-w-full min-h-screen bg-green-200">
      <div className="flex flex-col h-auto w-96  ">
        <InputField />
        {[...allTodos].reverse().map((item, index) => (
          <TodoStripe key={item + index} todo={item} />
        ))}

        {openModal && <EditModal />}
      </div>
    </div>
  );
};

export default Home;
