import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import generateToken from "../utils/generateToken.js";
export const signup = async (req, res, next) => {
  try {
    const { fullName, username, password } = req.body;
    const user = await User.findOne({ username });
    if (user) {
      throw new Error("User Already Exist.");
    }

    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);
    const newUser = await User.create({
      fullName,
      username,
      password: hashPassword,
    });

    let token;
    if (newUser) {
      token = generateToken(newUser._id, res);
    }
    res.json({ _id: newUser._id, fullName, username, token });
  } catch (error) {
    next(error);
  }
};

export const login = async (req, res, next) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if (!user) {
      throw new Error("User does not exist.");
    }
    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if (!isPasswordCorrect) {
      throw new Error("Invalid Credentials.");
    }

    const token = generateToken(user._id, res);
    res.status(200).json({
      _id: user._id,
      fullName: user.fullName,
      username: user.username,
      token,
    });
  } catch (error) {
    next(error);
  }
};

export const logout = async (req, res, next) => {
  try {
    res.cookie("jwt", "", {
      maxAge: 0,
    });
    res.status(200).json({ message: "Logged out successfully" });
  } catch (error) {
    next(error);
  }
};
