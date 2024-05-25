import {getLikesByID} from "../repository/like.repository.js"


export const getPosts=(req, res, next) =>{
    const result = getLikesByID(req.params.postID)
    if(result){
        res.status(200).send({"success": false,"message":result})
    }else{
        res.status(404).send({"success": false,"message": "Post Not found"})
    }
}

export const getTogglePostID=(req, res,next) => {
    //TO-DO:
}