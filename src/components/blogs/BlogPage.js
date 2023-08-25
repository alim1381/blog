import React from 'react'
import { useQuery } from '@apollo/client'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { GET_POST_INFO } from '../../graphql/Querys'
import { Avatar, Box, Container, Grid, Typography } from '@mui/material'
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
import CommentForm from '../comment/CommentForm'
import Loader from '../shared/Loader'
import sanitizeHtml from 'sanitize-html'

function BlogPage() {
  const { slug } = useParams()
  const navigate = useNavigate()

  const { loading , data , error } = useQuery(GET_POST_INFO , {
    variables : {slug : slug}
  })
  if (loading) return <Loader />

  if (error) return <h4>Error ...</h4>
  console.log(data);
  return (
    <Container maxWidth='lg'>
      <Grid container>
        <Grid
          item
          xs={12}
          mt={9}
          display='flex'
          justifyContent='space-between'
          alignItems='center'
        >
          <Typography
            component='h2'
            variant='h4'
            color='primary'
            fontWeight={700}
          >
            {data.post.title}
          </Typography>
          <ArrowBackRoundedIcon onClick={() => navigate(-1)}/>
        </Grid>
        <Grid item xs={12} mt={6}>
          <img
            src={data.post.coverPhoto.url}
            alt={data.post.title}
            width='100%'
            // height='620px'
            style={{borderRadius : 15}}
          />
        </Grid>
        <Grid item xs={12} mt={7} display='flex' alignItems='center'>
          <Link
            to={`/authors/${data.post.author.slug}`}
          >
            {
              data.post.author.avatar ? 
                <Avatar
                  src={data.post.author.avatar.url}
                  sx={{width : 80 , height : 80 , marginLeft : 2}}
                /> : 
                <Avatar
                  sx={{width : 80 , height : 80 , marginLeft : 2}}
                >
                  {data.post.author.name[0]}
                </Avatar>
            }
          </Link>
          <Box component='div'>
            <Typography
              component='p'
              variant='h5'
              fontWeight={700}
            >
              {data.post.author.name}
            </Typography>
            <Typography
              component='p'
              variant='p'
              color='text.secondary'
            >
              {data.post.author.field}
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} mt={5}>
          <Typography component='p' variant='p' sx={{width : "100%", wordWrap :"break-word"}} >{data.post.content}</Typography>
        </Grid>
        <Grid item xs={12} mt={5}>
          <CommentForm slug={slug} />
        </Grid>

      </Grid>

    </Container>
  )
}

export default BlogPage