import ProductCard from "./ProductCard"
import { Fragment } from "react"
import { useState, useEffect } from "react";
import { getProducts } from "../utility/api";

function ProductContainer() {
  

  const [data, setData] = useState()

  //Get all of the products from the product table
  useEffect(() => {
    getProducts()
      .then(data => setData(data))
      .catch((error) => console.log(error))
  }, [])
  
  if (!data) {
    return <>Loading...</>
  }
  
  return (
    <Fragment>
      {/* Map through the product array and display product cards */}
      {data.map((element) => {
        return (
          <ProductCard
            id={element.id}
            name={element.name}
            retailer={element.retailer}
            url={element.url}
            brand={element.brand}
            price={element.price}
            size={element.size}
            image={element.image}
          ></ProductCard>
        )
      })}
    </Fragment>
  )
}

export default ProductContainer