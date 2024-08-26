import React from "react";
import useGetAllStudents from "../hooks/useGetAllStudents";
import { useStudentContext } from "../context/StudentContext";

const Students = () => {
  const { loading } = useGetAllStudents();
  const { studentData: students } = useStudentContext();

  return (
    <div className="max-w-4xl mx-auto mt-10">
      <h2 className="text-2xl font-semibold mb-4">List of Students</h2>
      <div className="overflow-x-auto">
        <table className="table-auto w-full">
          <thead>
            <tr>
              <th className="px-4 py-2">Image</th>
              <th className="px-4 py-2">Full Name</th>
              <th className="px-4 py-2">Email</th>
              <th className="px-4 py-2">Phone Number</th>
              <th className="px-4 py-2">Gender</th>
              <th className="px-4 py-2">Date of Birth</th>
              <th className="px-4 py-2">Address</th>
              <th className="px-4 py-2">State</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student, index) => (
              <tr key={`st--${index}`}>
                <td className="border px-4 py-2">
                  <img
                    src={student.studentImage ? student.studentImage : ""}
                    alt={student.fullName}
                    className="h-10 w-10 rounded-full object-cover"
                  />
                </td>
                <td className="border px-4 py-2">{student.fullName}</td>
                <td className="border px-4 py-2">{student.email}</td>
                <td className="border px-4 py-2">{student.phoneNumber}</td>
                <td className="border px-4 py-2">{student.gender}</td>
                <td className="border px-4 py-2">{student.dateOfBirth}</td>
                <td className="border px-4 py-2">{student.address}</td>
                <td className="border px-4 py-2">{student.state}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Students;
