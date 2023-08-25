import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { useDispatch } from 'react-redux'
import { fetchLoginSuccess } from '../../redux/login/loginAction'
import AddIconButton from './AddIconButton'
import { useLocation } from 'react-router-dom'
function Layout({children}) {
  const { pathname } = useLocation()
  const dispatch = useDispatch()

  const locData = window.localStorage.getItem('data')
  const isLogin = locData ? true : false
  
  if (isLogin) {
    dispatch(fetchLoginSuccess(JSON.parse(locData)))
  }

  return (
    <>
      <Header />
      {isLogin && pathname !== "/createblog" && <AddIconButton />}
        {children}
      <Footer />
    </>
  )
}

export default Layout