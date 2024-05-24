import mongoose from "mongoose";
import { userSchema } from "../schema/user.schema.js";
const User = mongoose.model("User",userSchema)
// Add User
export const addUser = async (data) => {
  const { name, email, password,gender } = data;
  try {
    const newUser = new User({ name, email, password,gender });
    return await newUser.save();
  } catch (err) {
    throw new Error(err);
  }
};

// Confirm Login
export const confirmLogin = async (data) => {
  const { email, password } = data;
  try {
    const user = await User.findOne({ email:email});
    if(user.email === email&& user.password === password) {
      return true;
    }else{
      return false;
    }
  } catch (err) {
    throw new Error(err);
  }
};

// Get All Users
export const getAllUsers = async () => {
  try {
    const users = await User.find();
    return users;
  } catch (err) {
    throw new Error(err);
  }
};

export const findUserByRequestId= async (userId) => {
  try{
    const user = await User.findOne({userId:userId});
    return 
  }catch(err){
    throw new Error(err);
  }
}