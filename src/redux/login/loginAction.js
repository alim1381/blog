const fetchLoginSuccess = (data) => {
    return {
        type : "FETCH_LOGIN_SUCCESS",
        payload : data
    }
}

export { fetchLoginSuccess }