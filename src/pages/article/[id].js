'use client'
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import PrimarySearchAppBar from '../../app/Components/HomeMenuBar'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { Button, Grid } from '@mui/material';
import { Container } from '@mui/system';
import {getUsers} from '../api/axios'
import { useGetArticles } from '../../hooks/useGetArticles'; 

const theme = createTheme();


export default function Article() {

const articles = useGetArticles();     
const tab = articles.articles ; 

const handleClick = ()=> {
    console.log(tab); 
};


    return (
        <ThemeProvider theme={theme} >
            <CssBaseline />
            <AppBar position="relative">
                <PrimarySearchAppBar />
            </AppBar>
            <Paper elevation={0} sx={{marginTop:12}}/>
            <Container sx={{  justifyContent: "center" }}>
                <Grid container direction='row' sx={{  minHeight: 600 }}>
                    <Grid container item direction='column'  xs={8} sx={{ backgroundColor: "blue" }}>
                        <Grid item xs={1} sx={{ backgroundColor: "#ff99ff" }}></Grid>
                        <Grid item xs={11} sx={{ backgroundColor: "#ffd11a" }}></Grid>
                    </Grid>
                    <Grid container item xs={4} direction='column'>
                        <Grid container item xs={11} sx={{ backgroundColor: "#ffa11a" }} direction='column'>
                        </Grid>
                        <Grid item xs={1} sx={{ backgroundColor: "#bba11a" }} ></Grid>
                    </Grid>
                </Grid>
            </Container>
            <Button onClick={()=>handleClick()}>Click Me</Button>


          
        </ThemeProvider>
    );
}
