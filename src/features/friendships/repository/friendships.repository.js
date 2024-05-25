import mongoose from "mongoose";
import { friendshipsSchema } from "../schema/friendships.schema.js";
const UserFriends=mongoose.model("Friendships",friendshipsSchema);

export const newFriendrequests = async (data)=>{
    try{
        const {userId,friendId}=data
        const createFriendList = new UserFriends({userId:userId,"$push":{inqueue:friendId}})
        const doc = await createFriendList.save()
        return doc
    }catch(err){
        throw new Error(err)
    }
}

export const getUserFriendsListById = async(userId)=>{
    try{
        const friendsDetails = await UserFriends.find({userId: userId})
        return friendsDetails
    }catch(err){
        throw new Error(err)
    }

}

export const friendsStatusUpdate=async(userId,friendId)=>{
    try{
        const result = await findByIdAndUpdate({userId:userId})
    }catch(err){
        throw new Error(err)
}
}