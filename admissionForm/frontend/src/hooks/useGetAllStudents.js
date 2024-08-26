import { useEffect, useState } from "react";
import { useStudentContext } from "../context/StudentContext";
import toast from "react-hot-toast";

const useGetAllStudents = () => {
  const [loading, setLoading] = useState(false);
  const { setStudentData } = useStudentContext();
  useEffect(() => {
    const getAllStudents = async () => {
      setLoading(true);
      try {
        const res = await fetch("/api/student/students");
        const data = await res.json();
        if (data.error) {
          throw new Error(data.error);
        }
        // console.log("get all", data);
        setStudentData(data);
      } catch (error) {
        toast.error(error.message);
      } finally {
        setLoading(false);
      }
    };

    getAllStudents();
  }, []);

  return { loading };
};

export default useGetAllStudents;
