import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { getProductDetail } from "../../utility/api";
import Button from "@mui/material/Button";
import ProductReview from "../../components/ProductReview";
import ReviewsContainer from "../../components/ReviewsContainer";
import Header from "../../layouts/Header";

function ProductDetail() {
  const { id } = useParams();

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  const [data, setData] = useState();

  useEffect(() => {
    getProductDetail(id)
      .then((data) => setData(data))
      .catch((error) => console.log(error));
  }, []);

  console.log('product detail', data)
  if (!data) {
    return <>Loading...</>;
  }

  return (
    <>
      <Header></Header>
      <Box marginTop={5} sx={{ flexGrow: 1 }}>
        <Grid container spacing={3}>
          <Grid>
            <Grid item xs={6}>
              <Item>
                {/* The product image */}
                <CardMedia
                  component="img"
                  sx={{
                    height: 700,
                    width: 500,
                    maxHeight: 560,
                    maxWidth: 560,
                  }}
                  src={data.image}
                />
              </Item>
            </Grid>

            {/* The reviews component, if any reviews exist for this product */}
            <Grid>
              <Item>
                <ProductReview
                  name={data.name}
                  sx={{ marginTop: "20px" }}
                ></ProductReview>
              </Item>
              <Item>
                {/* Display the reviews */}
                <ReviewsContainer></ReviewsContainer>
              </Item>
            </Grid>
          </Grid>

          {/* The detailed product information */}
          <Grid item xs>
            <Item>
              <Typography gutterBottom variant="h4" component="div">
                {data.brand}
              </Typography>
              <Typography
                gutterBottom
                variant="h6"
                component="div"
                sx={{ fontWeight: "bold" }}
              >
                {data.name}
              </Typography>
              <br></br>
              <Typography gutterBottom variant="h6" component="div">
                Available Sizes: {data.sizes}
              </Typography>
              <br></br>
              <Typography
                gutterBottom
                variant="h4"
                component="div"
                color="#FF0000"
              >
                ${data.price}
              </Typography>
              <br></br>
              <Typography gutterBottom variant="p2" component="div">
                {data.description}
              </Typography>
              <br></br>
              <Button
                className="button"
                variant="contained"
                sx={{ marginTop: "10px", width: "150px" }}
                href={data.url}
                target="_blank"
              >
                Shop Now!
              </Button>
              <br></br>
              <br></br>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                sx={{ fontWeight: "bold" }}
              >
                {data.retailer_name}
              </Typography>
              <Typography gutterBottom variant="h6" component="div">
                {data.location}
              </Typography>
              <Typography gutterBottom variant="h7" component="div">
                {data.shipping_info}
              </Typography>
              <Typography
                gutterBottom
                variant="h6"
                component="div"
                sx={{ fontStyle: "italic" }}
              >
                {data.tagline}
              </Typography>
            </Item>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default ProductDetail;
