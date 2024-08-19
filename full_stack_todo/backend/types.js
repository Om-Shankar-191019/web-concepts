const { z } = require("zod");

const createTodo = z.object({
  title: z.string(),
  description: z.string(),
});

const updateTodo = z.object({
  id: z.string(),
});

const userValidate = z.object({
  username: z.string(),
  password: z.string().min(4),
});
module.exports = {
  createTodo,
  updateTodo,
  userValidate,
};
