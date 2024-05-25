import mongoose from "mongoose";

export const friendshipsSchema = mongoose.Schema({
    userId:{type:mongoose.Types.ObjectId,
        ref:"User"
    },
    friendsList:[{
        type:mongoose.Types.ObjectId,
        ref:"User"
    }],
    rejectedList:[{
        type:mongoose.Types.ObjectId,
        ref:"User"
    }],
    inqueue:[{
        type:mongoose.Types.ObjectId,
        ref:"User"
    }]
})