import ProductCard from "./ProductCard";
import { Fragment } from "react";
import { useState, useEffect } from "react";
import { getProducts } from "../utility/api";
import Grid from "@mui/material/Grid";

function ProductContainer(props) {
  const { queryObject } = props;
  const [data, setData] = useState();

  //Get products from the product table, pass the query object with search parameters
  useEffect(() => {
    getProducts(queryObject)
      .then((data) => setData(data))
      .catch((error) => console.log(error));
  }, [queryObject]);

  if (!data) {
    return <>Loading...</>;
  }

  return (
    <Grid   
      container
      direction="row"
      justifyContent="space-evenly"
      alignItems="stretch"
    >
      {/* Map through the product array and display product cards */}
      {data.map((element) => {
        return (
          <Grid item xs={12} md={6} lg={4}>
            <ProductCard
              id={element.id}
              name={element.name}
              retailer_name={element.retailer_name}
              url={element.url}
              brand={element.brand}
              price={element.price}
              sizes={element.sizes}
              image={element.image}
            />
          </Grid>
        );
      })}
    </Grid>
  );
}

export default ProductContainer;
