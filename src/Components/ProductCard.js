import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import { dummyData } from "../constants";

// RT
import { useDispatch } from "react-redux";
import { addItem } from "../shared/cartSlice";

function ProductCard() {
  const dispatch = useDispatch();

  return (
    <React.Fragment>
      {dummyData.map((item) => {
        return (
          <Card
            sx={{
              width: "300px",
              height: "450px",
              boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px;",
              borderRadius: "1rem",
            }}
          >
            <CardMedia
              component="img"
              alt="green iguana"
              sx={{ width: "80%", margin: "auto" }}
              image={item.img}
            />
            <CardContent>
              <Typography variant="p" sx={{ color: "#18d39e" }}>
                {item.size}
              </Typography>
              <Typography variant="h5" component="p" sx={{ fontWeight: "500" }}>
                {item.company}
              </Typography>
              <Typography variant="body2">{item.catagory}</Typography>
              <Box>
                <Typography
                  sx={{ textDecoration: "line-through", color: "#a1a1a1" }}
                  component="span"
                >
                  {item.mrp}
                </Typography>{" "}
                <Typography component="span">| {item.discounted} </Typography>
                <Typography component="span" sx={{ color: "#18d39e" }}>
                  {" "}
                  {item.percOff}
                </Typography>
              </Box>
            </CardContent>
            <CardActions
              disableSpacing
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Button
                variant="contained"
                color="success"
                sx={{
                  padding: "0.5rem",
                  borderRadius: "0.5rem",
                }}
                onClick={() => {
                  dispatch(addItem(item));
                }}
              >
                Add To Cart
              </Button>
            </CardActions>
          </Card>
        );
      })}
    </React.Fragment>
  );
}

export default ProductCard;
