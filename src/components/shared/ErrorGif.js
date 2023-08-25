import React from 'react'
import Error from '../../assets/gifs/error.gif'
import { Typography } from '@mui/material'
function ErrorGif() {
  return (
    <div
        style={{
            width : "100%",
            height : "1000px",
            display : "flex",
            flexDirection : "column",
            // justifyContent : "center",
            alignItems : "center",
            marginTop : "50px"
        }}
    >
        <img width='200px' height='200px' style={{borderRadius : "50%"}} src={Error} alt="404" />
        <Typography component='p' variant='p' marginTop={1} color='text.secondary'>خطا در برقراری ارتباط!</Typography>
    </div>
  )
}

export default ErrorGif