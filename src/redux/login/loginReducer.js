const initialState = {
    userData : null
}

const loginRaducer = (state = initialState , action) => {
    switch (action.type) {
        case "FETCH_LOGIN_SUCCESS":
            return {
                userData : action.payload
            }
        case "EXIT":
            return {
                userData : null
            }
        default:
            return state;
    }
}

export default loginRaducer;