import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import Navbar from "./components/NavBar";
import BookingPage from "./pages/BookingPage";

import NotFound from "./pages/NotFound";
import UnAuthorizedPage from "./pages/UnAuthorizedPage";
import ProtectedRoute from "./routes/ProtectedRoute";
import HomePage from "./pages/HomePage";
import DashBoardPage from "./pages/DashBoardPage";
import UpdateBookingPage from "./pages/UpdateBookingPage";
import AdminPage from "./pages/AdminPage";

import AdminServicePage from "./pages/AdminServicePage";
import AdminUserPage from "./pages/AdminUserPage";

function App() {
  const router = [
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/login",
      element: <LoginPage />,
    },
    {
      path: "/register",
      element: <RegisterPage />,
    },
    {
      path: "/booking",
      element: <BookingPage />,
    },
    {
      path: "/booking/:id",
      element: <UpdateBookingPage />,
    },
    {
      path: "/dashboard",
      element: <DashBoardPage />,
    },
    {
      path: "/admin",
      element: (
        <ProtectedRoute>
          <AdminPage />
        </ProtectedRoute>
      ),
    },
    {
      path: "/admin/users",
      element: <AdminUserPage />,
    },
    {
      path: "/admin/services",
      element: <AdminServicePage />,
    },
    {
      path: "*",
      element: <NotFound />,
    },
    {
      path: "/unauthorized",
      element: <UnAuthorizedPage />,
    },
  ];
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        {router.map((routes) => {
          return (
            <Route
              key={routes.path}
              path={routes.path}
              element={routes.element}
            />
          );
        })}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
