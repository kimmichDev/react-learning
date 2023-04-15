import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators, userActionCreators } from "./store/actionCreator";
import ACompo from "./components/ACompo";
import Form from "./components/Form";
function App() {
  const account = useSelector((state) => state.account);
  const users = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const { add, substract, drop } = bindActionCreators({ ...actionCreators, ...userActionCreators }, dispatch);
  return (
    <div>
      <h1>{account}</h1>
      <ul>
        {users.map((user) => (
          <li onClick={() => drop(user.email)}>
            {user.username} || {user.email}
          </li>
        ))}
      </ul>
      <button onClick={() => add(10)}>Add</button>
      <button onClick={() => substract(10)}>Substract</button>
      <hr />
      <ACompo />
      <hr />
      <Form />
    </div>
  );
}

export default App;
