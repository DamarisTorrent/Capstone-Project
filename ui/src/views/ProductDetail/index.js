import { useParams } from "react-router-dom"

function ProductDetail() {
  
  const { id }  = useParams()
  
  return (
    <div>This is the product detail page for product with id {id}</div>
  )
}

export default ProductDetail