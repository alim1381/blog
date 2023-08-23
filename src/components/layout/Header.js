import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Avatar, Box, Button, Container } from '@mui/material';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function Header() {
  const userDataState = useSelector(state => state.loginState.userData)
  console.log(userDataState);
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
            Object.keys(userDataState).length !== 0 ?
              <Box component='div' display='flex' alignItems='center'>
                <Typography component='p' variant='p'>{userDataState.name}</Typography>
                {
                  userDataState.avatar ?
                    <Avatar src={userDataState.avatar.url} sx={{marginRight : 1}} /> :
                    <Avatar>{userDataState.name[0]}</Avatar>
                  
                }
              </Box>
              :
              <Link to={`/login`}>
                <Button variant='outlined' sx={{color : "#fff" , border : "1px solid #fff" , '&:hover' : {background : "#fff" , color : "#009688" , border : 0}}}>ورود</Button>
              </Link>
          }
        </Toolbar>
      </Container>
    </AppBar>
  );
}