import User from "../backend/models/User.js";
import connectDB from "./config/db.js";
import dotenv from "dotenv";
import asyncHandler from "express-async-handler";
import users from "./data/users.js";

dotenv.config();
connectDB();

const dataIn = asyncHandler(async () => {
  await User.deleteMany();
  await User.insertMany(users);
  console.log("data imported");
  process.exit();
});

const dataOut = asyncHandler(async () => {
  await User.deleteMany();
  console.log("data removed");
  process.exit();
});

if (process.argv[2] === "-d") {
  dataOut();
} else {
  dataIn();
}
