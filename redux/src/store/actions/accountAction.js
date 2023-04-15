export const add = (amount) => {
    return (dispatch) => {
        dispatch({
            type: "add",
            payload: amount
        });
    };
}

export const substract = (amount) => {
    return (dispatch) => {
        dispatch({
            type: "substract",
            payload: amount
        });
    };
}

