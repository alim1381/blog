import React, { useState } from 'react'
import { Box, Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
function AddIconButton() {
  return (
    <Link to='/createblog'>
        <Box component='div' sx={{
            borderRadius : "50%",
            background : "#009688",
            position : "fixed",
            right : "0",
            bottom : "0",
            color : "#fff",
            fontSize : "30px",
            width : "50px",
            height : "50px",
            padding : "5px",
            margin : "20px",
            display : "flex",
            justifyContent : "center",
            alignItems : "center",
            cursor : "pointer",
            transition : "0.2s",
            zIndex: "20",
            '&:hover' : {
                background :'#26a69a',
            },
            '&:active' : {
                background :'#00897b',
            }

            
        }}>
            <Typography component='p' variant='p'>+</Typography>
        </Box>
    </Link>
  )
}

export default AddIconButton