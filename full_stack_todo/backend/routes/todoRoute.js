const express = require("express");
const {
  createSingleTodo,
  getTodos,
  deleteTodo,
  updateTodoStatus,
} = require("../controllers/todoController");

const router = express.Router();

router.post("/create", createSingleTodo);
router.get("/getTodos", getTodos);
router.delete("/deleteTodo/:todoId", deleteTodo);
router.put("/updateTodoStatus/:todoId", updateTodoStatus);

module.exports = router;
