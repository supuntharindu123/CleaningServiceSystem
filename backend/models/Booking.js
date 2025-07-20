import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema(
  {
    customer_name: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    date_time: {
      type: Date,
      required: true,
    },
    service_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Service",
      required: true,
    },
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);

const Booking = mongoose.model("Booking", bookingSchema);
export default Booking;
