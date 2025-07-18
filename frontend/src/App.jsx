import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./componets/Login";

function App() {
  const router = [
    {
      path: "/login",
      element: <Login />,
    },
  ];
  return (
    <BrowserRouter>
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
    </BrowserRouter>
  );
}

export default App;
