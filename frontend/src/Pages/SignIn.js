import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import axios from 'axios';
import AuthContext from '../context/AuthProvider';

const defaultTheme = createTheme();

export default function SignIn() {
  const { setAuth } = React.useContext(AuthContext);
  const [allowed, setAllowed] = React.useState(false);
  const [inputData, setInputData] = React.useState({
    email: '',
    password: '',
  });
  const [emailError, setEmailError] = React.useState(false);
  const [passwordError, setPasswordError] = React.useState(false);

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
      .post('http://localhost:4000/api/v1/login', inputData)
      .then((res) => {
        console.log(res);
        const accessToken = res?.token;
        setAllowed(res.data.success);
        // setAuth({ email, password, accessToken });
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
            Sign in
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              required
              fullWidth
              sx={{ mt: 3, mb: 2 }}
              value={inputData.email}
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              error={emailError}
              helperText={emailError ? 'Enter valid Email' : null}
              onChange={handleEmail}
            />
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

            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="success"
              sx={{ mt: 3, mb: 2 }}
            >
              {allowed ? (
                <Link to="/" style={{ textDecoration: 'none', color: '#fff' }}>
                  Sign In
                </Link>
              ) : (
                'Sign In'
              )}
            </Button>
            <Grid container>
              <Grid item xs>
                <Link
                  to="/forgot-password"
                  variant="body2"
                  style={{ color: '#1976d2' }}
                >
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link to="/signup" variant="body2" style={{ color: '#1976d2' }}>
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
