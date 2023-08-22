import { useQuery } from '@apollo/client'
import React from 'react'
import { GET_POST_COMMENTS } from '../../graphql/Querys'
import { Avatar, Box, Grid, Typography } from '@mui/material';

function Comments({slug}) {
  const { loading , data , error } = useQuery(GET_POST_COMMENTS , {variables : {slug}})
  if (loading) return null
  return (
    <Grid
      container
      p={2}
      mt={4}
      sx={{
        boxShadow : "rgba(0,0,0,0.1) 0px 4px 12px",
        borderRadius : 4,
        display : "flex",
        flexDirection : "column "
      }}
    >
      <Typography component='p' variant='h6' fontWeight={700} color='primary'>کامنت ها</Typography>
      {
        data.comments.length > 0 ? data.comments.reverse().map(comment => (
          <Grid key={comment.id} item xs={12} border='1px solid silver' borderRadius={4} p={2} mt={2}>
            <Box component='div' display='flex' alignItems='center'>
              <Avatar>{comment.name[0]}</Avatar>
              <Typography component='p' variant='p' fontWeight={700} mr={1}>{comment.name}</Typography>
            </Box>
            <Typography component='p' variant='p' mt={2}>{comment.text}</Typography>
          </Grid>
        )) :
        <Typography component='p' variant='p' textAlign='center' color='text.secondary' mt={2}>کامنتی برای این مقاله ثبت نشده</Typography>
      }
    </Grid>
  )
}

export default Comments;