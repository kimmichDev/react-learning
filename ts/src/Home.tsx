import React, { useContext } from "react";
import { propType } from "./types/Home/home.type";
import { AuthContext } from "./contexts/AuthContextProvider";

const Home = ({ handleProp, style, children }: propType) => {
    const { user, setUser } = useContext(AuthContext)!;
    return (
        <>
            <div>{children}</div>
            <button onClick={e => handleProp(e)} style={style}>Child</button>
            <hr />
            <p>{user ? 'auth' : 'guest'}</p>
            <button onClick={() => setUser({ name: 'helo', isAdmin: false })}>login</button>
            <button onClick={() => setUser(null)}>logout</button>
        </>

    )
}

export default Home