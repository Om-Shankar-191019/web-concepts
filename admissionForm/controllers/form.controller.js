import Student from "../models/student.model.js";

export const getStudents = async (req, res, next) => {
  try {
    const students = await Student.find({}).select("-password");
    res.status(200).json(students);
  } catch (error) {
    next(error);
  }
};

export const addStudent = async (req, res, next) => {
  try {
    const student = await Student.create(req.body);
    res.status(200).json(student);
  } catch (error) {
    next(error);
  }
};
