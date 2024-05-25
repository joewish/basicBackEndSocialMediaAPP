import mongoose from "mongoose";

export const userProfile = mongoose.Schema({
    userId:{type:mongoose.Types.ObjectId,
        ref:"User",
        required:true
    },
    name:{type:String,required:true},
    gender:{type:String, required:true,enum:["Male", "Female"],required:true},
    avatar:{type:String},
    targetId:[{type:mongoose.Types.ObjectId,refPath:"target"}],
    target:{type:String,enum:["Posts","Likes","Comments","Friendships"]}


})