import React from 'react'
import { useQuery } from '@apollo/client'
import { Grid } from '@mui/material'
import { GET_BLOGS_INFO } from '../../graphql/Querys'
import CartEL from '../shared/CartEL'

function Blogs() {

  const { loading , data , error } = useQuery(GET_BLOGS_INFO)

  if (loading) return <h4>Loading...</h4>
  if (error) return <h4>Error...</h4>

  return (
    <Grid container spacing={2} >
      {
        data.posts.map(post => (
          <Grid item xs={12} sm={6} md={4} key={post.id}>
            <CartEL {...post} />
          </Grid>
        ))
      }
    </Grid>
  )
}

export default Blogs