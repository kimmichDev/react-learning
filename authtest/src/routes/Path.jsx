import { Route, Routes } from "react-router-dom";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import AuthRouteGuard from "./AuthRouteGuard";
function Path() {
  return (
    <Routes>
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route
        path="/dashboard"
        element={
          <AuthRouteGuard>
            <Dashboard />
          </AuthRouteGuard>
        }
      />
    </Routes>
  );
}

export default Path;
