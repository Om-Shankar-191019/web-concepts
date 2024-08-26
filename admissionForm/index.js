import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import cors from "cors";
import path from "path";
dotenv.config();
import authRoutes from "./routes/auth.routes.js";
import studentRoutes from "./routes/student.routes.js";
import errorHandler from "./middleware/errorHandler.js";
const app = express();
const port = process.env.PORT || 8000;

app.use(express.json());
app.use(cookieParser());
app.use(cors());

const __dirname = path.resolve();
// routes

app.use("/api/auth", authRoutes);
app.use("/api/student", studentRoutes);
app.use(errorHandler);

app.use(express.static(path.join(__dirname, "/frontend/dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
});

const start = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    app.listen(port, () => console.log(`server is running on port ${port}...`));
  } catch (error) {
    console.log(error);
  }
};

start();
