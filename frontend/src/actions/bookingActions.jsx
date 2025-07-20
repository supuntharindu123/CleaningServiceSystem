export async function CreateBooking(axiosInstance, formdata) {
  try {
    const response = await axiosInstance.post("/booking", formdata);

    return { success: true, data: response.data };
  } catch (error) {
    console.error("Registration failed", error);
    return {
      success: false,
      error: error.response?.data?.msg || "Registration failed",
    };
  }
}

export async function UpdateBooking(axiosInstance, id, formdata) {
  try {
    console.log("Updating booking with ID:", id, "and data:", formdata);
    const response = await axiosInstance.put(`/booking/${id}`, formdata);

    return { success: true, data: response.data };
  } catch (error) {
    console.error("Update booking failed", error);
    return {
      success: false,
      error: error.response?.data?.msg || "Update booking failed",
    };
  }
}

export async function DeleteBooking(axiosInstance, id) {
  try {
    const response = await axiosInstance.delete(`/booking/${id}`);

    return { success: true, data: response.data };
  } catch (error) {
    console.error("Delete booking failed", error);
    return {
      success: false,
      error: error.response?.data?.msg || "Delete booking failed",
    };
  }
}

export async function GetBookingById(axiosInstance, id) {
  try {
    const response = await axiosInstance.get(`/booking/${id}`);
    return { success: true, data: response.data };
  } catch (error) {
    console.error("Failed to fetch booking", error);
    return {
      success: false,
      error: error.response?.data?.msg || "Failed to fetch booking",
    };
  }
}
export async function GetBookingForUser(axiosInstance) {
  try {
    const response = await axiosInstance.get("/booking");
    return { success: true, data: response.data };
  } catch (error) {
    console.error("Failed to fetch bookings", error);
    return {
      success: false,
      error: error.response?.data?.msg || "Failed to fetch bookings",
    };
  }
}

export async function GetAllBookings(axiosInstance) {
  try {
    const response = await axiosInstance.get("/booking");
    return { success: true, data: response.data };
  } catch (error) {
    console.error("Failed to fetch all bookings", error);
    return {
      success: false,
      error: error.response?.data?.msg || "Failed to fetch all bookings",
    };
  }
}
