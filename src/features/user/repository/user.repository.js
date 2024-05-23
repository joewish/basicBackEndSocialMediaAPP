import mongoose from "mongoose";
import { userSchema } from "../schema/user.schema.js";
const User = mongoose.model("User",userSchema)
// Add User
export const addUser = async (data) => {
  const { name, email, password } = data;
  try {
    const newUser = new User({ name, email, password });
    await newUser.save();
    return newUser;
  } catch (err) {
    throw new Error(err.message);
  }
};

// Confirm Login
export const confirmLogin = async (data) => {
  const { email, password } = data;
  try {
    const user = await User.findOne({ email, password });
    return user;
  } catch (err) {
    throw new Error(err.message);
  }
};

// Get All Users
export const getAllUsers = async () => {
  try {
    const users = await User.find();
    return users;
  } catch (err) {
    throw new Error(err.message);
  }
};
