import React from 'react'
import { Avatar, Divider, Grid, Typography } from '@mui/material'
import { useQuery } from '@apollo/client'
import { GET_AUTHOR_INFO } from '../../graphql/Querys'
import Loader from '../shared/Loader'
import { Link } from 'react-router-dom'
import ErrorGif from '../shared/ErrorGif'

function Authors() {
  const { loading , data , error } = useQuery(GET_AUTHOR_INFO)
  console.log(data);

  if (loading) return <Loader />

  if (error) return <ErrorGif/>
  return (
    <Grid container sx={{boxShadow : "rgba(0,0,0,0.1) 0px 4px 12px" , borderRadius : 4}}>
      {
        data.authors.map((author , index) => (
          <React.Fragment key={author.id}>
            <Grid item xs={12} padding={2}>
              <Link
                to={`/authors/${author.slug}`}
                style={{
                  width : "100%",
                  display : 'flex',
                  alignItems : 'center',
                  textDecoration : 'none',
                }}
              >
                {
                  author.avatar ? 
                    <Avatar
                      src={author.avatar.url}
                      sx={{marginLeft : 2}}
                    /> : 
                    <Avatar
                      sx={{marginLeft : 2}}
                    >
                      {author.name[0]}
                    </Avatar>
                }
                <Typography component='p' variant='p' color='text.secondary'>
                  {author.name}
                </Typography>
              </Link>
            </Grid>
            {
              index !== data.authors.length - 1 && (
                <Grid item xs={12}>
                  <Divider variant='middle'/>
                </Grid>
              )
            }
          </React.Fragment>
        ))
      }
    </Grid>
  )
}

export default Authors