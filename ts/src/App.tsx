import React from "react";
import Home from "./Home";

const App = () => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => console.log(e);
  return (
    <>
      <div>App</div>
      <button onClick={e => handleClick(e)}>Hello</button>
      <Home handleProp={e => handleClick(e)} style={{ background: 'blue' }}>
        Home par
      </Home>
    </>
  )
}

export default App