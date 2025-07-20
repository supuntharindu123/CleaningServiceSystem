import express from "express";
import {
  createBooking,
  deleteBooking,
  getBookings,
  getBookingsById,
  getBookingsByUserId,
  updateBooking,
} from "../controller/bookingController.js";
import { auth } from "../middleware/auth.js";

const router = express.Router();

// Define routes for booking
router.post("/", auth, createBooking);
router.get("/", auth, getBookings);
router.get("/user/:id", auth, getBookingsByUserId);
router.put("/:id", auth, updateBooking);
router.delete("/:id", auth, deleteBooking);
router.get("/:id", auth, getBookingsById);

export default router;
