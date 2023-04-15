import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "./redux/authSlice";

function App() {
  const { value } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>{value ? "User" : "Guest"}</h1>
      <button onClick={() => dispatch(login(true))}>login</button>
      <button onClick={() => dispatch(logout(false))}>login</button>
    </div>
  );
}

export default App;
