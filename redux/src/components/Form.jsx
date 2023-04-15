import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators, userActionCreators } from "../store/actionCreator";

function Form() {
  const [userInfo, setUser] = useState({ username: "", email: "" });
  const { username, email } = userInfo;
  //   redux
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const { create, drop } = bindActionCreators({ ...actionCreators, ...userActionCreators }, dispatch);
  const formHandler = (e) => {
    e.preventDefault();
    create(userInfo);
  };
  return (
    <form onSubmit={formHandler}>
      <label htmlFor="">Name</label>
      <input type="text" value={username} onChange={(e) => setUser({ ...userInfo, username: e.target.value })} />
      <label htmlFor="">Email</label>
      <input type="email" value={email} onChange={(e) => setUser({ ...userInfo, email: e.target.value })} />
      <button type="submit">Add</button>
    </form>
  );
}

export default Form;
