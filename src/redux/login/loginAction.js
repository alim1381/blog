const fetchLoginSuccess = (data) => {
    return {
        type : "FETCH_LOGIN_SUCCESS",
        payload : data
    }
}
const exit = () => {
    return {
        type : "EXIT",
    }
}

export { fetchLoginSuccess , exit }