import axios from "axios";

//Register a new user
export async function RegisterUser(username, password) {
  try {
    const response = await axios.post(
      "http://localhost:3000/api/auth/register",
      {
        username,
        password,
      }
    );
    return { success: true, data: response.data };
  } catch (error) {
    console.error("Registration failed", error);
    return {
      success: false,
      error: error.response?.data?.msg || "Registration failed",
    };
  }
}

//Getting all users
export async function AllUsers(axiosInstance) {
  try {
    const response = await axiosInstance.get(
      "http://localhost:3000/api/auth/users"
    );
    return { success: true, data: response.data };
  } catch (error) {
    console.error("User fetching failed", error);
    return {
      success: false,
      error: error.response?.data?.msg || "fetching failed",
    };
  }
}
