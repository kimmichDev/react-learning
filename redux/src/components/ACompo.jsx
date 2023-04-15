import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../store/actionCreator";

function ACompo() {
  const account = useSelector((state) => state.account);
  console.log({ account });
  const dispatch = useDispatch();
  const { add, substract } = bindActionCreators(actionCreators, dispatch);
  return (
    <div>
      <h3>A Compo</h3>
      <h1>{account}</h1>
      <button onClick={() => add(5)}>Add</button>
      <button onMouseEnter={() => substract(5)}>Subtract</button>
    </div>
  );
}

export default ACompo;
