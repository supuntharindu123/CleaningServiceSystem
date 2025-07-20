import axios from "axios";

export async function fetchServices() {
  try {
    const response = await axios.get("http://localhost:3000/api/services");
    return { success: true, data: response.data };
  } catch (error) {
    console.error("Failed to fetch services", error);
    return {
      success: false,
      error: error.response?.data?.message || "Failed to fetch services",
    };
  }
}

export async function createService(serviceName) {
  try {
    const response = await axios.post(
      "http://localhost:3000/api/services",
      serviceName
    );
    return { success: true, data: response.data };
  } catch (error) {
    console.error("Failed to create service", error);
    return {
      success: false,
      error: error.response?.data?.message || "Failed to create service",
    };
  }
}

export async function updateService(serviceId, serviceName) {
  try {
    const response = await axios.put(
      `http://localhost:3000/api/services/${serviceId}`,
      { serviceName }
    );
    return { success: true, data: response.data };
  } catch (error) {
    console.error("Failed to update service", error);
    return {
      success: false,
      error: error.response?.data?.message || "Failed to update service",
    };
  }
}

export async function deleteService(serviceId) {
  try {
    const response = await axios.delete(
      `http://localhost:3000/api/services/${serviceId}`
    );
    return { success: true, data: response.data };
  } catch (error) {
    console.error("Failed to delete service", error);
    return {
      success: false,
      error: error.response?.data?.message || "Failed to delete service",
    };
  }
}
