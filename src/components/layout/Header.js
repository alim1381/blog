import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import BookIcon from '@mui/icons-material/Book';
import { Container } from '@mui/material';

export default function Header() {
  return (
    <AppBar position="sticky">
      <Container maxWidth="lg">
        <Toolbar>
          <Typography variant="h6" component="h1" fontWeight="700" flex={1}>
            وبلاگ
          </Typography>
          <BookIcon/>
        </Toolbar>
      </Container>
    </AppBar>
  );
}