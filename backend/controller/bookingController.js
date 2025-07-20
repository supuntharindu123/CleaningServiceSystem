// src/controllers/bookingController.js
import Booking from "../models/Booking.js";

/**
 * @desc    Create a new booking
 * @route   POST /api/bookings
 * @access  Public
 */
export const createBooking = async (req, res) => {
  try {
    const { customer_name, address, date_time, service_id } = req.body;
    const user_id = req.user.id;

    if (!customer_name || !address || !date_time || !service_id) {
      return res.status(400).json({ msg: "All fields are required." });
    }

    const booking = await Booking.create({
      customer_name,
      address,
      date_time,
      service_id,
      user_id,
    });

    res.status(201).json({ msg: "Booking created successfully", booking });
  } catch (error) {
    console.error("Create booking error:", error);
    res.status(500).json({ msg: "Server error" });
  }
};

/**
 * @desc    Get all bookings for logged-in user
 * @route   GET /api/bookings
 * @access  Admin (protected)
 */
export const getBookings = async (req, res) => {
  try {
    const user_id = req.user.id;
    const bookings = await Booking.find();

    if (!bookings || bookings.length === 0) {
      return res.status(404).json({ msg: "No booking found" });
    }

    res.status(200).json({
      msg: "Booking retrieved successfully",
      bookings,
    });
  } catch (error) {
    console.error("Fetch bookings error:", error);
    res.status(500).json({ msg: "Server error" });
  }
};

/**
 * @desc    Get bookings by a specific user ID
 * @route   GET /api/bookings/user/:userId
 * @access  Admin/User (protected)
 */
export const getBookingsByUserId = async (req, res) => {
  try {
    const { userId } = req.params;
    const bookings = await Booking.find({ user_id: userId });

    if (!bookings || bookings.length === 0) {
      return res.status(404).json({ msg: "No Booking found" });
    }

    res.status(200).json({
      msg: "Booking retrieved successfully",
      bookings,
    });
  } catch (error) {
    console.error("Get bookings by userId error:", error);
    res.status(500).json({ msg: "Server error" });
  }
};

/**
 * @desc    Update a booking
 * @route   PUT /api/bookings/:id
 * @access  User (protected)
 */
export const updateBooking = async (req, res) => {
  try {
    const id = req.params.id;
    const { customer_name, address, date_time, service_id } = req.body;

    const user_id = req.user.id;

    if (!customer_name || !address || !date_time || !service_id || !user_id) {
      return res.status(400).json({ msg: "All fields are required." });
    }
    const updated = await Booking.findByIdAndUpdate(
      id,
      {
        customer_name,
        address,
        date_time,
        service_id,
        user_id,
      },
      {
        new: true,
      }
    );

    if (!updated) return res.status(404).json({ msg: "Booking not found" });

    res.status(200).json({ msg: "Booking updated", updated });
  } catch (error) {
    console.error("Update error:", error);
    res.status(500).json({ msg: "Server error" });
  }
};

/**
 * @desc    Delete a booking
 * @route    DELETE /api/bookings/:id
 * @access  User (protected)
 */
export const deleteBooking = async (req, res) => {
  try {
    const id = req.params.id;

    const deleted = await Booking.findByIdAndDelete(id);

    if (!deleted) return res.status(404).json({ msg: "Booking not found" });
    res.status(200).json({ msg: "Booking deleted successfully" });
  } catch (error) {
    console.error("Delete error:", error);
    res.status(500).json({ msg: "Server error" });
  }
};
