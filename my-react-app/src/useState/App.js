import { useState, useEffect } from "react";

let App = () => {
    let [count, setCount] = useState(0);
    const increment = () => {
        setCount(prev => {
            console.log(prev);
            return prev + 1;
        });
        if (count > 5) {
            alert("cant more");
        }
    }

    const decrement = _ => setCount(prev => prev <= 0 ? alert("fail") : prev - 1);


    return (
        <section>
            <p>Count : {count}</p>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
        </section>
    );
}

export default App;