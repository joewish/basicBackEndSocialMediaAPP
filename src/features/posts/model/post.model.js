const posts=[]
let id=0
class userPosts{
    constructor(userID,caption,imageURL){
        this.id=++id;
        this.userID=userID;
        this.caption=caption;
        this.imageURL=imageURL;
    }
}
export const addPost=(data)=>{
    const {userID,caption,imageURL}=data;
    const newPost = new userPosts(userID,caption,imageURL);
    posts.push(newPost);
    return newPost
}
addPost({userID:"1",caption:"yess is this",imageURL:"https://www.youtube.com/shorts/HnxAh5xEHCE"})
addPost({userID:"2",caption:"yess is this",imageURL:"https://www.youtube.com/shorts/HnxAh5xEHCE"})
addPost({userID:"1",caption:"yess is this",imageURL:"https://www.youtube.com/shorts/HnxAh5xEHCE"})
export const getPostByID=(data)=>{
    const postID = data
    const postIndex = posts.findIndex(post=> post.id== postID)
    if(postIndex!==-1){
        return posts[postIndex]
    }else{
        return null;
    }
}
export const getPostByUserID=(data)=>{
    const userID = data
    //console.log(userID)
    const finalresult=[]
    const userindex = posts.findIndex(post=>post.userID==userID.userID)
    if(userindex!==-1){
        posts.forEach((post)=>{
            if(post.userID==userID.userID){
                finalresult.push(post)
            }
        })
        return finalresult
    }else{
        return null
    }
}
export const deletePostBypostID=(data)=>{
    const postID=data
    const postIndex = posts.findIndex(post=> post.id== postID)
    if(postIndex!==-1){
        return posts.splice(postIndex,1)[0]
    }else{
        return null
    }

}
export const updatePostByPostID=(id,data)=>{
    const {caption,imageURL} = data
    const postIndex  =posts.findIndex((post)=> post.id== id)
    if(postIndex!==-1){
        posts[postIndex].caption = caption
        posts[postIndex].imageURL = imageURL
        return posts[postIndex]
    }else{
        return null
    }
}
export const getALLPost=()=>{
    return posts
}