import { React, createContext, useContext, useState } from "react";
import axios from "axios";

const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );
  const [usertoken, setuserToken] = useState(localStorage.getItem("token"));

  const axiosInstance = axios.create({
    baseURL: "http://localhost:3000/api",
    headers: {
      "Content-Type": "application/json",
    },
  });

  axiosInstance.interceptors.request.use((config) => {
    if (usertoken) {
      config.headers["Authorization"] = `Bearer ${usertoken}`;
    }
    return config;
  });

  const login = async (username, password) => {
    try {
      const response = await axiosInstance.post("/auth/login", {
        username,
        password,
      });
      console.log(`Login response:`, response);
      const { userDetails, token } = response.data;
      setUser(userDetails);
      setuserToken(token);
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(userDetails));

      return { success: true };
    } catch (error) {
      console.error("Login failed", error);
      return {
        success: false,
        error: error.response?.data?.message || "Login failed",
      };
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setuserToken("");
  };
  return (
    <AuthContext.Provider value={{ user, login, logout, axiosInstance }}>
      {children}
    </AuthContext.Provider>
  );
};
