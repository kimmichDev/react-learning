export const create = (user) => {
    return (dispatch) => {
        dispatch({
            type: "create",
            user
        });
    };
};
export const drop = (user) => {
    return (dispatch) => {
        dispatch({
            type: "drop",
            user
        });
    };
};