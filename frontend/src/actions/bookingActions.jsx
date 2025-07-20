export async function CreateBooking(axiosInstance, formdata) {
  try {
    //post request to create a booking
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

// Update booking
export async function UpdateBooking(axiosInstance, id, formdata) {
  try {
    //put request to update a booking
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

// Delete booking
export async function DeleteBooking(axiosInstance, id) {
  try {
    //delete request to delete a booking
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

// Fetch booking by ID
export async function GetBookingById(axiosInstance, id) {
  try {
    //get request to fetch a booking by ID
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
// Fetch bookings for a specific user
export async function GetBookingForUser(axiosInstance, userId) {
  try {
    //get request to fetch bookings by user ID
    const response = await axiosInstance.get(`/booking/user/${userId}`);
    return { success: true, data: response.data };
  } catch (error) {
    console.error("Failed to fetch bookings", error);
    return {
      success: false,
      error: error.response?.data?.msg || "Failed to fetch bookings",
    };
  }
}

// Fetch all bookings
export async function GetAllBookings(axiosInstance) {
  try {
    //get request to fetch all bookings
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
