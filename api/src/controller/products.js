const { showProducts } = require('../service/products')

exports.getProducts = async (req, res) => {

  const {
    thickness,
    size,
    zipType, 
    price,
    brands
  } = req.query
  
  try {
   
    const products = await showProducts(thickness, size, zipType, price, brands)
    
    res.json(products)
    
  } catch (error) {

    console.error(error)
    res.status(500).send("Internal Server Error")
  }
}