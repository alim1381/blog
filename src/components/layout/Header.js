import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import BookIcon from '@mui/icons-material/Book';
import { Container } from '@mui/material';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <AppBar position="sticky">
      <Container maxWidth="lg">
        <Toolbar sx={{display : "flex" , justifyContent : "space-between"}}>
          <Link
            to={'/'}
            style={{
              textDecoration : "none",
              color : "white",
            }}
          >
            <Typography variant="h6" component="h1" fontWeight="700">
              وبلاگ
            </Typography>
          </Link>
          <BookIcon/>
        </Toolbar>
      </Container>
    </AppBar>
  );
}