'use client'
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import PrimarySearchAppBar from '../../app/Components/HomeMenuBar'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CardActionArea } from '@mui/material';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { useRouter } from 'next/router'
import Button from '@mui/material';

import {  MemoryRouter, Route, Routes, useLocation } from 'react-router-dom';
import {Link} from "next/router"
import usePagination from '@mui/material/usePagination';
import PaginationItem from '@mui/material/PaginationItem';


const cards = [
  1,  2,  3,   4,  5,  6,  7,  8,  9, 10, 11, 12,
 13, 14, 15,  16
];

const theme = createTheme();

const customisedButton = ()=>{

}


const Content = () => {
  const router = useRouter()
  const { pageId } = router.query
  const page = parseInt(pageId || '1', 10);
  return (
    <Pagination
      page={page}
      count={10}
      renderItem={(item) => (
        <PaginationItem
          component={Link}
          href={`/articles/${item.page}`}
          {...item}
        />
      )}
    />
  );
}

const ArticlesPage = () => {
  

  return (<Container sx={{ paddingTop: 14, paddingBottom: 5 }} maxWidth="md">
    {/* End hero unit */}
    <Grid container spacing={4}>
      {cards.map((card) => (
        <Grid item key={card} xs={12} sm={6} md={3}>
          <Card
            sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
          >
            <CardActionArea>
              <CardMedia
                component="img"
                image="https://scontent-lis1-1.xx.fbcdn.net/v/t39.30808-6/242474369_1107039696369295_4616048296092468392_n.png?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeHvnNZ5qiz3MyGPWnyUaTfRs4LgaVDwwt6zguBpUPDC3hi61C_OETbk1JzEuLwit0TSLObgQj1LqKNcW49i30T_&_nc_ohc=n1SPJ-Gla7YAX-590HF&_nc_ht=scontent-lis1-1.xx&oh=00_AfBJ6A2xDAtQtyzfwxlow35EUqsyIwhu6FBrjxucprOk5Q&oe=63F356AF"
                alt="random"
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h5" component="h2">
                  articleTitle
                </Typography>
                <Typography>
                  articleContent
                </Typography>
              </CardContent>

            </CardActionArea>
          </Card></Grid>
      ))}
    </Grid>
  </Container>)
}


export default function Album() {


  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="relative">
        <PrimarySearchAppBar />
      </AppBar>
      <main>
        {/* Hero unit */}
        <ArticlesPage />
        <Container >
          <Stack spacing={2} alignItems="center">
            <MemoryRouter initialEntries={['/articles']} initialIndex={0}>
              <Routes>
                <Route path="*" element={<Content />} />
              </Routes>
            </MemoryRouter>
          </Stack>
        </Container>

      </main>
      {/* Footer */}
      <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          Something here to give the footer a purpose!
        </Typography>
      </Box>
      {/* End footer */}
    </ThemeProvider>
  );
}
