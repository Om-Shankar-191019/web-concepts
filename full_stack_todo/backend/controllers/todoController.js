const Todo = require("../models/todoModel");
const { createTodo, updateTodo } = require("../types");

async function createSingleTodo(req, res) {
  try {
    const { title, description } = req.body;
    const validate = createTodo.safeParse({ title, description });
    if (!validate.success) {
      return res.status(411).json({ message: "You sent wrong input." });
    }
    const { userId } = req.user;
    const todo = await Todo.create({ title, description, createdBy: userId });
    res.status(200).json({ message: "todo created" });
  } catch (error) {
    res.status(400).json({ err: error.message });
  }
}

async function getTodos(req, res) {
  try {
    const { userId } = req.user;
    const todos = await Todo.find({ createdBy: userId });
    res.status(200).json({ message: "success", todos });
  } catch (error) {
    res.status(400).json({ err: error.message });
  }
}

async function deleteTodo(req, res) {
  try {
    const { todoId } = req.params;
    const todo = await Todo.findByIdAndDelete(todoId);
    res.status(200).json({ message: "delete successful" });
  } catch (error) {
    res.status(400).json({ err: error.message });
  }
}

async function updateTodoStatus(req, res) {
  try {
    const { todoId } = req.params;
    const validateId = updateTodo.safeParse({ id: todoId });
    if (!validateId.success) {
      return res.status(411).json({ message: "wrong todoId" });
    }
    const todo = await Todo.findByIdAndUpdate(todoId, { status: true });
    console.log(todo);
    res.status(200).json({ message: "update successful" });
  } catch (error) {
    res.status(400).json({ err: error.message });
  }
}

module.exports = {
  createSingleTodo,
  getTodos,
  deleteTodo,
  updateTodoStatus,
};
