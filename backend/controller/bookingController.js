// src/controllers/bookingController.js
import Booking from "../models/Booking.js";

/**
 * @desc    Create a new booking
 * @route   POST /api/bookings
 * @access  Public
 */
export async function createBooking(req, res) {
  try {
    const { username, address, dateTime, serviceType } = req.body;
    const user_id = req.user.id;

    if (!username || !address || !dateTime || !serviceType) {
      return res.status(400).json({ msg: "All fields are required." });
    }

    const booking = await Booking.create({
      customer_name: username,
      address,
      date_time: dateTime,
      service_id: serviceType,
      user_id,
    });

    res.status(201).json({ msg: "Booking created successfully", booking });
  } catch (error) {
    console.error("Create booking error:", error);
    res.status(500).json({ msg: "Server error" });
  }
}

/**
 * @desc    Get all bookings for logged-in user
 * @route   GET /api/bookings
 * @access  Admin (protected)
 */
export async function getBookings(req, res) {
  try {
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
}

/**
 * @desc    Get bookings by a specific user ID
 * @route   GET /api/bookings/user/:userId
 * @access  Admin/User (protected)
 */
export async function getBookingsByUserId(req, res) {
  try {
    const id = req.params.id;
    //find bookings by user ID
    const bookings = await Booking.find({ user_id: id });
    // Check if bookings exist for the user
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
}

/**
 * @desc    Update a booking
 * @route   PUT /api/bookings/:id
 * @access  User (protected)
 */
export async function updateBooking(req, res) {
  try {
    const id = req.params.id;
    const { username, address, dateTime, serviceType } = req.body;

    const user_id = req.user.id;
    if (!username || !address || !dateTime || !serviceType) {
      return res.status(400).json({ msg: "All fields are required." });
    }
    const updated = await Booking.findByIdAndUpdate(
      id,
      {
        customer_name: username,
        address,
        date_time: dateTime,
        service_id: serviceType,
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
}

/**
 * @desc    Delete a booking
 * @route    DELETE /api/bookings/:id
 * @access  User (protected)
 */
export async function deleteBooking(req, res) {
  try {
    const id = req.params.id;

    const deleted = await Booking.findByIdAndDelete(id);

    if (!deleted) return res.status(404).json({ msg: "Booking not found" });
    res.status(200).json({ msg: "Booking deleted successfully" });
  } catch (error) {
    console.error("Delete booking error:", error);
    res.status(500).json({ msg: "Server error" });
  }
}

/**
 * @desc    Get bookings by ID
 * @route   GET /api/bookings/:id
 * @access  Admin/User (protected)
 */
export async function getBookingsById(req, res) {
  try {
    const id = req.params.id;

    const booking = await Booking.findById(id);

    if (!booking) {
      return res.status(404).json({ msg: "No Booking found" });
    }

    res.status(200).json({
      msg: "Booking retrieved successfully",
      booking,
    });
  } catch (error) {
    console.error("Get bookings by Id error:", error);
    res.status(500).json({ msg: "Server error" });
  }
}
