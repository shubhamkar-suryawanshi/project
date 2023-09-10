import React from 'react';
import axios from 'axios';
import {
  Typography,
  Grid,
  Card,
  CardContent,
  TextField,
  Button,
  Container,
} from '@mui/material';

function Admin() {
  const [inputData, setInputData] = React.useState({
    name: '',
    description: '',
    price: '',
    category: '',
    rating: '',
    // images: {
    //   public_id: '',
    //   url: '',
    // },
    stock: '',
  });

  const handleData = (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await axios
      .post('http://localhost:4000/api/v1/admin/product/new', inputData)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Container maxWidth="lg">
      <Typography gutterBottom variant="h6" align="center">
        Add New Product
      </Typography>
      <Grid>
        <Card>
          <CardContent>
            <form onSubmit={handleSubmit}>
              <Grid container spacing={1}>
                <Grid xs={12} item>
                  <TextField
                    placeholder="Product Name"
                    label="Product Name"
                    variant="outlined"
                    name="name"
                    id="name"
                    onChange={handleData}
                    fullWidth
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Description"
                    multiline
                    rows={4}
                    placeholder="Description"
                    variant="outlined"
                    name="description"
                    id="description"
                    onChange={handleData}
                    fullWidth
                  />
                </Grid>
                <Grid xs={12} item>
                  <TextField
                    placeholder="Price"
                    label="Price"
                    variant="outlined"
                    name="price"
                    id="price"
                    onChange={handleData}
                    fullWidth
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    type="Rating"
                    placeholder="Rating"
                    label="Rating"
                    variant="outlined"
                    name="rating"
                    id="rating"
                    onChange={handleData}
                    fullWidth
                  />
                </Grid>
                {/* <Grid xs={12} item>
                  <TextField
                    placeholder="Image URL"
                    label="Image URL"
                    variant="outlined"
                    name="images.url"
                    id="images.url"
                    onChange={handleData}
                    fullWidth
                    required
                  />
                </Grid> */}
                <Grid xs={12} item>
                  <TextField
                    placeholder="Number of Items in stock"
                    label="Number of Items in stock"
                    variant="outlined"
                    name="stock"
                    id="stock"
                    onChange={handleData}
                    fullWidth
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    type="Category"
                    placeholder="Category"
                    label="Category"
                    variant="outlined"
                    name="category"
                    id="category"
                    onChange={handleData}
                    fullWidth
                    required
                  />
                </Grid>

                <Grid item xs={12}>
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    fullWidth
                  >
                    Submit
                  </Button>
                </Grid>
              </Grid>
            </form>
          </CardContent>
        </Card>
      </Grid>
    </Container>
  );
}

export default Admin;
