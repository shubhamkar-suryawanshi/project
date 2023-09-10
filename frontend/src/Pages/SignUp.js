import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import { Link } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from 'axios';

const defaultTheme = createTheme();

export default function SignUp() {
  const [allowed, setAllowed] = React.useState(false);
  const [inputData, setInputData] = React.useState({
    name: '',
    email: '',
    password: '',
  });
  const [nameError, setNameError] = React.useState(false);
  const [emailError, setEmailError] = React.useState(false);
  const [passwordError, setPasswordError] = React.useState(false);

  const handleName = (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
    setNameError(inputData.name.length < 1 || inputData.name.length > 30);
  };

  const handleEmail = (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
    setEmailError(
      !(inputData.email.includes('.') && inputData.email.includes('@'))
    );
  };

  const handlePassword = (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
    setPasswordError(inputData.password.length < 8);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await axios
      .post('http://localhost:4000/api/v1/register', inputData)
      .then((res) => {
        // console.log(res);
        setAllowed(res.data.success);
      })
      .catch((err) => {
        console.log(err);
      });
    // console.log(allowed);
  };

  return (
    <ThemeProvider theme={defaultTheme}>
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
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  autoComplete="given-name"
                  name="name"
                  value={inputData.name}
                  required
                  fullWidth
                  id="name"
                  label="Name"
                  autoFocus
                  error={nameError}
                  helperText={
                    nameError
                      ? 'Name length should not be more than 30 charachters'
                      : null
                  }
                  onChange={handleName}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  value={inputData.email}
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  error={emailError}
                  helperText={emailError ? 'Enter valid Email' : null}
                  onChange={handleEmail}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  value={inputData.password}
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  error={passwordError}
                  helperText={
                    passwordError
                      ? 'Password must have atleast 8 charachters'
                      : null
                  }
                  onChange={handlePassword}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="success"
              sx={{ mt: 3, mb: 2 }}
            >
              {allowed ? (
                <Link to="/" style={{ textDecoration: 'none', color: '#fff' }}>
                  Sign Up
                </Link>
              ) : (
                'Sign Up'
              )}
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link to="/signin" variant="body2" style={{ color: '#1976d2' }}>
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
