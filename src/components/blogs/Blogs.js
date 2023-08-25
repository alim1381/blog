import React from 'react'
import { useQuery } from '@apollo/client'
import { Grid } from '@mui/material'
import { GET_BLOGS_INFO } from '../../graphql/Querys'
import CardEL from '../shared/CardEL'
import Loader from '../shared/Loader'
import ErrorGif from '../shared/ErrorGif'

function Blogs() {

  const { loading , data , error } = useQuery(GET_BLOGS_INFO)

  if (loading) return <Loader />
  if (error) return <ErrorGif/>

  return (
    <Grid container spacing={2} >
      {
        data.posts.map(post => (
          <Grid item xs={12} sm={6} md={4} key={post.id}>
            <CardEL {...post} />
          </Grid>
        ))
      }
    </Grid>
  )
}

export default Blogs