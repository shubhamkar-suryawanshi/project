import React from "react";
import ProductCard from "../Components/ProductCard";
import { Box, Container } from "@mui/material";

function Herbicides() {
  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          marginTop: "2rem",
          display: "flex",
          flexWrap: "wrap",
          gap: "2rem",
          justifyContent: "space-between",
        }}
      >
        <ProductCard />
      </Box>
    </Container>
  );
}

export default Herbicides;
