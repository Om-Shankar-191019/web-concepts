import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <div className="text-center">
          <h1 className="text-2xl sm:text-4xl font-bold mb-8 ">
            Welcome to Student Management System
          </h1>
          <Link
            to="/admission"
            className="inline-block bg-pink-600 text-white py-3 px-6 mb-2 rounded-lg mr-4 hover:bg-blue-600"
          >
            Admission Form
          </Link>
          <Link
            to="/students"
            className="inline-block bg-pink-700 text-white py-3 px-6 rounded-lg hover:bg-green-600"
          >
            List of Students
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
