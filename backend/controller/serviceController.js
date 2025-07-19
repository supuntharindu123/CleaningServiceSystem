// controllers/serviceController.js

import Service from "../models/Service.js";

/**
 * @desc    Create a new cleaning service
 * @route   POST /api/services
 * @access  Admin
 */
export default async function CreateService(req, res) {
  try {
    const { name } = req.body;

    // Validate input
    if (!name) {
      return res.status(400).json({ msg: "Service name is required" });
    }

    // Check if the service already exists
    const existingService = await Service.findOne({ serviceName: name });

    if (existingService) {
      return res.status(400).json({ msg: "Service already exists" });
    }

    // Create and save the new service
    const service = await Service.create({ serviceName: name });

    res.status(201).json({
      msg: "Service creation successful!",
      service,
    });
  } catch (error) {
    console.error("CreateService error:", error.message);
    res.status(500).json({ msg: "Server error. Please try again later." });
  }
}

/**
 * @desc    Get all cleaning service
 * @route   GET /api/services
 * @access  Public
 */
export async function GetServices(req, res) {
  try {
    // Fetch all services from the database
    const services = await Service.find();

    // Check if services exist
    if (!services || services.length === 0) {
      return res.status(404).json({ msg: "No services found" });
    }

    res.status(200).json({
      msg: "Services retrieved successfully",
      services,
    });
  } catch (error) {
    console.error("GetServices error:", error.message);
    res.status(500).json({ msg: "Server error. Please try again later." });
  }
}

/**
 * @desc    Update a service name by ID
 * @route   PUT /api/services/:id
 * @access  Admin (protected)
 */
export async function UpdateService(req, res) {
  try {
    const { id } = req.params;
    const { name } = req.body;

    // Validate input
    if (!name) {
      return res.status(400).json({ msg: "Service name is required" });
    }

    // Find and update service
    const service = await Service.findByIdAndUpdate(
      id,
      { name },
      { new: true }
    );

    if (!service) {
      return res.status(404).json({ msg: "Service not found!" });
    }

    res.status(200).json({
      msg: "Service updated successfully!",
      service,
    });
  } catch (error) {
    console.error("UpdateService error:", error.message);
    res.status(500).json({ msg: "Server error. Please try again later." });
  }
}

/**
 * @desc    Get a single service by ID
 * @route   GET /api/services/:id
 * @access  Admin
 */
export async function GetServiceById(req, res) {
  try {
    const { id } = req.params;

    // Find service by Id
    const service = await Service.findById(id);

    if (!service) {
      return res.status(404).json({ msg: "Service not found!" });
    }

    res.status(200).json(service);
  } catch (error) {
    console.error("GetServiceById error:", error.message);
    res.status(500).json({ msg: "Server error. Please try again later." });
  }
}

/**
 * @desc    Delete a service by ID
 * @route   DELETE /api/services/:id
 * @access  Admin
 */
export async function DeleteService(req, res) {
  try {
    const { id } = req.params;

    // Find and delete service
    const deletedService = await Service.findByIdAndDelete(id);

    if (!deletedService) {
      return res.status(404).json({ msg: "Service not found!" });
    }

    res.status(200).json({ msg: "Service deleted successfully!" });
  } catch (error) {
    console.error("DeleteService error:", error.message);
    res.status(500).json({ msg: "Server error. Please try again later." });
  }
}
