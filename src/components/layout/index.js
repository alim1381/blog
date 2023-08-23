import React, { useEffect } from 'react'
import Header from './Header'
import Footer from './Footer'
import { useDispatch } from 'react-redux'
import { fetchLoginSuccess } from '../../redux/login/loginAction'
function Layout({children}) {

  const dispatch = useDispatch()
  useEffect(() => {
    const locData = window.localStorage.getItem('data')
    const isLogin = locData ? true : false
    if (isLogin) {
      dispatch(fetchLoginSuccess(JSON.parse(locData)))
    }
  } , [])

  return (
    <>
      <Header />
        {children}
      <Footer />
    </>
  )
}

export default Layout