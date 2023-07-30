import { Navigate, useLocation } from "react-router-dom";

const ProtectedRouts = ({ children }) => {
  const location = useLocation();

  const currentUser = localStorage.getItem("email");
  if (currentUser === null) {
    if (
      location.pathname.includes("err-network") ||
      location.pathname.includes("error")
    ) {
      return <Navigate to="/" replace />;
    }
    return <Navigate to="/auth" replace />;
  }
  return children;
};

export default ProtectedRouts;
