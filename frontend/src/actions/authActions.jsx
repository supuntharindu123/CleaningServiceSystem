import axios from "axios";

export const RegisterUser = async (username, password) => {
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
};

export const LoginUser = async (email, password) => {
  try {
    const response = await axios.post("http://localhost:3000/api/auth/login", {
      email,
      password,
    });

    const { token, user } = response.data;

    // Store token in localStorage
    localStorage.setItem("token", token);
    localStorage.setItem("user", JSON.stringify(user));

    // Set default Authorization header for future requests
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

    return { success: true, data: { user, token } };
  } catch (error) {
    console.error("Login failed", error);
    return {
      success: false,
      error: error.response?.data?.message || "Login failed",
    };
  }
};

export const LogoutUser = () => {
  try {
    // Remove token and user data from localStorage
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    // Remove Authorization header
    delete axios.defaults.headers.common["Authorization"];

    return { success: true };
  } catch (error) {
    console.error("Logout failed", error);
    return { success: false, error: "Logout failed" };
  }
};
