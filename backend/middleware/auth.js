import JWT from "jsonwebtoken";
import User from "../models/User.js";

export async function auth(req, res, next) {
  try {
    //get token from header
    const token = req.header("Authorization").replace("Bearer", "").trim();

    if (!token) return res.status(401).json({ msg: "Token required" });

    //verify token
    const verify = JWT.verify(token, process.env.JWT_SECRET);

    //find user by ID
    const user = await User.findById(verify.userId);

    if (!user) throw new Error();

    req.user = {
      id: user._id,
      username: user.username,
      role: user.role,
    };
    next();
  } catch (error) {
    console.log("Authenticate Error", error);
    res.status(401).json({ msg: "Authentication Required" });
  }
}
