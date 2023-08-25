import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Avatar, Box, Button, Container } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import '../../styles/header.css'
import { exit } from '../../redux/login/loginAction';

export default function Header() {
  const navigate = useNavigate()
  const userDataState = useSelector(state => state.loginState.userData)
  const dispatch = useDispatch()
  const exitHandler = () => {
    window.localStorage.removeItem('data')
    dispatch(exit())
    navigate('/')
  }
  return (
    <AppBar position="sticky">
      <Container maxWidth="lg">
        <Toolbar sx={{display : "flex" , justifyContent : "space-between"}}>
          <Link
            to={'/'}
            style={{
              textDecoration : "none",
              color : "white",
            }}
          >
            <Typography variant="h6" component="h1" fontWeight="700">
              وبلاگ
            </Typography>
          </Link>
          {
            userDataState !== null ?
              <Box className='box' component='div' display='flex' alignItems='center' bgcolor='#fff' padding={'2px 5px'} borderRadius={5}>
                <Typography className='text' component='p' variant='p' color='primary'>{userDataState.name}</Typography>
                <Typography className='exit' component='p' variant='p' fontWeight={700} color='primary' onClick={exitHandler}>خروج</Typography>
                {
                  userDataState.avatar ?
                    <Avatar src={userDataState.avatar.url} sx={{marginRight : 1}} /> :
                    <Avatar sx={{marginRight : 1}}>{userDataState.name[0]}</Avatar>
                  
                }
              </Box>
              :
              <Link to={`/login`} style={{
                textDecoration : "none",
                color : "white",
              }}>
                <Button variant='outlined' sx={{color : "#fff" , border : "1px solid #fff" , '&:hover' : {background : "#fff" , color : "#009688" , border : 0}}}>ورود</Button>
              </Link>
          }
        </Toolbar>
      </Container>
    </AppBar>
  );
}