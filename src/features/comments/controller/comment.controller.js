import {addComment,deleteComment,updateComment,getAllComments} from "../repository/comment.repository.js"
import {customErrorHandler} from "../../../../middlewares/errorHandler.js"


export const getCommentById=(req,res,next)=>{
    const result=getAllComments(req.params.id)
    try{
    if(result){
        res.status(200).send(result)
    }else{
        res.status(400).send({"success":false,"message":"Comment not found"})
    }}
    catch(err){
        next(new customErrorHandler(400,err.message))
    }
    
}
export const postNewComment=(req,res,next)=>{
    const result =addComment(req.body)
    if(result) {
        res.status(201).send({"success":true,"message":result})
    }else{
        res.status(400).send({"success":false,"message":"failed to add comment"})
    }

}

export const deleteAComment=(req,res,next)=>{
    const result = deleteComment(req.params.id)
    if(result) {
        res.status(200).send({"success":true,"message":result})    
    }else{
        res.status(400).send({"success":false,"message":"didn't find the comment to delete"})
    }
}

export const updateAComments=(req,res,next)=>{
    const result = updateComment(req.body)
    if(result) {
        res.status(200).send({"success":true,"message":result})    
    }else{
        res.status(400).send({"success":false,"message":"couldn't find the comment"})
    }
}