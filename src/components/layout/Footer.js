import React from 'react'
import { Typography } from '@mui/material'

function Footer() {
  return (
    <footer style={{width  : '100%' , display : 'flex' , justifyContent : 'center'}}>
        <Typography 
          component='p'
          variant='p'
          bgcolor='#f7f7f7'
          width='fit-content'
          color='primary'
          padding='10px'
          textAlign="center"
          borderRadius={15}
          mt={10}
          mb={1}
        >
        وبلاگ | نویسنده : alim
        </Typography>
    </footer>
  )
}

export default Footer