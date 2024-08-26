import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { useAuthContext } from "./context/AuthContext";
import AdmissionForm from "./pages/AdmissionForm";
import Students from "./pages/Students";
import { Toaster } from "react-hot-toast";

const App = () => {
  const { authUser } = useAuthContext();
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={authUser?.token ? <Home /> : <Navigate to="/login" />}
        />
        <Route
          path="/login"
          element={authUser?.token ? <Navigate to="/" /> : <Login />}
        />
        <Route
          path="/signup"
          element={authUser?.token ? <Navigate to="/" /> : <Signup />}
        />
        <Route path="/admission" element={<AdmissionForm />} />
        <Route path="/students" element={<Students />} />
      </Routes>
      <Toaster />
    </>
  );
};

export default App;
