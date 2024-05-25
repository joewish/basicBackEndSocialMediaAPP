import {newFriendrequests,getUserFriendsListById,friendsStatusUpdate} from "../repository/friendships.repository.js";
import { customErrorHandler } from "../../../middlewares/errorHandler.js";
export const getUserFriendsList=async (req,res,next)=>{
    const userId= req.params.userId;
    const result = await getUserFriendsListById(userId);
    try{
        if(result){
            res.status(200).send({message:result});
        }else{
            res.status(404).send({message:"User not found"});
        }
    }catch(e){
        next()
    }
}

export const getUserPendingRequests=async (req,res,next)=>{
   
    try{
        const result = await getUserFriendsListById(req.body)
        if(result){
            res.status(200).send({message:result.inqueue})
        }else{
            res.status(404).send({message:"User not found"})
        }
        }catch(err){
            next(new customErrorHandler(400,err.message))
    }
}

export const getUserToggle=(req,res,next)=>{
}

export const sendFriendShipRequestStatus=async (req,res,next)=>{
    const {FriendId} = req.params.FriendId
    try{
        const result = await friendsStatusUpdate()
    }catch(err){
        next(new customErrorHandler(400, err.message))
    }
}

