import { Navigate } from "react-router-dom";
import Cookies from "js-cookie";

const AuthRouteGuard = ({ children }) => {
  const auth_check = Cookies.get("token");
  if (auth_check) {
    return children;
  } else {
    return <Navigate to={"/login"} />;
  }
};

export default AuthRouteGuard;
