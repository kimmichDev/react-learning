import React, { useReducer } from 'react'
type stateType = {
    count: number;
}
type actionType = {
    type: string;
    payload: number;
}
const initialState = {
    count: 0
};
const reducer = (state: stateType, action: actionType) => {
    switch (action.type) {
        case "increase":
            return {
                ...state,
                count: state.count + action.payload
            }
        case "decrease":
            return {
                ...state,
                count: state.count - action.payload
            }
        default:
            return state
    }
}
const Reduce = () => {
    const [count, setCount] = useReducer(reducer, initialState);
    return (
        <div>
            <p>{count.count}</p>
            <button onClick={() => setCount({ type: 'increase', payload: 1 })}>Increase</button>
            <button onClick={() => setCount({ type: 'decrease', payload: 1 })}>Decrease</button>
        </div>
    )
}

export default Reduce