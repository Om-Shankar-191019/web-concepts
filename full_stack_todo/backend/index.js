const express = require("express");
const connectDB = require("./db/connect");
require("dotenv").config();
const app = express();
const userRouter = require("./routes/userRoute");
const todoRouter = require("./routes/todoRoute");
const verifyToken = require("./middlewares/authMiddleware");
app.use(express.json());

app.use("/user", userRouter);
app.use("/todo", verifyToken, todoRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  connectDB(process.env.MONGO_URI);
  console.log(`server is running on port ${PORT}...`);
});
