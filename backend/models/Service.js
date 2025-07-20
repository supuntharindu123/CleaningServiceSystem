import mongoose from "mongoose";

// Define the Booking schema
const ServicesSchema = new mongoose.Schema(
  {
    serviceName: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Service = mongoose.model("Service", ServicesSchema);

export default Service;
