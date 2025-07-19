import mongoose from "mongoose";

const ServicesSchema = new mongoose.Schema({
  serviceName: {
    type: String,
    required: true,
  },
});

const Service = mongoose.model("Service", ServicesSchema);

export default Service;
