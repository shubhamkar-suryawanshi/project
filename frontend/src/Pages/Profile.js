import React from 'react';
import { Container, Box, Typography } from '@mui/material';
import bg from '../assets/bg1.jpg';
import prof from '../assets/prof.png';
import axios from 'axios';

// const link = 'http://localhost:4000/api/v1/me';

function Profile() {
  // const [user, setUser] = useState({});

  // React.useEffect(() => {
  //   axios.get('http://localhost:4000/api/v1/me').then((res) => {
  //     console.log(res);
  //     // setUser(res);
  //   });
  // }, []);

  React.useEffect(() => {
    axios.get('http://localhost:4000/api/v1/me').then((res) => {
      console.log(res);
    });
  }, []);

  // const getUser = async () => {
  //   const data = await fetch('');
  //   const json = await data.json();
  //   console.log(json);
  // };

  return (
    <Container maxWidth="md">
      <Box
        sx={{
          textAlign: 'left',
        }}
      >
        <Box
          sx={{
            width: '100%',
          }}
        >
          <img width="100%" src={bg} alt="Background" />
        </Box>
        <Box
          sx={{
            width: '10%',
            marginX: 'auto',
          }}
        >
          <img width="100%" src={prof} alt="Logo" />
        </Box>
      </Box>

      <Box>
        <Box sx={{ margin: '1rem' }}>
          <Typography
            variant="body1"
            component="span"
            sx={{ fontWeight: '400' }}
          >
            Name:
          </Typography>
        </Box>

        <Box sx={{ margin: '1rem' }}>
          <Typography
            variant="body1"
            component="span"
            sx={{ fontWeight: '400' }}
          >
            Email:
          </Typography>
        </Box>
      </Box>

      {/* <Button
        variant="contained"
        onClick={() => {
          setChanged(!changed);
        }}
      >
        {changed ? 'Save Profile' : 'Update Profile'}
      </Button> */}
    </Container>
  );
}

export default Profile;
