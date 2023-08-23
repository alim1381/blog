const initialState = {
    userData : {}
}

const loginRaducer = (state = initialState , action) => {
    switch (action.type) {
        case "FETCH_LOGIN_SUCCESS":
            return {
                userData : action.payload
            }
        default:
            return state;
    }
}

export default loginRaducer;