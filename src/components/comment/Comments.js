import { useQuery } from '@apollo/client'
import React from 'react'
import { GET_POST_COMMENTS } from '../../graphql/Querys'
import { Grid } from '@mui/material';

function Comments({slug}) {
    const { loading , data , error } = useQuery(GET_POST_COMMENTS , {variables : {slug}})
    console.log(data);
  return (
    <Grid
      container
      sx={{
        boxShadow : "rgba(0,0,0,0.1) 0px 4px 12px",
        borderRadius : 4
      }}
    >
      
    </Grid>
  )
}

export default Comments;