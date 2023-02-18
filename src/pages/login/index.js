'use client'
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';



const theme = createTheme();

export default function SignInSide() {


  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  const login = () => {

  }

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(https://scontent-lis1-1.xx.fbcdn.net/v/t39.30808-6/242498885_1107040016369263_9179212321896339566_n.png?_nc_cat=104&ccb=1-7&_nc_sid=e3f864&_nc_eui2=AeEWVFRj__6J8VD-HVOJ1cq3lomS3anvOdGWiZLdqe850btlQPDGT5vbDUBxfHt4IgCGEZtLpBHjIO_ASJncyox6&_nc_ohc=78MqweGYtMEAX8wk_zA&_nc_ht=scontent-lis1-1.xx&oh=00_AfAkElEb6BErpzNPD1sDdUZDpSSFhLR3fOerrFFyOoZ2fA&oe=63F2A99A)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: '303167' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <Grid container justifyContent="space-between" alignItems="center">
                <Grid item><FormControlLabel item
                  control={<Checkbox value="remember" color="primary" />}
                  label="Remember me"
                /></Grid>
                <Grid item><Link item href={"/articles/1"}  sx={{ fontWeight: 'bold',fontSize:15, paddingLeft:3,  backgroundColor: "#ff067e", textDecoration: "none", color: "white", p: 1, borderRadius: 1 }}>
                  Login
                </Link></Grid>


              </Grid>
              <Grid container >
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="#" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}