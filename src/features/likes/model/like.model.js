const likes=[]
let id=0
class userLikes{
constructor(userID,postID){
    this.id=++id;
    this.userID=userID;
    this.postID=postID;
}
}
export const addUserLikes=(data)=>{
    const{userID,postID}=data
    const userLike = new userLikes(userID,postID)
    likes.push(userLike)
}
addUserLikes({userID:1,postID:1})
addUserLikes({userID:1,postID:2})
addUserLikes({userID:2,postID:2})
export const getPostByID=(data)=>{
    const postId=data
    const postIndex = likes.findIndex(post=>post.postID==postId);
    if(postIndex!==-1){
        return likes[postIndex];
    }else{
        return null
    }
}