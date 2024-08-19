const mongoose = require("mongoose");

const TodoSchema = new mongoose.Schema({
  title: String,
  description: {
    type: String,
    default: "",
  },
  status: { type: Boolean, default: false },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

const Todo = mongoose.model("Todo", TodoSchema);

module.exports = Todo;
