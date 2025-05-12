import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  const storedUser = localStorage.getItem("loggedInUser");

  return storedUser ? <Outlet /> : <Navigate to="/შესვლა" />;
};

export default ProtectedRoute;
