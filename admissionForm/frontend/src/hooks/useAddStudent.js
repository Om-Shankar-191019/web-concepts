import { useState } from "react";
import toast from "react-hot-toast";

const useAddStudent = () => {
  const [loading, setLoading] = useState(false);

  const addStudent = async (studentData) => {
    setLoading(true);
    try {
      const res = await fetch(`/api/student/addStudent`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(studentData),
      });

      const data = await res.json();
      if (data.error) {
        throw new Error(data.error);
      }
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { loading, addStudent };
};

export default useAddStudent;
