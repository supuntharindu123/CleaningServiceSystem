import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./componets/Login";
import Footer from "./componets/Footer";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import Navbar from "./componets/NavBar";
import BookingPage from "./pages/BookingPage";

function App() {
  const router = [
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
