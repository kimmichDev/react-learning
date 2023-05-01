import { Route, Routes } from "react-router-dom";
import Catgory from "./components/Catgory";
import Detail from "./components/Detail";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Catgory />}></Route>
      <Route path="/categories/:id" element={<Detail />}></Route>
    </Routes>
  );
}

export default App;
