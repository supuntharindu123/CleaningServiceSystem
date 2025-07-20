import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./componets/Login";
import Footer from "./componets/Footer";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import Navbar from "./componets/NavBar";
import BookingPage from "./pages/BookingPage";

import NotFound from "./pages/NotFound";
import UnAuthorizedPage from "./pages/UnAuthorizedPage";
import ProtectedRoute from "./routes/ProtectedRoute";
import HomePage from "./pages/HomePage";
import DashBoardPage from "./pages/DashBoardPage";
import UpdateBookingPage from "./pages/UpdateBookingPage";

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
