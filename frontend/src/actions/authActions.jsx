import axios from "axios";

export default async function RegisterUser(username, password) {
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
      error: error.response?.data?.message || "Registration failed",
    };
  }
}
