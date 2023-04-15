const accountReducer = (state = 0, action) => {
    switch (action.type) {
        case "add":
            console.log(action.payload);
            return state + action.payload;
        case "substract":
            return state - action.payload;
        default:
            return state;
    }
}

export default accountReducer;