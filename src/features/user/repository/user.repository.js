import mongoose from "mongoose";
import { userSchema } from "../schema/user.schema.js";
import {userProfile} from "../schema/userProfile.schema.js";
import { hashPassword } from "../../../utils/hashPassword.js";
const User = mongoose.model("User",userSchema)
const UserProfile = mongoose.model("UserProfile",userProfile)
// Add User
export const addUser = async (data) => {
  const { name, email, password,gender,avatar= "defaultRandomAvatar" } = data;
  try {
    const newUser = new User({ name:name, email:email, password:await hashPassword(password),gender:gender,avatar:avatar});
    const doc=  await newUser.save();
    await createNewProfile(doc)
    return doc
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
      return user;
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
    return user
  }catch(err){
    throw new Error(err);
  }
}

export const createNewProfile = async (data)=>{
  // const {userId,name,gender,avatar="defaultRandomAvatar"}=data
  try{
    const newProfileCreation = new UserProfile({userId:data._id,name:data.name,gender:data.gender,avatar:data.avatar})
    const doc = await newProfileCreation.save()
    console.log("Profile created successfully")
  }catch(err){
    throw new Error(err)
  }
}

export const findProfileById = async(userId)=>{
  try{
    const result = await UserProfile.findOne({userId: userId})
    return result
  }catch(err){
    throw new Error(err)
  }
}

export const getAllProfileDetails = async()=>{
  try{
    const result = await UserProfile.find({})
    return result
  }catch(err){
    throw new Error(err)
  }
}

export const updateUserProfile = async(userId,data)=>{
  try{
    const profileUpdate = await UserProfile.findByIdAndUpdate({userId:userId},{

    },{})
    return profileUpdate
  }catch(e){
    throw new Error(e)
  }
}