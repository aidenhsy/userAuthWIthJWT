import asyncHandler from "express-async-handler";
import generateToken from "../util/generateToken.js";
import User from "../models/User.js";

export const login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      email: user.email,
      token: generateToken(user._id),
    });
  } else {
    res.status(401);
    throw new Error("Invalid email or password");
  }
});

export const register = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const existUser = await User.findOne({ email });
  if (existUser) {
    res.status(403);
    throw new Error("User already exists");
  }
  const user = await User.create({ email, password });
  if (user) {
    res.status(201).json({
      _id: user._id,
      email: user.email,
      token: generateToken(user_id),
    });
  } else {
    res.status(409);
    throw new Error("Something went wrong, user cannot be created");
  }
});

export const getUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);
  if (user) {
    res.json({
      _id: user._id,
      email: user.email,
    });
  } else {
    res.status("401");
    throw new Error("User not found");
  }
});

export const updateUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);
  if (user) {
    user.email = req.body.email;
    if (req.body.password) {
      user.password = req.body.password;
    }
    const updatedUser = await user.save();

    res.json({
      _id: updatedUser._id,
      email: updatedUser.email,
      password: updatedUser.password,
      token: generateToken(updatedUser._id),
    });
  } else {
    res.status("401");
    throw new Error("User not found");
  }
});
