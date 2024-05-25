import {addPost,getPostByID,getPostByUserID,deletePostBypostID,updatePostByPostID,getALLPost} from "../repository/posts.repository.js"

export const getAllPosts=(req,res,next)=>{
    const result = getALLPost()
    if(result){
        res.status(200).send({"success":true,"message":result})
    }else{
        res.status(404).send({"success":false,"message":"couldn't get all posts"})
    }
}

export const getPostsById=(req,res,next)=>{
    const result = getPostByID(req.params.id)
    if(result){
        res.status(200).send({"success":true,"message":result})
    }else{
        res.status(404).send({"success":false,"message":"Unable to find the ID"})
    }
}
export const getPostByUser=(req, res, next) =>{
    const result = getPostByUserID(req.body)
    if(result){
        res.status(200).send({"success":true,"message":result})
    }else{
        res.status(404).send({"success":false,"message":"please check the parameters"})
    }

}

export const createNewPost=(req, res, next) =>{
    const result = addPost(req.body)
    if(result){
        res.status(200).send({"success":true,"message":result})
    }else{
        res.status(404).send({"success":false,"message":"please check the parameters"})
    }

}

export const deletePost=(req, res,next)=>{
    const result = deletePostBypostID(req.params.id)
    if(result){
        res.status(200).send({"success":true,"message":result})
    }else{
        res.status(404).send({"success":false,"message":"Unable to find the Post ID"})
    }

}

export const updatePost=(req, res,next)=>{
    const result = updatePostByPostID(req.params.id, req.body)
    if(result){
        res.status(200).send({"success":true,"message":result})
    }else{
        res.status(404).send({"success":false,"message":"Unable to Update the Post by ID"})
    }
}