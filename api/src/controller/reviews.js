const { showReviews } = require('../service/reviews')

exports.getReviews = async (req, res) => {
 
  try {
   
    console.log('reviews controller', req.params.id)
    const reviews = await showReviews(req.params.id)
    
    res.json(reviews)
    
  } catch (error) {

    console.error(error)
    res.status(500).send("Internal Server Error")
  }
}