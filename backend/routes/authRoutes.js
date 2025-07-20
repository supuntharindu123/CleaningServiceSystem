import express from "express";
import { GetAllUsers, Login, Register } from "../controller/authController.js";
import { auth } from "../middleware/auth.js";

const router = express.Router();

router.post("/register", Register);
router.post("/login", Login);
router.get("/users", auth, GetAllUsers);

export default router;
