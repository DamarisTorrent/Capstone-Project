const { showProductDetail } = require('../service/product')

exports.getProductDetail = async (req, res) => {

  try {
   
    const productDetail = await showProductDetail(req.params.id)
    
    res.json(productDetail)
    
  } catch (error) {

    console.error(error)
    res.status(500).send("Internal Server Error")
  }
}