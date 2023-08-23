import React, { useState } from 'react'
import { Button, Container, Divider, FormControl, Grid, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField, Typography } from '@mui/material'
import RTL from '../../mui/RTL'
import { Visibility, VisibilityOff } from '@mui/icons-material'
import { Link, useNavigate } from 'react-router-dom';
import { useLazyQuery } from '@apollo/client';
import { GET_LOGIN_INFO } from '../../graphql/Querys';
import { useDispatch } from 'react-redux';
import { fetchLoginSuccess } from '../../redux/login/loginAction';

function LoginPage() {
  
  const navigate = useNavigate()

  const [sendData , setSendData] = useState({
    username : "",
    // password : ""
  })
  const [variabelsData , setVariabelsData] = useState({
    username : "",
    // password : ""
  })
  
  const dispatch = useDispatch()
  // const [showPassword, setShowPassword] = useState(false);
  
  // const handleClickShowPassword = () => setShowPassword((show) => !show);
  // const handleMouseDownPassword = (event) => {
    //   event.preventDefault();
    // };
    
  const textChangeHandler = (e) => {
    setSendData(prev => ({
      ...prev,
      [e.target.id] : e.target.value
    }))
  }

  // api
  const [getUserInfo , {loading , data , error , called}] = useLazyQuery(GET_LOGIN_INFO , {
    variables : { username : variabelsData.username }
  })
  console.log({loading , data , error});
  const subHandler = () => {
    if (!called) {
      getUserInfo()
    }
    setVariabelsData({username : sendData.username})
  }

  // Navigate
  if (data && data.author) {
    dispatch(fetchLoginSuccess(data.author))
    window.localStorage.setItem('data' , JSON.stringify(data.author))
    navigate(`/authors/${data.author.slug}`)
  }
  return (
    <Container maxWidth='xs'>
      <Grid container sx={{ boxShadow : "rgba(0,0,0,0.1) 0px 4px 12px" , borderRadius : 4 , marginTop : 5}}>
        <Grid item xs={12} p={2}>
          <Typography component='h3' variant='h6' fontWeight={700} color='primary'>ورود به حساب کاربری</Typography>
        </Grid>
        <RTL>
          <Grid item xs={12} p={2}>
            <TextField
              label='نام کاربری'
              variant='outlined'
              id='username'
              onChange={textChangeHandler}
              fullWidth
            />
          </Grid>
          {/* <Grid item xs={12} p={2}>
            <FormControl sx={{ width: '100%' }} variant="outlined">
              <InputLabel htmlFor="password">رمز عبور</InputLabel>
              <OutlinedInput
                id="password"
                onChange={textChangeHandler}
                type={showPassword ? 'text' : 'password'}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="رمزعبور"
                fullWidth

              />
            </FormControl>
          </Grid> */}
        </RTL>
        <Grid item xs={12} p={2}>
          {
            loading ? 
              <Button
                variant='contained'
                fullWidth
                disabled
              >
                درحال ارسال...
              </Button> :
              <Button
                variant='contained'
                fullWidth
                onClick={subHandler}
              >
                ورود
              </Button>
          }
        </Grid>
        <Grid item xs={12} p={2}>
          <Divider><Typography component='p' variant='p' color='text.secondary'>اگر حساب کاربری ندارید</Typography></Divider>
        </Grid>
        <Grid item xs={12} p={2}>
          <Typography
            component='p'
            variant='p'
            color='text.secondary'
            width='100%'
            textAlign='center'
          >
            از 
            <Link to='/signin' style={{padding : "0px 8px" , textDecoration : "none" , fontWeight : 700 , color : "#009688"}}>اینجا</Link>
            ثبت نام کنید
          </Typography>
        </Grid>
      </Grid>
    </Container>
  )
}

export default LoginPage