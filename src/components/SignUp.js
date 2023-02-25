import React, { useCallback, useMemo, useState } from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { authService } from '../service/AuthService';
import { Link } from 'react-router-dom';

const theme = createTheme();

export default function SignUp() {
    const [user, setUser] = useState({
            name:'',
            age:'',
            email:'',
            password:'',
            password_confirmation: ''
        })

    const handleChangeInput = ({e, isNumber})=>{
      console.log('asdsad');
        const {name, value} = e.target
        if(isNumber){
            const reg =/^\d+$/g;
            if(!reg.test(value)){
                return
            }
        }
        setUser((prevState)=>{
            return {
                ...prevState,
                [name] : value
            }
        })
    }
    
    const isDisabled = useMemo(()=>{
        const {name, age, email, password, password_confirmation} = user
        const reg = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
        return name.length < 4 || age.length < 2 || email.length < 6 || !reg.test(email)  || password.length < 5 || password_confirmation.length < 5 || password!== password_confirmation
    }, [user])

    const handleSubmit = useCallback((event) => {
        authService.register(user)
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
            Sign up
          </Typography>
          <Box component="form" noValidate sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  autoComplete="given-name"
                  name="name"
                  required
                  fullWidth
                  id="name"
                  label="First Name"
                  autoFocus
                  value={user.name}
                  onChange={(e) => handleChangeInput({e})}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  autoComplete="given-age"
                  name="age"
                  required
                  fullWidth
                  id="age"
                  label="Age"
                  value={user.age}
                  inputProps={{maxLength:2}}
                  onChange={(e) => handleChangeInput({e, isNumber:true})}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  value={user.email}
                  onChange={(e) => handleChangeInput({e})}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  value={user.password}
                  autoComplete="new-password"
                  onChange={(e)=>handleChangeInput({e})}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password_confirmation"
                  label="Confirm password"
                  type="password"
                  id="password_confirmation"
                  value={user.password_confirmation}
                  autoComplete="new-password"
                  onChange={(e)=>handleChangeInput({e})}
                />
              </Grid>
            </Grid>
            <Button
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              disabled={isDisabled}
              onClick={handleSubmit}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link to="/login" >
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      
      </Container>
    </ThemeProvider>
  );
}