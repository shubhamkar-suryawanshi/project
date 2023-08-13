import React from 'react';
import { Container, Grid } from '@mui/material';
import BlogCard from '../Components/BlogCard';

import { dummyBlogs } from '../constants';

function BlogPage() {
  return (
    <React.Fragment>
      <Container maxWidth="lg" sx={{ marginTop: '3rem' }}>
        <Grid container spacing={5}>
          {dummyBlogs.map((blog) => {
            return <BlogCard info={blog} />;
          })}
        </Grid>
      </Container>
    </React.Fragment>
  );
}

export default BlogPage;
