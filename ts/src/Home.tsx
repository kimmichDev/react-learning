import React from "react";
import { propType } from "./types/Home/home.type";

const Home = ({ handleProp, style, children }: propType) => {
    return (
        <>
            <div>{children}</div>
            <button onClick={e => handleProp(e)} style={style}>Child</button>
        </>

    )
}

export default Home