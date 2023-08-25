import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

function LoginAuth({Component}) {
  
  const userDataState = useSelector(state => state.loginState.userData)

  if (userDataState === null) {
    return Component
  } else {
    return <Navigate to={'/'} />
  }

}

export default LoginAuth