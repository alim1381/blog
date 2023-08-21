import React, { useState } from 'react'
import { Button, Container, Grid, TextField, Typography } from '@mui/material'
import { useMutation } from '@apollo/client'
import { CREATE_COMMENT } from '../../graphql/Mutation'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import Comments from './Comments'

function CommentForm({slug}) {
  const [sendData , setSendData] = useState({
    name : "",
    email : "",
    text : "",
  })
  const [pressed , setPressed] = useState(false)
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

  console.log(data);
  const sendHandler = () => {
    if (sendData.name && sendData.email && sendData.text) {
      sendComment()
      setPressed(true)
    } else {
      toast.warn("لطفا تمام فیلد ها را پر کنید" , {position : "top-center"})
    }
  }
  
  if (data && pressed) {
    toast.success("نظر شما ثبت گردید و در صورت تایید نمایش داده میشود" , {position : "top-center"})
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
        <Grid item xs={12} p={2}>
          <TextField
            variant='outlined'
            id='name'
            label='نام'
            sx={{width : '100%'}}
            value={sendData.name}
            onChange={changeHandler}
          />
        </Grid>
        <Grid item xs={12} p={2}>
          <TextField
            variant='outlined'
            id='email'
            label='ایمیل'
            sx={{width : '100%'}}
            value={sendData.email}
            onChange={changeHandler}
          />
        </Grid>
        <Grid item xs={12} p={2}>
          <TextField
            variant='outlined'
            id='text'
            label='متن کامنت'
            sx={{width : '100%'}}
            value={sendData.text}
            onChange={changeHandler}
            multiline
            minRows={4}
          />
        </Grid>
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