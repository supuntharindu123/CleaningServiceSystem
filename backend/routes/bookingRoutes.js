import express from "express";
import {
  createBooking,
  deleteBooking,
  getBookings,
  getBookingsByUserId,
  updateBooking,
} from "../controller/bookingController.js";
import { auth } from "../middleware/auth.js";

const router = express.Router();

router.post("/", auth, createBooking);
router.get("/", auth, getBookings);
router.get("/user/:id", auth, getBookingsByUserId);
router.put("/:id", auth, updateBooking);
router.delete("/:id", auth, deleteBooking);

export default router;
