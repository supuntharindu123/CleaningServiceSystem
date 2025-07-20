import User from "../models/User.js";
import bcrypt from "bcrypt";
import generateToken from "../utill/generateToken.js";

/**
 * @desc    User Register
 * @route   POST /api/auth/register
 * @access  Public
 */
export async function Register(req, res) {
  try {
    const { username, password } = req.body;
    if (!username || !password) {
      return res
        .status(400)
        .json({ msg: "Username and password are required" });
    }

    // Check if the user already exists
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ msg: "Username already exists" });
    }
    // Hash the password before saving
    const hashpassword = await bcrypt.hash(password, 10);
    // Create a new user
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

/**
 * @desc    Login
 * @route   POST /api/auth/login
 * @access  Public
 */
export async function Login(req, res) {
  try {
    const { username, password } = req.body;
    // Validate input
    if (!username || !password) {
      return res
        .status(400)
        .json({ msg: "Username and password are required" });
    }
    // Check if the user exists
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(400).json({ msg: "Invalid username or password" });
    }
    // Compare the password with the hashed password in the database
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).json({ msg: "Invalid username or password" });
    }
    //Generate a token for the user
    const token = await generateToken(user._id, username, user.role);

    res.status(200).json({
      userDetails: { id: user._id, username: user.username, role: user.role },
      token,
      msg: "Login Successful !",
    });
  } catch (error) {
    console.log("Login Failed!");
    res.status(400).json({ msg: "Login failed", error: error.message });
  }
}

/**
 * @desc    Gett All users
 * @route   POST /api/auth/users
 * @access  Admin
 */
export async function GetAllUsers(req, res) {
  try {
    // Check if the user is an admin
    if (req.user.role !== "admin") {
      return res.status(403).json({ msg: "Access denied" });
    }
    // Fetch all users except the password field
    const users = await User.find().select("-password");
    res.status(200).json(users);
  } catch (error) {
    console.log("Failed to fetch users!");
    res
      .status(400)
      .json({ msg: "Failed to fetch users", error: error.message });
  }
}
