import React, { useEffect, useState } from 'react'
import { Button, Container, Grid, TextField, Typography } from '@mui/material'
import RTL from '../../mui/RTL'
import { useMutation } from '@apollo/client'
import { CREATE_NEW_AUTHOR, PUBLISH_AUTHOR } from '../../graphql/Mutation'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import { signinValidation } from '../../helper/validation'

function SigninPage() {

  const navigate = useNavigate()

  // states ----------------------------------------
  const [sendData , setSendData] = useState({
    username : "",
    name : "",
    field : "",
    description : "",
  })
  const [errors , setErrors] = useState({})
  const [showErrors , setShowErrors] = useState({})
  const [press , setPress] = useState(false)
  const [publishProcess , setPublishProcess] = useState(false)

  // handlers --------------------------------------
  const textChangeHandler = (e) => {
    setSendData(prev => ({
      ...prev,
      [e.target.id] : e.target.value
    }))
  }
  const focusHandeler = (e) => {
    setShowErrors((prev) => ({
      ...prev,
      [e.target.id] : true
    }))
  }

  // useEffects ------------------------------------
  useEffect(() => {
    setErrors(signinValidation(sendData))
  } , [sendData])

  // mutation --------------------------------------
  const [sendAuthorDetails , {loading , data , error}] = useMutation(CREATE_NEW_AUTHOR , {
    variables : {
      username : sendData.username,
      name : sendData.name,
      field : sendData.field,
      description : sendData.description,
    }
  })
  const [publishAuthor , datas] = useMutation(PUBLISH_AUTHOR , {
    variables : {
      id : data ? data.createAuthor.id : ""
    }
  })
  // subHandlers -----------------------------------
  const subHandler = () => {
    sendAuthorDetails()
    setPress(true)
  }

  // if SUCCESS
  if (data && data.createAuthor && press) {
    setPublishProcess(data.createAuthor)
    toast.success("ثبت نام انجام شد و در حال تایید میاشد...")
    publishAuthor()
    setPress(false)
  } else if (error && press) {
    setPress(false)
    setErrors({username : "نام کاربری وارد شده صحیح نمی باشد"})
    setShowErrors({
      username : true,
      name : true,
      field : true,
      description : true,
    })
  }
  if (datas.data) {
    toast.success('ثبت نام با موفقیت انجام شد')
    window.localStorage.setItem('data' , JSON.stringify(data.createAuthor))
    console.log(datas.data.publishAuthor.slug);
    navigate(`/authors/${datas.data.publishAuthor.slug}`)
  }
  return (
    <Container maxWidth='xs'>
      <ToastContainer />
        <Grid container sx={{ boxShadow : "rgba(0,0,0,0.1) 0px 4px 12px" , borderRadius : 4 , marginTop : 5}}>
            <Grid item xs={12} p={2}>
              <Typography component='h3' variant='h6' fontWeight={700} color='primary'>ثبت حساب کاربری جدید</Typography>
            </Grid>
            <RTL>
              <Grid item xs={12} p={2}>
                {
                  errors.username && showErrors.username ? 
                    <TextField
                      variant='outlined'
                      id='username'
                      label={`نام کاربری (${errors.username})`}
                      sx={{width : '100%'}}
                      value={sendData.username}
                      onChange={textChangeHandler}
                      fullWidth
                      error
                    /> : 
                    <TextField
                      variant='outlined'
                      id='username'
                      label='نام کاربری'
                      sx={{width : '100%'}}
                      value={sendData.username}
                      onChange={textChangeHandler}
                      onFocus={focusHandeler}
                      fullWidth
                    />
                }
              </Grid>
              <Grid item xs={12} p={2}>
                {
                  errors.name && showErrors.name ? 
                    <TextField
                      variant='outlined'
                      id='name'
                      label={`نام (${errors.name})`}
                      sx={{width : '100%'}}
                      value={sendData.name}
                      onChange={textChangeHandler}
                      fullWidth
                      error
                    /> : 
                    <TextField
                      variant='outlined'
                      id='name'
                      label='نام'
                      sx={{width : '100%'}}
                      value={sendData.name}
                      onChange={textChangeHandler}
                      onFocus={focusHandeler}
                      fullWidth
                    />
                }
              </Grid>
              <Grid item xs={12} p={2}>
                {
                  errors.field && showErrors.field ? 
                    <TextField
                      variant='outlined'
                      id='field'
                      label={`حوضه فعالیتی (${errors.field})`}
                      sx={{width : '100%'}}
                      value={sendData.field}
                      onChange={textChangeHandler}
                      fullWidth
                      error
                    /> : 
                    <TextField
                      variant='outlined'
                      id='field'
                      label='حوزه فعالیتی'
                      sx={{width : '100%'}}
                      value={sendData.field}
                      onChange={textChangeHandler}
                      onFocus={focusHandeler}
                      fullWidth
                    />
                }
              </Grid>
              <Grid item xs={12} p={2}>
                {
                  errors.description && showErrors.description ? 
                    <TextField
                      variant='outlined'
                      id='description'
                      label={`توضیحات (${errors.description})`}
                      sx={{width : '100%'}}
                      value={sendData.description}
                      onChange={textChangeHandler}
                      fullWidth
                      multiline
                      minRows={4}
                      error
                    /> : 
                    <TextField
                      variant='outlined'
                      id='description'
                      label='توضیحات'
                      sx={{width : '100%'}}
                      value={sendData.description}
                      onChange={textChangeHandler}
                      onFocus={focusHandeler}
                      fullWidth
                      multiline
                      minRows={4}
                    />
                }
              </Grid>
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
                    ثبت نام
                  </Button>
              }
        </Grid>
        </Grid>
    </Container>
  )
}

export default SigninPage