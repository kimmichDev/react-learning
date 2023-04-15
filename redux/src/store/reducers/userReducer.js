const userReducer = (state = [], action) => {
    switch (action.type) {
        case "create":
            return [...state, action.user]
        case "drop":
            return state.filter(user => user.email != action.user)
        default:
            return state;
    }
}
export default userReducer;