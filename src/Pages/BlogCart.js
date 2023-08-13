import React from 'react';
import { useSelector } from 'react-redux';
import {
  Box,
  Button,
  Container,
  Typography,
  Grid,
  CardHeader,
  Collapse,
} from '@mui/material';
import { clearCart } from '../shared/blogSlice';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import IconButton from '@mui/material/IconButton';
import plant from '../assets/plant.png';

import { styled } from '@mui/material/styles';

// RT
import { useDispatch } from 'react-redux';
// import { addItem } from '../shared/blogSlice';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

const BlogCart = () => {
  const cartItems = useSelector((store) => store.blogs.items);

  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return console.log(cartItems);
  // <Container maxWidth="lg">
  //   <Box
  //     sx={{
  //       display: 'flex',
  //       justifyContent: 'space-between',
  //       marginY: '2rem',
  //     }}
  //   >
  //     <Typography variant="h6">Liked Blogs - {cartItems.length}</Typography>
  //     <Button variant="outlined" onClick={handleClearCart}>
  //       Clear All
  //     </Button>
  //   </Box>
  //   <Box sx={{ marginY: '2rem' }}>
  //     {cartItems?.length === 0 && (
  //       <h1> Blog Cart is empty. Add Blogs to the cart!</h1>
  //     )}
  //   </Box>

  //   {cartItems.map((item) => {
  //     return (
  //       <Grid item xs={12} md={6} lg={4}>
  //         <Card
  //           sx={{
  //             maxWidth: '450px',
  //           }}
  //         >
  //           <CardHeader title={item.title} />
  //           <Box>
  //             <img width="125px" src={plant} alt="Plant" />
  //           </Box>
  //           <CardContent>
  //             <Typography variant="body2" color="text.secondary">
  //               {item.short}
  //             </Typography>
  //           </CardContent>
  //           <CardActions disableSpacing>
  //             <ExpandMore
  //               expand={expanded}
  //               onClick={handleExpandClick}
  //               aria-expanded={expanded}
  //               aria-label="show more"
  //             >
  //               <ExpandMoreIcon />
  //             </ExpandMore>
  //           </CardActions>
  //           <Collapse in={expanded} timeout="auto" unmountOnExit>
  //             <CardContent>
  //               <Typography paragraph>Method:</Typography>
  //               <Typography paragraph>{item.long}</Typography>
  //             </CardContent>
  //           </Collapse>
  //         </Card>
  //       </Grid>
  //     );
  //   })}
  // </Container>
};

export default BlogCart;
