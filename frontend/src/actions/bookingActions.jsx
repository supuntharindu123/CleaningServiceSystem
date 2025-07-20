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

export async function UpdateBooking(axiosInstance, id, formdata) {}

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
