import { createContext, useContext, useState } from "react";

export const StudentContext = createContext();

export const useStudentContext = () => {
  return useContext(StudentContext);
};

export const StudentContextProvider = ({ children }) => {
  const [studentData, setStudentData] = useState([]);
  return (
    <StudentContext.Provider value={{ studentData, setStudentData }}>
      {children}
    </StudentContext.Provider>
  );
};
