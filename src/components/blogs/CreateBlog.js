import { Button, Container, Grid, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import RTL from '../../mui/RTL'
import { useMutation } from '@apollo/client'
import { ToastContainer, toast } from 'react-toastify'
import { CREATE_POST } from '../../graphql/Mutation'
import { postValidation } from '../../helper/validation'
import { useSelector } from 'react-redux'
import { randomSlug } from '../../helper/randomSlug'

function CreateBlog() {

  const userDataState = useSelector(state => state.loginState.userData)
  const [sendData , setSendData] = useState({
    title : "",
    content : "",
    slug : ""
  })

  const [errors , setError] = useState({})
  const [showErrors , setShowErrors] = useState({})
  const [pressed , setPressed] = useState(false)
  
  // error and date and slug
  useEffect(() => {
    setError(postValidation(sendData))
    if (!sendData.slug) {
      setSendData(prev => ({
        ...prev,
        slug : randomSlug("ali")
      }))
    }
  } , [sendData])

  // api
  const [sendPost , {loading , data , error}] = useMutation(CREATE_POST , {
    variables : {
      title : sendData.title,
      content : sendData.content,
      slug : sendData.slug,
      id : userDataState.id,
    }
  })
  
  // sendhandler
  const sendHandler = () => {
    if (Object.keys(errors).length === 0) {
      sendPost()
      setPressed(true)
    } else {
      setShowErrors({
        title : true,
        content : true,
      })
      toast.warn("لطفا تمام فیلد ها را پر کنید" , {position : "top-center"})
    }
  }

  // change and focus Handler
  const changeHandler = (e) => {
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

  // after called
  if (data && pressed) {
    toast.success("پست جدید شما ثبت گردید و در صورت تایید نمایش داده میشود" , {position : "top-center"})
    setPressed(false)
    setSendData({
      title : "",
      content : "",
      slug : ""
    })
    setShowErrors({})
  }

  return (
    <Container maxWidth='lg' sx={{
      display : "flex" ,
      justifyContent : "center"
    }}>
      <ToastContainer />
      <Grid
        container
        p={3}
        mt={4}
        sx={{
          maxWidth : "800px" ,
          boxShadow : "rgba(0,0,0,0.1) 0px 4px 12px",
          borderRadius : 4
        }}
      >
        <Grid item>
          <Typography component='h2' variant='h6' fontWeight={700} color='primary' mb={3}>ساخت مقاله</Typography>
        </Grid>
        <RTL>
          <Grid item xs={12} mb={2}>
            {
              errors.title && showErrors.title ? 
                <TextField
                  variant='outlined'
                  id='title'
                  label={`عنوان (${errors.title})`}
                  sx={{width : '100%'}}
                  value={sendData.title}
                  onChange={changeHandler}
                  error
                /> : 
                <TextField
                  variant='outlined'
                  id='title'
                  label='عنوان'
                  sx={{width : '100%'}}
                  value={sendData.title}
                  onChange={changeHandler}
                  onFocus={focusHandeler}
                />
            }
          </Grid>
          <Grid item xs={12} mb={2}>
            {
              errors.content && showErrors.content ? 
                <TextField
                  variant='outlined'
                  id='content'
                  label={`متن (${errors.content})`}
                  sx={{width : '100%'}}
                  value={sendData.content}
                  onChange={changeHandler}
                  multiline
                  minRows={4}
                  error
                /> : 
                <TextField
                  variant='outlined'
                  id='content'
                  label='متن'
                  sx={{width : '100%'}}
                  value={sendData.content}
                  onChange={changeHandler}
                  onFocus={focusHandeler}
                  multiline
                  minRows={4}
                />
            }
          </Grid>
        </RTL>
        <Grid item xs={12} >
          {
            loading ? 
              <Button variant='contained' fullWidth disabled>درحال ارسال</Button> :
              <Button variant='contained' fullWidth onClick={sendHandler}>ارسال</Button> 
          }
        </Grid>
      </Grid>
    </Container>
  )
}

export default CreateBlog