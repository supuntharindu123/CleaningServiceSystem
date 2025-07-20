import axios from "axios";

export async function fetchServices(axiosInstance) {
  try {
    const response = await axiosInstance.get("/services");
    return { success: true, data: response.data };
  } catch (error) {
    console.error("Failed to fetch services", error);
    return {
      success: false,
      error: error.response?.data?.message || "Failed to fetch services",
    };
  }
}

export async function createService(serviceName, description, axiosInstance) {
  try {
    const response = await axiosInstance.post("/services", {
      serviceName,
      description,
    });
    return { success: true, data: response.data };
  } catch (error) {
    console.error("Failed to create service", error);
    return {
      success: false,
      error: error.response?.data?.message || "Failed to create service",
    };
  }
}

export async function updateService(
  serviceId,
  serviceName,
  description,
  axiosInstance
) {
  try {
    const response = await axiosInstance.put(`/services/${serviceId}`, {
      serviceName,
      description,
    });
    return { success: true, data: response.data };
  } catch (error) {
    console.error("Failed to update service", error);
    return {
      success: false,
      error: error.response?.data?.message || "Failed to update service",
    };
  }
}

export async function deleteService(serviceId, axiosInstance) {
  try {
    const response = await axiosInstance.delete(`/services/${serviceId}`);
    return { success: true, data: response.data };
  } catch (error) {
    console.error("Failed to delete service", error);
    return {
      success: false,
      error: error.response?.data?.message || "Failed to delete service",
    };
  }
}

export async function GetservicesById(serviceId, axiosInstance) {
  try {
    const response = await axiosInstance.get(`/services/${serviceId}`);
    return { success: true, data: response.data };
  } catch (error) {
    console.error("Failed to delete service", error);
    return {
      success: false,
      error: error.response?.data?.message || "Failed to delete service",
    };
  }
}
