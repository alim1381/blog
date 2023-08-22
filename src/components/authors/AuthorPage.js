import React from 'react'
import { useParams } from 'react-router-dom'
import { GET_ONE_AUTHOR_INFO } from '../../graphql/Querys';
import { useQuery } from '@apollo/client';
import { Avatar, Container, Grid, Typography } from '@mui/material';
import sanitizeHtml from 'sanitize-html';
import CardEL from '../shared/CardEL';
import Loader from '../shared/Loader';

function AuthorPage() {
  const {slug} = useParams()
  const { loading , data , error } = useQuery(GET_ONE_AUTHOR_INFO , {variables : {slug : slug}})
  console.log(data);
  
  if (loading) return <Loader />
  if (error) return <h4>Error ...</h4>
  
  const {author : {avatar , name , description , posts , field}} = data;
  return (
    <Container maxWidth='lg'>
      <Grid container mt={10}>
        <Grid item xs={12} display='flex' flexDirection='column' alignItems='center' >
          {
            avatar ? 
              <Avatar src={avatar.url} alt={name} sx={{width : '250px' , height : '250px'}}/>
              : 
              <Avatar
              sx={{width : '250px' , height : '250px' , fontSize : 80}}
              >
                {name[0]}
              </Avatar>
          }
          <Typography component='h3' variant='h5' fontWeight={700} mt={4}>{name}</Typography>
          <Typography component='h3' variant='h5' color='text.secondary' mt={2}>{field}</Typography>
        </Grid>
        <Grid item xs={12} mt={5}>
          <div dangerouslySetInnerHTML={{__html : sanitizeHtml(description.html)}}></div>
        </Grid>
        <Grid item mt={6} sx={{width : "100%"}}>
          <Typography component='h3' variant='h5' fontWeight={700}>مقالات {name}</Typography>
          <Grid container spacing={2} mt={2} >
            {
              posts.map(post => (
                <Grid item xs={12} sm={6} md={3} key={post.id}>
                  <CardEL title={post.title} slug={post.slug} coverPhoto={post.coverPhoto} />
                </Grid>
              ))
            }
          </Grid>
        </Grid>
      </Grid>
    </Container>
  )
}

export default AuthorPage