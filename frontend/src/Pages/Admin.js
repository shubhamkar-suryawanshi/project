import * as React from 'react';
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
  const [name, setName] = React.useState('');
  const [description, setDescription] = React.useState('');
  const [price, setPrice] = React.useState('');
  const [category, setCategory] = React.useState('');
  const [rating, setRating] = React.useState('');
  const [stock, setStock] = React.useState('');
  const [url, setUrl] = React.useState('');
  const [public_id, setPublic_id] = React.useState('');

  const user = JSON.parse(sessionStorage.getItem('user'));
  const token = user.token;
  // console.log(token);

  // const [inputData, setInputData] = React.useState({
  //   name: '',
  //   description: '',
  //   price: '',
  //   category: '',
  //   rating: '',
  //   // images: {
  //   //   public_id: '',
  //   //   url: '',
  //   // },
  //   stock: '',
  // });

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handlePrice = (e) => {
    setPrice(e.target.value);
  };

  const handleCategory = (e) => {
    setCategory(e.target.value);
  };

  const handleDescription = (e) => {
    setDescription(e.target.value);
  };

  const handleRating = (e) => {
    setRating(e.target.value);
  };

  const handleStock = (e) => {
    setStock(e.target.value);
  };

  const handlepublic_id = (e) => {
    setPublic_id(e.target.value);
  };

  const handleurl = (e) => {
    setUrl(e.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const inputData = {
      name,
      description,
      price,
      stock,
      images: {
        public_id,
        url,
      },
      category,
      rating,
    };
    await axios
      .post('http://localhost:4000/api/v1/admin/product/new', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(inputData),
      })
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
                    onChange={handleName}
                    fullWidth
                    required
                    value={name}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Description"
                    multiline
                    placeholder="Description"
                    variant="outlined"
                    name="description"
                    id="description"
                    onChange={handleDescription}
                    fullWidth
                    value={description}
                  />
                </Grid>
                <Grid xs={12} item>
                  <TextField
                    placeholder="Price"
                    label="Price"
                    variant="outlined"
                    name="price"
                    id="price"
                    onChange={handlePrice}
                    fullWidth
                    required
                    value={price}
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
                    onChange={handleRating}
                    fullWidth
                    value={rating}
                  />
                </Grid>
                <Grid xs={12} item>
                  <TextField
                    placeholder="Image URL"
                    label="Image URL"
                    variant="outlined"
                    name="images.url"
                    id="images.url"
                    onChange={handleurl}
                    fullWidth
                    required
                    value={url}
                  />
                </Grid>
                <Grid xs={12} item>
                  <TextField
                    placeholder="Image ID"
                    label="Image ID"
                    variant="outlined"
                    name="images.ID"
                    id="images.ID"
                    onChange={handlepublic_id}
                    fullWidth
                    required
                    value={public_id}
                  />
                </Grid>
                <Grid xs={12} item>
                  <TextField
                    placeholder="Number of Items in stock"
                    label="Number of Items in stock"
                    variant="outlined"
                    name="stock"
                    id="stock"
                    onChange={handleStock}
                    fullWidth
                    required
                    value={stock}
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
                    onChange={handleCategory}
                    fullWidth
                    required
                    value={category}
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
