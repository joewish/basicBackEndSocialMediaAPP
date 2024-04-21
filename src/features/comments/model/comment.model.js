const commentsDB=[]
let id = 0;
class UserComments{
    constructor(userID,postID,content) {
        this.id=++id;
        this.userID=userID;
        this.postID=postID;
        this.content=content;
    }
}

export const addComment = (data) => {
    const { userID, postID, content } = data;
    const newComment = new UserComments(userID, postID, content);
    commentsDB.push(newComment);
    return newComment;
  };

  addComment({ userID: "1", postID: "1", content: "nice! work" });
  addComment({ userID: "2", postID: "1", content: "nice! work 2" });
  export const deleteComment = (data) => {
    const commentID = data;
    const indexToRemove = commentsDB.findIndex(Comment => Comment.id == commentID);
    if (indexToRemove !== -1) {
      // Remove the item from the cart
      return commentsDB.splice(indexToRemove, 1)[0]; // Item removed successfully
    } else {
      return null;
    }
  };

  export const updateComment = (data)=>{
    const {commentId,content} = data
    const commentIndex = commentsDB.findIndex(comment=> comment.id ==commentId)
    if(commentIndex !==-1){
        commentsDB[commentIndex].content=content
    }else{
        return null
    }
  }
  
  export const getAllComments = (data) => {
    const postId = data;
    const matchingComments = [];
    commentsDB.forEach((comment) => {
        if (comment.postID === postId) {
            matchingComments.push(comment);
        }
    });
    return matchingComments;
};


  