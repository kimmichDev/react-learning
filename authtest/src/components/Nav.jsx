import Cookies from "js-cookie";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Nav() {
  const navigate = useNavigate();

  const logoutHandler = () => {
    Cookies.remove("user");
    Cookies.remove("token");
    navigate("/login");
  };

  const { user } = useSelector((state) => state.authSlice);

  return (
    <div className="w-12/12 flex justify-between items-center px-11 py-5 bg-slate-100">
      <p className="text-xl">React Auth</p>
      <div className="flex justify-between">
        <div className="me-4">
          <p>User : {user?.name}</p>
          <p>Email : {user?.email}</p>
        </div>
        <button onClick={logoutHandler} className="border-0 bg-indigo-200 hover:bg-indigo-300 transition text-indigo-600 px-5 py-1 rounded-md">
          Logout
        </button>
      </div>
    </div>
  );
}

export default Nav;
