import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/authcontext.jsx";
import { Children } from "react";

const ProtectedRoute = ({ children }) => {
  const { user } = useAuth();

  // If user is not authenticated, redirect to login page
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // If role is specified and user doesn't have it, redirect
  if (user.role !== "admin") {
    return <Navigate to="/unauthorized" replace />; // or your preferred redirect
  }

  return children;
};

export default ProtectedRoute;
