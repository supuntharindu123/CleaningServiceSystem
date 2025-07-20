// frontend/src/actions/serviceActions.jsx

//Fetch services
export async function fetchServices(axiosInstance) {
  try {
    const response = await axiosInstance.get("/services");
    console.log("Fetched services:", response.data);
    return { success: true, data: response.data };
  } catch (error) {
    console.error("Failed to fetch services", error);
    return {
      success: false,
      error: error.response?.data?.msg || "Failed to fetch services",
    };
  }
}

//create a new service
export async function createService(serviceName, description, axiosInstance) {
  try {
    const response = await axiosInstance.post("/services", {
      serviceName: serviceName,
      description: description,
    });
    return { success: true, data: response.data };
  } catch (error) {
    console.error("Failed to create service", error);
    return {
      success: false,
      error: error.response?.data?.msg || "Failed to create service",
    };
  }
}

//update service
export async function updateService(
  serviceId,
  serviceName,
  description,
  axiosInstance
) {
  try {
    const response = await axiosInstance.put(`/services/${serviceId}`, {
      name: serviceName, // Changed to match backend expectation
      description,
    });
    return { success: true, data: response.data };
  } catch (error) {
    console.error("Failed to update service", error);
    return {
      success: false,
      error: error.response?.data?.msg || "Failed to update service",
    };
  }
}

//remove service
export async function deleteService(serviceId, axiosInstance) {
  try {
    const response = await axiosInstance.delete(`/services/${serviceId}`);
    return { success: true, data: response.data };
  } catch (error) {
    console.error("Failed to delete service", error);
    return {
      success: false,
      error: error.response?.data?.msg || "Failed to delete service",
    };
  }
}

//Get service from id
export async function GetservicesById(serviceId, axiosInstance) {
  try {
    const response = await axiosInstance.get(`/services/${serviceId}`);
    return { success: true, data: response.data };
  } catch (error) {
    console.error("Failed to get service", error);
    return {
      success: false,
      error: error.response?.data?.msg || "Failed to get service",
    };
  }
}
