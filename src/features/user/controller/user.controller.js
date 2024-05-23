import { customErrorHandler } from "../../../middlewares/errorHandler.js";
import { addUser, confirmLogin } from "../repository/user.repository.js";
import jwt from "jsonwebtoken";
export const registerUser = async (req, res, next) => {
  const userData = req.body;
  try{
  if (userData) {
    let user = await addUser(userData);
    console.log(user)
    res.status(201).send({ status: "success", user });
  } else {
    res.status(400).json({ status: "failure", msg: "invalid user details" });
  }
}catch(err){
  next(new customErrorHandler(400,err.message));
}
};

export const loginUser = (req, res) => {
  let status = confirmLogin(req.body);
  if (status) {
    const token = jwt.sign(
      { userId: status.id, userEmail: status.email },
      "U5f89JccQPpiCtAQ",
      { expiresIn: "1h" }
    );
    res
      .status(201)
      .cookie("jwtToken", token, { maxAge: 900000, httpOnly: false })
      .cookie("userId", status.id, { maxAge: 900000, httpOnly: false })
      .json({ status: "success", msg: "login successfull", token });
  } else {
    res.status(400).json({ status: "failure", msg: "invalid user details" });
  }
};
