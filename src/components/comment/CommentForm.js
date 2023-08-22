import React, { useEffect, useState } from 'react'
import { Button, Container, Grid, TextField, Typography } from '@mui/material'
import { useMutation } from '@apollo/client'
import { CREATE_COMMENT } from '../../graphql/Mutation'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import Comments from './Comments'
import RTL from '../../mui/RTL'
import { commentValidation } from '../../helper/validation'

function CommentForm({slug}) {
  const [sendData , setSendData] = useState({
    name : "",
    email : "",
    text : "",
  })
  const [pressed , setPressed] = useState(false)
  const [errors , setError] = useState({})
  const [showErrors , setShowErrors] = useState({})
  

  useEffect(() => {
    setError(commentValidation(sendData))
  } , [sendData])

  const changeHandler = (e) => {
    setSendData(prev => ({
      ...prev,
      [e.target.id] : e.target.value
    }))
  }

  const [sendComment , {loading , data , error}] = useMutation(CREATE_COMMENT , {
    variables : {
      name : sendData.name,
      email : sendData.email,
      text : sendData.text,
      slug : slug
    }
  })

  const sendHandler = () => {
    if (Object.keys(errors).length === 0) {
      sendComment()
      setPressed(true)
    } else {
      setShowErrors({
        name : true,
        email : true,
        text : true,
      })
      toast.warn("لطفا تمام فیلد ها را پر کنید" , {position : "top-center"})
    }
  }

  const focusHandeler = (e) => {
    setShowErrors((prev) => ({
      ...prev,
      [e.target.id] : true
    }))
  }
  if (data && pressed) {
    toast.success("نظر شما ثبت گردید و در صورت تایید نمایش داده میشود" , {position : "top-center"})
    setSendData({
      name : "",
      email : "",
      text : "",
    })
    setShowErrors({
      name : false,
      email : false,
      text : false,
    })
    setPressed(false)
  }
  return (
    <Container maxWidth='lg'>
      <Grid
        container
        py={1}
        mt={4}
        sx={{
          boxShadow : "rgba(0,0,0,0.1) 0px 4px 12px",
          borderRadius : 4
        }}
        >
        <Grid item xs={12} p={2}>
          <Typography component='p' variant='h6' fontWeight={700} color='primary'>ارسال کامنت</Typography>
        </Grid>
        <RTL>
          
          <Grid item xs={12} p={2}>
            {
              errors.name && showErrors.name ? 
                <TextField
                  variant='outlined'
                  id='name'
                  label={`نام (${errors.name})`}
                  sx={{width : '100%'}}
                  value={sendData.name}
                  onChange={changeHandler}
                  error
                /> : 
                <TextField
                  variant='outlined'
                  id='name'
                  label='نام'
                  sx={{width : '100%'}}
                  value={sendData.name}
                  onChange={changeHandler}
                  onFocus={focusHandeler}
                />
            }
          </Grid>
          <Grid item xs={12} p={2}>
            {
              errors.email && showErrors.email ? 
                <TextField
                  variant='outlined'
                  id='email'
                  label={`ایمیل (${errors.email})`}
                  sx={{width : '100%'}}
                  value={sendData.email}
                  onChange={changeHandler}
                  error
                /> : 
                <TextField
                  variant='outlined'
                  id='email'
                  label='ایمیل'
                  sx={{width : '100%'}}
                  value={sendData.email}
                  onChange={changeHandler}
                  onFocus={focusHandeler}
                />
            }
          </Grid>
          <Grid item xs={12} p={2}>
            {
              errors.text && showErrors.text ? 
                <TextField
                  variant='outlined'
                  id='text'
                  label={`متن (${errors.text})`}
                  sx={{width : '100%'}}
                  value={sendData.text}
                  onChange={changeHandler}
                  error
                /> : 
                <TextField
                  variant='outlined'
                  id='text'
                  label='متن'
                  sx={{width : '100%'}}
                  value={sendData.text}
                  onChange={changeHandler}
                  onFocus={focusHandeler}
                />
            }
          </Grid>
        </RTL>
        <Grid item xs={12} p={2} >
          {
            loading ? 
              <Button variant='contained' disabled>درحال ارسال</Button> :
              <Button variant='contained' onClick={sendHandler}>ارسال</Button> 
          }
        </Grid>
        <Grid item xs={12} p={2}>
          <Comments slug={slug} />
        </Grid>
      </Grid>
        <ToastContainer />
    </Container>
  )
}

export default CommentForm