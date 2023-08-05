import React, { useContext } from "react";
import Home from "./Home";
import Reduce from "./Reduce";
import { ThemeContext, ThemeContextProvider } from "./contexts/ThemeContext";
import AuthContextProvider from "./contexts/AuthContextProvider";

const App = () => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => console.log(e);
  const theme = useContext(ThemeContext);
  return (
    <AuthContextProvider>
      <ThemeContextProvider>
        <button onClick={e => handleClick(e)}>Hello</button>
        <Home handleProp={e => handleClick(e)} style={{ background: 'blue' }}>
          Home par
        </Home>
        <hr />
        {theme.secondary}
        <Reduce />
      </ThemeContextProvider>
    </AuthContextProvider>
  )
}

export default App