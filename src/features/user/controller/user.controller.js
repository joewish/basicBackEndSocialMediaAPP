import { customErrorHandler } from "../../../middlewares/errorHandler.js";
import { addUser, confirmLogin,findUserByRequestId,updateUserProfile,getAllProfileDetails} from "../repository/user.repository.js";
import jwt from "jsonwebtoken";
export const registerUser = async (req, res, next) => {
  const userData = req.body;
  try{
  if (userData) {
    let user = await addUser(userData);
    res.status(201).send({ status: "success", user });
  } else {
    res.status(400).json({ status: "failure", msg: "invalid user details" });
  }
}catch(err){
  next(new customErrorHandler(400,err.message));
}
};

export const loginUser = async(req, res) => {
  let status = await confirmLogin(req.body);
  if (status) {
    const token = jwt.sign(
      { userId: status.id, userEmail: status.email },
      "U5f89JccQPpiCtAQ",
      { expiresIn: "1h" }
    )
    req.session.user = {
      id: status._id,
      email: status.email
    };
    res
      .status(201)
      .cookie("jwtToken", token, { maxAge: 900000, httpOnly: false })
      .cookie("userId", status.id, { maxAge: 900000, httpOnly: false })
      .json({ status: "success", msg: "login successfull", token });
  } else {
    res.status(400).json({ status: "failure", msg: "invalid user details" });
  }
};

// export const logoutUser = async (req, res,next) => {
//   try{
//     const user = await findUserByRequestId(req._id);
//     res.status(200).json({message: {email: user.email,name:user.name}})
//   }catch(err){
//     next(new customErrorHandler(400,err.message));
//   }
// }
export const logoutUser = (req, res) => {
  if (req.session.user) {
    req.session.destroy((err) => {
      if (err) {
        return res.status(500).json({ status: "failure", msg: "Failed to logout" });
      }

      res
        .clearCookie('jwtToken')
        .status(200)
        .json({ status: "success", msg: "logout successful" });
    });
  } else {
    res.status(400).json({ status: "failure", msg: "User not logged in" });
  }
}

export const getUserProfile = async (req, res,next) => {
  const userId = req.params.userId
  try{
    const findUser = await findProfileById(userId)
    if(findUser){
      res.status(200).send({ message:{name:findUser.name,gender:findUser.gender,avatar:findUser.avatar}})
    }else{
      res.status(404).send({ message:"User not found"})
    }
  }catch(error){
    next(new customErrorHandler(400,error.message))
  }
}
export const getAllProfiles = async(req, res,next) =>{
  try{
    const result = await getAllProfileDetails()
    if(result){
      res.status(200).send({message:result})
    }else{
      res.status(400).send({message:"unable to get all profile details"})
    }
  }catch(error){
  next(new customErrorHandler(400,error.message))
}
}

export const updateUserdetails = async(req, res, next) => {
  const userId= req.params.userId
  const body= req.body
  try{
    const update=await updateUserProfile(userId, body)
    if(update){
      res.status(200).send({message:update})
    }else{
      res.status(404).send({message:"User profile not found"})
    }
  }catch(e){
    next( new customErrorHandler(400,e.message))
  }
}