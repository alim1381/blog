import React from 'react'
import { Avatar, Divider, Grid, Typography } from '@mui/material'
import { useQuery } from '@apollo/client'
import { GET_AUTHOR_INFO } from '../../graphql/Querys'

function Authors() {
  const { loading , data , error } = useQuery(GET_AUTHOR_INFO)
  console.log(data);

  if (loading) return <h4>Loading ...</h4>

  if (error) return <h4>Error ...</h4>
  return (
    <Grid container sx={{boxShadow : "rgba(0,0,0,0.1) 0px 4px 12px" , borderRadius : 4}}>
      {
        data.authors.map((author , index) => (
          <React.Fragment key={author.id}>
            <Grid item padding={2}>
              <a
                href={`/authors/${author.slug}`}
                style={{
                  width : "100%",
                  display : 'flex',
                  alignItems : 'center',
                  textDecoration : 'none',
                }}
              >
                <Avatar
                  src={author.avatar.url}
                  sx={{marginLeft : 2}}
                />
                <Typography component='p' variant='p' color='text.secondary'>
                  {author.name}
                </Typography>
              </a>
            </Grid>
            {
              index !== data.authors.length - 1 && 
              <Divider />
            }
          </React.Fragment>
        ))
      }
    </Grid>
  )
}

export default Authors