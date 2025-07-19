import User from "../models/User.js";
import bcrypt from "bcrypt";
import generateToken from "../utill/generateToken.js";

export async function Register(req, res) {
  try {
    const { username, password } = req.body;
    if (!username || !password) {
      return res
        .status(400)
        .json({ msg: "Username and password are required" });
    }

    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ msg: "Username already exists" });
    }

    const hashpassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      username: username,
      password: hashpassword,
    });

    res.status(201).json({ msg: "User registered successfully" });
  } catch (error) {
    console.log("Registred Failed!");
    res.status(400).json({ msg: "Registration failed", error: error.message });
  }
}

export async function Login(req, res) {
  try {
    const { username, password } = req.body;
    if (!username || !password) {
      return res
        .status(400)
        .json({ msg: "Username and password are required" });
    }

    const user = await User.findOne({ username });
    if (!user) {
      return res.status(400).json({ msg: "Invalid username or password" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).json({ msg: "Invalid username or password" });
    }

    const token = await generateToken(user._id, username);

    res.status(200).json({
      msg: "Login successful",
      token,
      user: { username: user.username, role: user.role },
    });
  } catch (error) {
    console.log("Login Failed!");
    res.status(400).json({ msg: "Login failed", error: error.message });
  }
}
