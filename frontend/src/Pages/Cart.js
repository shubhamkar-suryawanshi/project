import React from 'react';
import { Box, Button, Container, Typography } from '@mui/material';
import { clearCart } from '../shared/cartSlice';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import plant from '../assets/plant.png';

// RT
import { useSelector, useDispatch } from 'react-redux';
import { addItem, getTotal } from '../shared/cartSlice';

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const totalPrice = useSelector((state) => state.cart.totalPrice);

  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          marginY: '2rem',
        }}
      >
        <Typography variant="h6">Cart Items - {cartItems.length}</Typography>
        <Button variant="outlined" onClick={handleClearCart} color="error">
          Clear Cart
        </Button>
      </Box>
      <Box sx={{ marginY: '2rem' }}>
        {cartItems?.length === 0 && (
          <h1> Cart is empty. Add Items to the cart!</h1>
        )}
      </Box>

      {cartItems.map((item) => {
        return (
          <Card
            sx={{
              width: '100%',
              color: 'black',
              borderRadius: '0px',
              padding: '1rem 3rem',
            }}
            key={item._id}
          >
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <CardMedia
                component="img"
                alt="green iguana"
                sx={{ width: '60px', height: '60px' }}
                image={plant}
              />
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <Typography variant="h5" component="span">
                  {item.name}
                </Typography>
                <Typography variant="body2" component="span">
                  ({item.category})
                </Typography>
              </Box>
              {/* { setTotalCost((prevCost) => prevCost + {item.price})} */}
              <Typography>{item.price} Rs./ item</Typography>
            </Box>
          </Card>
        );
      })}

      <Box
        sx={{ display: 'flex', flexDirection: 'row-reverse', marginY: '2rem' }}
      >
        <Typography variant="h6">Total: {totalPrice}</Typography>
      </Box>
      <Box
        sx={{ display: 'flex', flexDirection: 'row-reverse', marginY: '2rem' }}
      >
        <Button variant="contained" color="success">
          Proceed To Payment
        </Button>
      </Box>
    </Container>
  );
};

export default Cart;
