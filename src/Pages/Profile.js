import React, { useState } from 'react';
import { Container, Box, Typography, Button } from '@mui/material';
import bg from '../assets/bg1.jpg';
import prof from '../assets/prof.png';

function Profile() {
  const [user, setUser] = useState({
    name: 'Shubhamkar Suryawanshi',
    email: 'shubhamkar@greenkart.com',
    address: 'Shahupuri, Kolhapur 416001',
    phone: '9191917171',
  });
  const [changed, setChanged] = useState(false);

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
            Name:{' '}
          </Typography>{' '}
          <input
            type="text"
            style={{ padding: '1rem', width: '100%' }}
            value={user.name}
            onChange={(e) => {
              setUser({ ...user, name: e.target.value });
              setChanged(true);
            }}
          />
        </Box>
        <Box sx={{ margin: '1rem' }}>
          <Typography
            variant="body1"
            component="span"
            sx={{ fontWeight: '400' }}
          >
            Address:{' '}
          </Typography>{' '}
          <input
            type="text"
            style={{ padding: '1rem', width: '100%' }}
            value={user.address}
            onChange={(e) => {
              setUser({ ...user, address: e.target.value });
              setChanged(true);
            }}
          />
        </Box>
        <Box sx={{ margin: '1rem' }}>
          <Typography
            variant="body1"
            component="span"
            sx={{ fontWeight: '400' }}
          >
            Email:
          </Typography>{' '}
          <input
            type="text"
            style={{ padding: '1rem', width: '100%' }}
            value={user.email}
            onChange={(e) => {
              setUser({ ...user, email: e.target.value });
              setChanged(true);
            }}
          />
        </Box>
        <Box sx={{ margin: '1rem' }}>
          <Typography
            variant="body1"
            component="span"
            sx={{ fontWeight: '400' }}
          >
            Phone Number:
          </Typography>{' '}
          <input
            type="text"
            style={{ padding: '1rem', width: '100%' }}
            value={user.phone}
            onChange={(e) => {
              setUser({ ...user, phone: e.target.value });
              setChanged(true);
            }}
          />
        </Box>
      </Box>

      <Button
        variant="contained"
        onClick={() => {
          alert('Your profile is saved');
          setChanged(!changed);
        }}
      >
        {changed ? 'Save Profile' : 'Update Profile'}
      </Button>
    </Container>
  );
}

export default Profile;
