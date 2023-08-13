import React from 'react';
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
  return (
    <Container maxWidth="lg">
      <Typography gutterBottom variant="h6" align="center">
        Add New Product
      </Typography>
      <Grid>
        <Card>
          <CardContent>
            <form>
              <Grid container spacing={1}>
                <Grid xs={12} item>
                  <TextField
                    placeholder="Product Name"
                    label="Product Name"
                    variant="outlined"
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
                    fullWidth
                  />
                </Grid>
                <Grid xs={12} item>
                  <TextField
                    placeholder="Price"
                    label="Price"
                    variant="outlined"
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
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    type="Category"
                    placeholder="Category"
                    label="Category"
                    variant="outlined"
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
