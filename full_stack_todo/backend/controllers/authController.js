const { userValidate } = require("../types");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

async function signup(req, res) {
  try {
    const { username, password } = req.body;
    const validateUserInput = userValidate.safeParse({ username, password });
    if (!validateUserInput.success) {
      return res.status(411).json({ message: "You sent the wrong input." });
    }

    const user = await User.create({ username, password });
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET);

    res.status(200).json({ message: "User created successfully", token });
  } catch (error) {
    res.status(400).json({ err: error.message });
  }
}

async function login(req, res) {
  try {
    const { username, password } = req.body;
    const validateUserInput = userValidate.safeParse({ username, password });
    if (!validateUserInput.success) {
      return res.status(411).json({ message: "You sent the wrong input." });
    }

    const user = await User.findOne({ username, password });
    if (!user) {
      return res.status(411).json({ message: "User not found." });
    }
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET);

    res.status(200).json({ message: "User logged in  successfully", token });
  } catch (error) {
    res.status(400).json({ err: error.message });
  }
}

module.exports = {
  signup,
  login,
};
