import React, { useMemo, useState } from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import { authService } from '../service/AuthService';

const theme = createTheme();

export default function SignIn() {
    const [user, setUser] = useState({email:'' , password:''})

  const handleSubmit = () => {
        authService.login(user)
  };

  const handleChangeInput = (e) =>{
    const {name, value} = e.target
    setUser((prevState)=>{
        return {
            ...prevState,
            [name] : value
        }
    })
  }

  const isButtonDisabled = useMemo(() =>{
    const {email, password} = user
    return email.length < 6 || password.length < 6
  }, [user])

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              value={user.email}
              id="email"
              label="Email Address"
              name="email"
              autoComplete="off"
              inputProps={{autoComplete:'false'}}
              autoFocus
              onChange={handleChangeInput}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              value={user.password}
              inputProps={{autoComplete:'false'}}
              label="Password"
              type="password"
              id="password"
              onChange={handleChangeInput}
              autoComplete="off"
            />
            <Button
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              disabled={isButtonDisabled}
              onClick={handleSubmit}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item>
                <Link to="/">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}