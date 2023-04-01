import ProductCard from "./ProductCard"
import { Fragment } from "react"
import { useState, useEffect } from "react"
import { getProducts } from "../utility/api"

function ProductContainer(props) {
  
  const { queryObject } = props
  const [data, setData] = useState()

  //Get products from the product table, pass the query object with search parameters
  useEffect(() => {
    getProducts(queryObject)
      .then(data => setData(data))
      .catch((error) => console.log(error))
  }, [queryObject])
  
  // console.log(queryObject.brands.brand.length)
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